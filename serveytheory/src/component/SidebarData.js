import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiOutlineHome color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: 'Login_Logout',
        path:'/login_logout',
        icon:<BiIcons.BiLogIn color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: 'Result',
        path:'/result',
        icon:<BsIcons.BsFillGridFill color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path:'/account',
        icon:<IoIcons.IoIosPerson color="#ffffff"/>,
        cName: 'nav-text'
        // ↑이부분을 이상한걸 써서 link 가 이상해진거임
    }
];