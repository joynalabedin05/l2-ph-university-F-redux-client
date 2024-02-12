import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
// import { ReactNode } from "react";
// import { NavLink } from "react-router-dom";

// type TRoutes = {
//     path: string;
//     element: ReactNode;
// }
// type TSidebarItem = {
//     key: string;
//     label: ReactNode;
//     children?: TSidebarItem[];
// }


export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: 'Academic Management',
       children: [
        {
            name: 'Academic Semester ',
            path: 'academic-semester',
            element: <AcademicSemester></AcademicSemester>
        },
       ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin ',
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent></CreateStudent>
            },
        ],
       
    },
]


//programmitical way

// export const adminRoutes = adminPaths.reduce((acc: TRoutes[], item)=>{
//     if(item.path && item.element){
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }
//     if(item.children){
//         item.children.forEach((child)=>{
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         })
//     }
//     return acc;
// }, [])

// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item)=>{
//     if(item.path && item.name){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         });
//     }
//     if(item.children){
//             acc.push({
//                 key: item.name,
//                 label: item.name,
//                 children: item.children.map((child)=>({
//                     key: child.name,
//                     label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//                 }))
//             });      
//     }
//     return acc;
// }, [])

// hard coded way

// export const adminPaths=  [
//     {
//         path: 'dashboard',
//         // index: true,
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin></CreateAdmin>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty></CreateFaculty>
//     },
// ]