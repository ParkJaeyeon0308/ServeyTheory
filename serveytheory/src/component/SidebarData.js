import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiOutlineHome/>,
        cName: 'menu-text'
    },
    {
        title: 'Login/Logout',
        path:'/login_logout',
        icon:<BiIcons.BiLogIn/>,
        cName: 'menu-text'
    },
    {
        title: 'My Result',
        path:'/result',
        icon:<GrIcons.GrDocumentVerified/>,
        cName: 'menu-text'
    },
    {
        title: 'Account',
        path:'/account',
        icon:<IoIcons.IoIosPerson/>,
        cName: 'menu-text'
    }
];