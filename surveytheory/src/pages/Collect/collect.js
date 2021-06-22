import React from "react";
import "./collect.css";
import Login, {user_id} from "../Login/login";
import NavBar, {collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9} from "../../component/NavBar";

class collect extends React.Component {

    render() {


        const resultUrl0 = "/result"
        const resultUrl1 = "/result" + collect1.result_url;
        const imgUrl1 = "/images/box-img/img2_" + collect1.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result1 =  collect1.survey_title;
        const date1 =  collect1.result_date;
        console.log("resultUrl1: " + resultUrl1 + "  imgUrl1: " +  imgUrl1)

        const resultUrl2 = "/result" + collect2.result_url;
        const imgUrl2 = "/images/box-img/img2_" + collect2.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result2 =  collect2.survey_title;
        const date2 =  collect2.result_date;

        const resultUrl3 = "/result" + collect3.result_url;
        const imgUrl3 = "/images/box-img/img2_" + collect3.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result3 =  collect3.survey_title;
        const date3 =  collect3.result_date;

        const resultUrl4 = "/result" + collect4.result_url;
        const imgUrl4 = "/images/box-img/img2_" + collect4.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result4 =  collect4.survey_title;
        const date4 =  collect4.result_date;

        const resultUrl5 = "/result" + collect5.result_url;
        const imgUrl5 ="/images/box-img/img2_" + collect5.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result5 =  collect5.survey_title;
        const date5 =  collect5.result_date;

        const resultUrl6 = "/result" + collect6.result_url;
        const imgUrl6 = "/images/box-img/img2_" + collect6.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result6 =  collect6.survey_title;
        const date6 =  collect6.result_date;

        const resultUrl7 = "/result" + collect7.result_url;
        const imgUrl7 = "/images/box-img/img2_" + collect7.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result7 =  collect7.survey_title;
        const date7 =  collect7.result_date;

        const resultUrl8 = "/result" + collect8.result_url;
        const imgUrl8 = "/images/box-img/img2_" + collect8.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result8 =  collect8.survey_title;
        const date8 =  collect8.result_date;

        const resultUrl9 = "/result" + collect9.result_url;
        const imgUrl9 = "/images/box-img/img2_" + collect9.result_url.substr(0,1) + ".png"; // url  = 1_1 형식
        const result9 =  collect9.survey_title;
        const date9 =  collect9.result_date;

        const img_style = {
            width: "4rem",
            height: "4rem",
            borderRadius: "40px 40px 40px 40px"
        };

        return (
            <div className="collect">
                <div className="test_result">테스트 결과</div>
                <div className="container">
                    <center>
                        <article>
                            <button onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl0
                                            }         
                                        ) 
                                    }>
                                나의 결과는...? 클릭
                            </button>
                            <table>
                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl1
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
                                            }         
                                        ) 
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
            </div>
        );
    }
}

export default collect;