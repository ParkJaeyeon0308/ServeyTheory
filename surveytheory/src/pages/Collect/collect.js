import React from "react";
import "./collect.css";
import Login, { user_id } from "../Login/login";
import NavBar1, {
    collect1,
    collect2,
    collect3,
    collect4,
    collect5,
    collect6,
    collect7,
    collect8,
    collect9
} from "../../component/NavBar1";

import $ from "jquery";
window.$ = $;

class collect extends React.Component {
    render() {
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

        const resultUrl1 = "/result" + collect1.result_url;
        const imgUrl1 =
            "/images/box-img/img2_" + collect1.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result1 = collect1.survey_title;
        const date1 = collect1.result_date;
        console.log("resultUrl1: " + resultUrl1 + "  imgUrl1: " + imgUrl1);

        const resultUrl2 = "/result" + collect2.result_url;
        const imgUrl2 =
            "/images/box-img/img2_" + collect2.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result2 = collect2.survey_title;
        const date2 = collect2.result_date;

        const resultUrl3 = "/result" + collect3.result_url;
        const imgUrl3 =
            "/images/box-img/img2_" + collect3.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result3 = collect3.survey_title;
        const date3 = collect3.result_date;

        const resultUrl4 = "/result" + collect4.result_url;
        const imgUrl4 =
            "/images/box-img/img2_" + collect4.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result4 = collect4.survey_title;
        const date4 = collect4.result_date;

        const resultUrl5 = "/result" + collect5.result_url;
        const imgUrl5 =
            "/images/box-img/img2_" + collect5.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result5 = collect5.survey_title;
        const date5 = collect5.result_date;

        const resultUrl6 = "/result" + collect6.result_url;
        const imgUrl6 =
            "/images/box-img/img2_" + collect6.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result6 = collect6.survey_title;
        const date6 = collect6.result_date;

        const resultUrl7 = "/result" + collect7.result_url;
        const imgUrl7 =
            "/images/box-img/img2_" + collect7.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result7 = collect7.survey_title;
        const date7 = collect7.result_date;

        const resultUrl8 = "/result" + collect8.result_url;
        const imgUrl8 =
            "/images/box-img/img2_" + collect8.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result8 = collect8.survey_title;
        const date8 = collect8.result_date;

        const resultUrl9 = "/result" + collect9.result_url;
        const imgUrl9 =
            "/images/box-img/img2_" + collect9.result_url.substr(0, 1) + ".png"; // url  = 1_1 형식
        const result9 = collect9.survey_title;
        const date9 = collect9.result_date;

        const img_style = {
            width: "4rem",
            height: "4rem",
            borderRadius: "40px 40px 40px 40px"
        };

        return (
            <div className="collect">
                <div className="test_result">설문 결과</div>
                <div className="container">
                    <center>
                        <article>
                            <table>
                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl1
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl1} style={img_style} />
                                    </th>
                                    <th>{result1}</th>
                                    <th>{date1}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl2
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl2} style={img_style} />
                                    </th>
                                    <th>{result2}</th>
                                    <th>{date2}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl3
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl3} style={img_style} />
                                    </th>
                                    <th>{result3}</th>
                                    <th>{date3}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl4
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl4} style={img_style} />
                                    </th>
                                    <th>{result4}</th>
                                    <th>{date4}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl5
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl5} style={img_style} />
                                    </th>
                                    <th>{result5}</th>
                                    <th>{date5}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl6
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl6} style={img_style} />
                                    </th>
                                    <th>{result6}</th>
                                    <th>{date6}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl7
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl7} style={img_style} />
                                    </th>
                                    <th>{result7}</th>
                                    <th>{date7}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl8
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl8} style={img_style} />
                                    </th>
                                    <th>{result8}</th>
                                    <th>{date8}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl9
                                        })
                                    }
                                >
                                    <th>
                                        <img src={imgUrl9} style={img_style} />
                                    </th>
                                    <th>{result9}</th>
                                    <th>{date9}</th>
                                </tr>
                            </table>
                        </article>
                    </center>
                </div>
                <a href="/collect/#" class="btn_gotop">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjU0NCA0OTAuNTQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNTQ0IDQ5MC41NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM2MDdEOEI7IiBkPSJNMTguMDk4LDI3NC4xNTFMMjQ1LjIxMyw0Ny4wMTVsMjI3LjExNSwyMjcuMTM2YzQuMjM3LDQuMDkzLDEwLjk5LDMuOTc1LDE1LjA4My0wLjI2Mg0KCQljMy45OTMtNC4xMzQsMy45OTMtMTAuNjg3LDAtMTQuODIxTDI1Mi43NDQsMjQuNDAxYy00LjE2NS00LjE2NC0xMC45MTctNC4xNjQtMTUuMDgzLDBMMi45OTQsMjU5LjA2OA0KCQljLTQuMDkzLDQuMjM3LTMuOTc1LDEwLjk5LDAuMjYyLDE1LjA4M2M0LjEzNCwzLjk5MiwxMC42ODcsMy45OTIsMTQuODIsMEgxOC4wOTh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzYwN0Q4QjsiIGQ9Ik0yNTIuNzY1LDIxNi4zOGMtNC4xNjUtNC4xNjQtMTAuOTE3LTQuMTY0LTE1LjA4MywwTDMuMDE2LDQ1MS4wNDcNCgkJYy00LjA5Myw0LjIzNy0zLjk3NiwxMC45OSwwLjI2MiwxNS4wODNjNC4xMzQsMy45OTMsMTAuNjg3LDMuOTkzLDE0LjgyMSwwbDIyNy4xMTUtMjI3LjExNWwyMjcuMTE1LDIyNy4xMzYNCgkJYzQuMjM3LDQuMDkzLDEwLjk5LDMuOTc2LDE1LjA4My0wLjI2MWMzLjk5My00LjEzNCwzLjk5My0xMC42ODgsMC0xNC44MjFMMjUyLjc2NSwyMTYuMzh6Ii8+DQo8L2c+DQo8cGF0aCBkPSJNNDc5Ljg4LDI3Ny4yNjZjLTIuODMxLDAuMDA1LTUuNTQ4LTEuMTE1LTcuNTUyLTMuMTE1TDI0NS4yMTMsNDcuMDE1TDE4LjA5OCwyNzQuMTUxDQoJYy00LjIzNyw0LjA5My0xMC45OSwzLjk3NS0xNS4wODMtMC4yNjJjLTMuOTkyLTQuMTM0LTMuOTkyLTEwLjY4NywwLTE0LjgyTDIzNy42ODIsMjQuNDAxYzQuMTY1LTQuMTY0LDEwLjkxNy00LjE2NCwxNS4wODMsMA0KCWwyMzQuNjY3LDIzNC42NjdjNC4xNTksNC4xNzIsNC4xNDgsMTAuOTI2LTAuMDI0LDE1LjA4NUM0ODUuNDA5LDI3Ni4xNDYsNDgyLjcwMiwyNzcuMjY1LDQ3OS44OCwyNzcuMjY2eiIvPg0KPHBhdGggZD0iTTQ3OS44OCw0NjkuMjY2Yy0yLjgzMSwwLjAwNS01LjU0OC0xLjExNS03LjU1Mi0zLjExNUwyNDUuMjEzLDIzOS4wMTVMMTguMDk4LDQ2Ni4xNTENCgljLTQuMjM3LDQuMDkzLTEwLjk5LDMuOTc2LTE1LjA4My0wLjI2MmMtMy45OTMtNC4xMzQtMy45OTMtMTAuNjg3LDAtMTQuODIxbDIzNC42NjctMjM0LjY2N2M0LjE2NS00LjE2NCwxMC45MTctNC4xNjQsMTUuMDgzLDANCglsMjM0LjY2NywyMzQuNjY3YzQuMTU5LDQuMTcyLDQuMTQ4LDEwLjkyNi0wLjAyNCwxNS4wODVDNDg1LjQwOSw0NjguMTQ2LDQ4Mi43MDIsNDY5LjI2NSw0NzkuODgsNDY5LjI2NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                        style={{ width: "5vw", height: "5vh" }}
                        alt="go to top"
                    />
                </a>
            </div>
        );
    }
}

export default collect;
