import React from "react";

export const SidebarData = [
    {
        title: "홈",
        path: "/",
        // icon:<AiIcons.AiOutlineHome color="#ffffff"/>,
        cName: "nav-text"
    },
    {
        title: "로그인/로그아웃",
        path: "/login",
        // icon:<BiIcons.BiLogIn color="#ffffff"/>,
        cName: "nav-text"
    },
    {
        title: "내 설문 몰아보기",
        path: "/result",
        // icon:<BsIcons.BsFillGridFill color="#ffffff"/>,
        cName: "nav-text"
    },
    {
        title: "계정설정",
        cName: "fixnav-text"
        // icon:<IoIcons.IoIosPerson color="#ffffff"/>,
        // ↑이부분을 이상한걸 써서 link 가 이상해진거임
    },
    {
        title: "암호변경",
        path: "/Pass_change",
        // icon:<BsIcons.BsFillGridFill color="#ffffff"/>,
        cName: "mini-nav-text"
    },
    {
        title: "회원탈퇴",
        path: "/quit_account",
        // icon:<BsIcons.BsFillGridFill color="#ffffff"/>,
        cName: "mini-nav-text"
    },
    {
        title: "Developer Intro.",
        path: "/developer_intro",
        cName: "nav-text"
    }
];
