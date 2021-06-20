import React from "react";
import { Link } from "react-router-dom";
import "./survey.css";

import $ from "jquery";
window.$ = $;

function Survey() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".btn_gotop").show();
        } else {
            $(".btn_gotop").hide();
        }
    });
    $(".btn_gotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

    return (
        <div className="survey">
            <div className="text">
                원하시는 테스트를{" "}
                <span
                    style={{
                        color: "rgb(113, 157, 138)",
                        fontFamily: "S-CoreDream-6Bold"
                    }}
                >
                    선택
                </span>
                해주세요
            </div>
            <div className="subtext">
                박스를 클릭하면 해당 테스트 화면으로 이동합니다.
            </div>
            <div class="box2"></div>
            <div className="test_box">
                <Link
                    to="./Question1_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_1.png"
                        alt="app vs web"
                    />
                    <div className="boxtext_1">
                        웹과 앱 중에 나는 어느 쪽에 더 관심 있어 하고, 개발하는
                        걸 선호하는 지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #웹_앱_개발자 #웹_앱_디자이너
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question2_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_2.png"
                        alt="3 month project"
                    />
                    <div className="boxtext_2">
                        3개월 동안 진행하는 프로젝트가 주어졌을 때 한 달만에
                        완성해내거나 3개월이라는 넉넉한 시간을 줬음에도 불구하고
                        시간이 더 필요한 상황을 주고, 그 중 나는 어떤 타입인지
                        알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #벼락치기 #개발자는_힘들어
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question3_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_3.png"
                        alt="mental grade"
                    />
                    <div className="boxtext_1">
                        미림 학생을 대상으로 한 테스트로, 자신이 얼마나 미림화가
                        되었는 지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">#미림 #프로젝트</div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question4_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_4.png"
                        alt="rectal mbti"
                    />
                    <div className="boxtext_2">
                        스타트업 / 중소, 연봉 / 워라밸, 개발직종 / 운영, 디자인,
                        사무직종으로 세분화하여 내가 원하는 직장 타입이 무엇인
                        지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #모든 #취준생분들 #힘내세요
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question5_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_5.png"
                        alt="a few years developer mined"
                    />
                    <div className="boxtext_1">
                        비기너 / 주니어 / 시니어로 나누어 내가 가지고 있는
                        개발자 마인드의 위치는 어디에 있는 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #비기너 #주니어 #시니어 #개발라이프
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question6_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_6.png"
                        alt="software? solution? design?"
                    />
                    <div className="boxtext_2">
                        나는 디자인, 개발 감각이 둘 다 있어서 둘 중 어느 쪽의
                        퍼센트가 더 큰 지, 아니면 한 분야만 잘하는 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-left">#디발자 #개자이너</div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question7_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_7.png"
                        alt="server dev vs front dev"
                    />
                    <div className="boxtext_1">
                        미림마이스터고에 있는 소프트웨어과 / 웹솔루션과 /
                        디자인과 중에서 나는 어떤과에 적합한 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #소프트웨어 #웹솔루션 #디자인
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question8_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_8.png"
                        alt="programming languages"
                    />
                    <div className="boxtext_2">
                        나는 프론트엔드 / 백엔드 중 어떤 분야에 적성이 맞는지 알
                        수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #백엔드 #프론트엔드 #개발
                    </div>
                </Link>
            </div>
            <div className="test_box">
                <Link
                    to="./Question9_1"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_9.png"
                        alt="leader vs follower"
                    />
                    <div className="boxtext_1">
                        팀플에서 나는 리더 / 조력자 / 평범한 팀원 / 버스받는
                        팀원 중 어떤 포지션인지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">#열정 #성장 #협동</div>
                </Link>
            </div>
            <a href="/survey/#" class="btn_gotop">
                <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjU0NCA0OTAuNTQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNTQ0IDQ5MC41NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM2MDdEOEI7IiBkPSJNMTguMDk4LDI3NC4xNTFMMjQ1LjIxMyw0Ny4wMTVsMjI3LjExNSwyMjcuMTM2YzQuMjM3LDQuMDkzLDEwLjk5LDMuOTc1LDE1LjA4My0wLjI2Mg0KCQljMy45OTMtNC4xMzQsMy45OTMtMTAuNjg3LDAtMTQuODIxTDI1Mi43NDQsMjQuNDAxYy00LjE2NS00LjE2NC0xMC45MTctNC4xNjQtMTUuMDgzLDBMMi45OTQsMjU5LjA2OA0KCQljLTQuMDkzLDQuMjM3LTMuOTc1LDEwLjk5LDAuMjYyLDE1LjA4M2M0LjEzNCwzLjk5MiwxMC42ODcsMy45OTIsMTQuODIsMEgxOC4wOTh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzYwN0Q4QjsiIGQ9Ik0yNTIuNzY1LDIxNi4zOGMtNC4xNjUtNC4xNjQtMTAuOTE3LTQuMTY0LTE1LjA4MywwTDMuMDE2LDQ1MS4wNDcNCgkJYy00LjA5Myw0LjIzNy0zLjk3NiwxMC45OSwwLjI2MiwxNS4wODNjNC4xMzQsMy45OTMsMTAuNjg3LDMuOTkzLDE0LjgyMSwwbDIyNy4xMTUtMjI3LjExNWwyMjcuMTE1LDIyNy4xMzYNCgkJYzQuMjM3LDQuMDkzLDEwLjk5LDMuOTc2LDE1LjA4My0wLjI2MWMzLjk5My00LjEzNCwzLjk5My0xMC42ODgsMC0xNC44MjFMMjUyLjc2NSwyMTYuMzh6Ii8+DQo8L2c+DQo8cGF0aCBkPSJNNDc5Ljg4LDI3Ny4yNjZjLTIuODMxLDAuMDA1LTUuNTQ4LTEuMTE1LTcuNTUyLTMuMTE1TDI0NS4yMTMsNDcuMDE1TDE4LjA5OCwyNzQuMTUxDQoJYy00LjIzNyw0LjA5My0xMC45OSwzLjk3NS0xNS4wODMtMC4yNjJjLTMuOTkyLTQuMTM0LTMuOTkyLTEwLjY4NywwLTE0LjgyTDIzNy42ODIsMjQuNDAxYzQuMTY1LTQuMTY0LDEwLjkxNy00LjE2NCwxNS4wODMsMA0KCWwyMzQuNjY3LDIzNC42NjdjNC4xNTksNC4xNzIsNC4xNDgsMTAuOTI2LTAuMDI0LDE1LjA4NUM0ODUuNDA5LDI3Ni4xNDYsNDgyLjcwMiwyNzcuMjY1LDQ3OS44OCwyNzcuMjY2eiIvPg0KPHBhdGggZD0iTTQ3OS44OCw0NjkuMjY2Yy0yLjgzMSwwLjAwNS01LjU0OC0xLjExNS03LjU1Mi0zLjExNUwyNDUuMjEzLDIzOS4wMTVMMTguMDk4LDQ2Ni4xNTENCgljLTQuMjM3LDQuMDkzLTEwLjk5LDMuOTc2LTE1LjA4My0wLjI2MmMtMy45OTMtNC4xMzQtMy45OTMtMTAuNjg3LDAtMTQuODIxbDIzNC42NjctMjM0LjY2N2M0LjE2NS00LjE2NCwxMC45MTctNC4xNjQsMTUuMDgzLDANCglsMjM0LjY2NywyMzQuNjY3YzQuMTU5LDQuMTcyLDQuMTQ4LDEwLjkyNi0wLjAyNCwxNS4wODVDNDg1LjQwOSw0NjguMTQ2LDQ4Mi43MDIsNDY5LjI2NSw0NzkuODgsNDY5LjI2NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                    style={{ width: "5vw", height: "5vh" }}
                    alt="go to top"
                />
            </a>
        </div>
    );
}

export default Survey;
