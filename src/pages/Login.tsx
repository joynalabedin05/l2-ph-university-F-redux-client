import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm({
        defaultValues:{
            userId: 'A-0001',
            password: 'admin12345'
        } 
    });

    const [login, { error}] = useLoginMutation();
    // console.log('mutatuion data:',data);
    console.log('mutatuion error:',error);

    const onSubmit = async (data: FieldValues) =>{

       const toastId =  toast.loading("logging in");

       try {
        const userInfo = {
            id: data.userId,
            password: data.password,
        }

        const res =  await login(userInfo).unwrap();
        // console.log(data);
        console.log(res);
        const user = verifyToken(res.data.accessToken) as TUser;
        // console.log(user);
        toast.success("logged in", {id: toastId, duration: 2000});
        dispatch(setUser({user: user, token: res.data.accessToken}));

        navigate(`/${user.role}/dashboard`);
        // navigate("/");
       }
       
       catch(err){
        toast.error("something went wrong" ,{id: toastId});
       }

    }
    return (
        <div style={{margin: '20px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
            
        </form>
        </div>
    );
};

export default Login;