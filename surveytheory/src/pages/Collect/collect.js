import React from "react";
import "./collect.css";
import Login, {user_id} from "../Login/login";
import NavBar1, {collect1} from "../../component/NavBar1";

class collect extends React.Component {
    render() {
        console.log('collect 에서 survey_title: ' + collect1.survey_title)
        console.log('collect 에서 result_url:' + collect1.result_url)
        console.log('collect 에서 result_date: ' + collect1.result_date)

        const resultUrl1 = "/result" + collect1.result_url;
        const imgUrl1 = "/images/box-img/img" + collect1.result_url + ".png"; // url  = 1_1 형식
        const result1 =  collect1.survey_title;
        const date1 =  collect1.result_date;

        const imgUrl2 = "/images/img2.png";
        const result2 = this.props.result2;
        const date2 = this.props.date2;

        const imgUrl3 = "/images/img3.png";
        const result3 = this.props.result3;
        const date3 = this.props.date3;

        const imgUrl4 = "/images/img4.png";
        const result4 = this.props.result4;
        const date4 = this.props.date4;

        const img_style = {
            width: "4rem",
            height: "4rem",
            borderRadius: "40px 40px 40px 40px"
        };

        console.log(user_id.user_id);

        return (
            <div className="collect">
                <div className="test_result">테스트 결과</div>
                <div className="container">
                    <center>
                        <article>
                            <table>
                                <tr
                                    onClick={() =>
                                        this.props.history.push("/result")
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
                                        this.props.history.push("/result")
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
                                        this.props.history.push("/result")
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
                                        this.props.history.push("/result")
                                    }
                                >
                                    <th>
                                        <img src={imgUrl4} style={img_style} />
                                    </th>
                                    <th>{result4}</th>
                                    <th>{date4}</th>
                                </tr>
                            </table>
                        </article>
                    </center>
                </div>
            </div>
        );
    }
}

// 기본 props 값
collect.defaultProps = {
    imgUrl1: "/images/img1.png",
    // imgUrl: "/images/" + type_name + ".png",
    result1: "웹, 앱 뭐가 더 잘맞을까?",
    date1: "2021/06/24",

    imgUrl2: "/images/img2.png",
    // imgUrl: "/images/" + type_name + ".png",
    result2: "3개월 프로젝트가 주어졌을때 내가 해낼 수 있는 기간은?",
    date2: "2021/06/24",

    imgUrl3: "/images/img3.png",
    // imgUrl: "/images/" + type_name + ".png",
    result3: "정신학년테스트!",
    date3: "2021/06/25",

    imgUrl4: "/images/img4.png",
    // imgUrl: "/images/" + type_name + ".png",
    result4: "직장 mbti 테스트!",
    date4: "2021/06/26"
};

export default collect;