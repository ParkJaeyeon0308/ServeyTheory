import React from 'react'
// import * as AiIcons from "react-icons/ai";
// import * as BiIcons from "react-icons/bi";
// import * as BsIcons from "react-icons/bs";
// import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: '홈',
        path:'/',
        // icon:<AiIcons.AiOutlineHome color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: '로그인/로그아웃',
        path:'/login_logout',
        // icon:<BiIcons.BiLogIn color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: '내 설문 몰아보기',
        path:'/result',
        // icon:<BsIcons.BsFillGridFill color="#ffffff"/>,
        cName: 'nav-text'
    },
    {
        title: '계정설정',
        path:'/account',
        // icon:<IoIcons.IoIosPerson color="#ffffff"/>,
        cName: 'nav-text',
        // ↑이부분을 이상한걸 써서 link 가 이상해진거임
        subNav:[
            {
                title:'암호변경',
                path:'/account/password',
                cName: 'nav-text'
            },
            {
                title:'회원탈퇴',
                path:'/account/quit_account',
                cName: 'nav-text'
            }
        ]
    }
];