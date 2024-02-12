
import { Button, Layout } from 'antd';
import {  Outlet } from 'react-router-dom';
// import { adminPaths } from '../../routes/admin.routes';
// import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
const { Header, Content,  } = Layout;
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { createElement } from 'react';

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//       key: String(index + 1),
//       icon: createElement(icon),
//       label: `nav ${index + 1}`,
//     }),
//   );

// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label:<NavLink to='/admin/dashboard'>Dashboard</NavLink> ,
//   },
  
//   {
//     key: '3',
//     label: 'User Management',
//     children: [
//       {
//         key: 'Create Admin',
//         label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
//       },
//       {
//         key: 'Create student',
//         label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
//       },
//       {
//         key: 'Create faculty',
//         label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
//       },
     
//     ],
//   },
// ]
const MainLayout = () => {

  const dispatch = useAppDispatch();
   const handleLogout = ()=>{
      dispatch(logout());
  }
    return (
        <Layout style={{height: '100vh'}}>

        <Sidebar></Sidebar>

        <Layout>
          <Header><Button onClick={handleLogout}>Logout</Button></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
              {/* <h1>main content here</h1> */}
              <Outlet></Outlet>
            </div>
          </Content>
          
        </Layout>
      </Layout>
    );
};

export default MainLayout;