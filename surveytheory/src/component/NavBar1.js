import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import Login, { user_id } from "../pages/Login/login";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// 로그인 한 후
export let collect1 = { surveytitle: "", result_url: "", result_date: "" };
export let collect2 = { surveytitle: "", result_url: "", result_date: "" };
export let collect3 = { surveytitle: "", result_url: "", result_date: "" };
export let collect4 = { surveytitle: "", result_url: "", result_date: "" };
export let collect5 = { surveytitle: "", result_url: "", result_date: "" };
export let collect6 = { surveytitle: "", result_url: "", result_date: "" };
export let collect7 = { surveytitle: "", result_url: "", result_date: "" };
export let collect8 = { surveytitle: "", result_url: "", result_date: "" };
export let collect9 = { surveytitle: "", result_url: "", result_date: "" };

function NavBar1() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const history = useHistory();

    const logout = () => {
        console.log("logout 실행됨");
        alert("정상적으로 로그아웃 되었습니다.");
        user_id.user_id = "novalue";
        collect1.survey_title = "";
        collect1.result_url = "";
        collect1.result_date = "";

        collect2.survey_title = "";
        collect2.result_url = "";
        collect2.result_date = "";

        collect3.survey_title = "";
        collect3.result_url = "";
        collect3.result_date = "";

        collect4.survey_title = "";
        collect4.result_url = "";
        collect4.result_date = "";

        collect5.survey_title = "";
        collect5.result_url = "";
        collect5.result_date = "";

        collect6.survey_title = "";
        collect6.result_url = "";
        collect6.result_date = "";

        collect7.survey_title = "";
        collect7.result_url = "";
        collect7.result_date = "";

        collect8.survey_title = "";
        collect8.result_url = "";
        collect8.result_date = "";

        collect9.survey_title = "";
        collect9.result_url = "";
        collect9.result_date = "";
    };

    const selectCollect = () => {
        console.log("collect에서 user_id: " + user_id.user_id);
        const textbox = {
            inText: user_id.user_id
        };

        if (user_id.user_id === "novalue") {
            alert("먼저 로그인 하세요.");
            history.push("/login");
        } else {
            fetch("http://localhost:3001/collect", {
                // server.js의 collect 메소드 사용
                method: "post", //통신방법
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(textbox) // 위에 정의한 textbox
            })
                .then((res) => res.json())
                .then((json) => {
                    history.push("/collect");

                    // 값의 개수만큼 넣는법
                    if (json.length === 1) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;
                    } else if (json.length === 2) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;
                    } else if (json.length === 3) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;
                    } else if (json.length === 4) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;
                    } else if (json.length === 5) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;

                        collect5.survey_title = json[4].survey_title;
                        collect5.result_url = json[4].result_url;
                        collect5.result_date = json[4].result_date;

                        collect6.survey_title = json[5].survey_title;
                        collect6.result_url = json[5].result_url;
                        collect6.result_date = json[5].result_date;
                    } else if (json.length === 6) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;

                        collect5.survey_title = json[4].survey_title;
                        collect5.result_url = json[4].result_url;
                        collect5.result_date = json[4].result_date;

                        collect6.survey_title = json[5].survey_title;
                        collect6.result_url = json[5].result_url;
                        collect6.result_date = json[5].result_date;
                    } else if (json.length === 7) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;

                        collect5.survey_title = json[4].survey_title;
                        collect5.result_url = json[4].result_url;
                        collect5.result_date = json[4].result_date;

                        collect6.survey_title = json[5].survey_title;
                        collect6.result_url = json[5].result_url;
                        collect6.result_date = json[5].result_date;

                        collect7.survey_title = json[6].survey_title;
                        collect7.result_url = json[6].result_url;
                        collect7.result_date = json[6].result_date;
                    } else if (json.length === 8) {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;

                        collect5.survey_title = json[4].survey_title;
                        collect5.result_url = json[4].result_url;
                        collect5.result_date = json[4].result_date;

                        collect6.survey_title = json[5].survey_title;
                        collect6.result_url = json[5].result_url;
                        collect6.result_date = json[5].result_date;

                        collect7.survey_title = json[6].survey_title;
                        collect7.result_url = json[6].result_url;
                        collect7.result_date = json[6].result_date;

                        collect8.survey_title = json[7].survey_title;
                        collect8.result_url = json[7].result_url;
                        collect8.result_date = json[7].result_date;
                    } else {
                        collect1.survey_title = json[0].survey_title;
                        collect1.result_url = json[0].result_url;
                        collect1.result_date = json[0].result_date;

                        collect2.survey_title = json[1].survey_title;
                        collect2.result_url = json[1].result_url;
                        collect2.result_date = json[1].result_date;

                        collect3.survey_title = json[2].survey_title;
                        collect3.result_url = json[2].result_url;
                        collect3.result_date = json[2].result_date;

                        collect4.survey_title = json[3].survey_title;
                        collect4.result_url = json[3].result_url;
                        collect4.result_date = json[3].result_date;

                        collect5.survey_title = json[4].survey_title;
                        collect5.result_url = json[4].result_url;
                        collect5.result_date = json[4].result_date;

                        collect6.survey_title = json[5].survey_title;
                        collect6.result_url = json[5].result_url;
                        collect6.result_date = json[5].result_date;

                        collect7.survey_title = json[6].survey_title;
                        collect7.result_url = json[6].result_url;
                        collect7.result_date = json[6].result_date;

                        collect8.survey_title = json[7].survey_title;
                        collect8.result_url = json[7].result_url;
                        collect8.result_date = json[7].result_date;

                        collect9.survey_title = json[8].survey_title;
                        collect9.result_url = json[8].result_url;
                        collect9.result_date = json[8].result_date;
                    }
                });
        }
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <h1>
                    <Navbar.Brand componentClass={Link} href="/">
                        <img
                            className="logo"
                            src="/images/logo.png"
                            style={{
                                width: 300,
                                height: 115,
                                marginLeft: "2vw"
                            }}
                            alt="logo"
                        />
                    </Navbar.Brand>
                </h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="menu-bar">
                        <h3>
                            <Nav.Link
                                href="/"
                                style={{ color: "rgb(88, 88, 88)" }}
                            >
                                홈
                            </Nav.Link>
                        </h3>
                        <h3>
                            <Nav.Link
                                href="/login"
                                style={{ color: "rgb(88, 88, 88)" }}
                            >
                                로그인
                            </Nav.Link>
                        </h3>
                        <h3>
                            <Nav.Link
                                href="/collect"
                                style={{ color: "rgb(88, 88, 88)" }}
                            >
                                설문결과
                            </Nav.Link>
                        </h3>
                        <h3>
                            <Nav.Link
                                href="/developer_intro"
                                style={{ color: "rgb(88, 88, 88)" }}
                            >
                                개발자
                            </Nav.Link>
                        </h3>
                        <h3>
                            <NavDropdown
                                title="계정설정"
                                id="collasible-nav-dropdown"
                            >
                                <h3>
                                    <NavDropdown.Item
                                        componentClass={Link}
                                        class="dropdown"
                                        href="/pass_change"
                                        to="/pass_change"
                                        style={{
                                            color: "rgb(88, 88, 88)",
                                            marginBottom: "2vh"
                                        }}
                                    >
                                        암호변경
                                    </NavDropdown.Item>
                                </h3>
                                <h3>
                                    <NavDropdown.Item
                                        componentClass={Link}
                                        style={{ color: "rgb(88, 88, 88)" }}
                                        class="dropdown"
                                        href="/quit_account"
                                        to="/quit_account"
                                    >
                                        회원탈퇴
                                    </NavDropdown.Item>
                                </h3>
                            </NavDropdown>
                        </h3>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar1;
