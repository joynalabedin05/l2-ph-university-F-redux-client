import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


const Login = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    // const {register, handleSubmit} = useForm({
    //     defaultValues:{
    //         userId: 'A-0001',
    //         password: 'admin12345'
    //     } 
    // });
    // const {register} = useFormContext();w

    const defaultValues = {
        userId: 'A-0001',
        password: 'admin12345',
      };

    const [login, { error}] = useLoginMutation();
    // console.log('mutatuion data:',data);
    console.log('mutatuion error:',error);

    const onSubmit = async (data: FieldValues) =>{
    console.log(data);

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
        <Row justify='center' align='middle' style={{height: '100vh'}}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <PHInput type='text' name="userId" label="ID: "></PHInput>                 
            <PHInput type='text' name="password" label="Password: "></PHInput>         
            <Button htmlType="submit">Login</Button>           
        </PHForm>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>           
        </form> */}
        </Row>
    );
};

export default Login;