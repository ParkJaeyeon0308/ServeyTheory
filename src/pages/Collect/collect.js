import React from "react";
import "./collect.css";
import Login, {user_id} from "../Login/login";
import NavBar, {collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9} from "../../component/NavBar";

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

        const handleImgError = (e) => {
            e.target.src = "/images/default.jpg";
        };

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

        return (
            <div className="collect">
                <div className="collect-text">설문결과</div>
                <div className="collect-subtext">
                    지금까지 테스트한 결과를 모아놓은 공간입니다.
                </div>
                <button onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl0
                                            }         
                                        ) 
                                    }>
                                나의 결과는...? 클릭
                            </button>
                <div className="collect-box">
                    <div className="collect-type-name">
                        {result1}웹, 앱 뭐가 더 잘 맞을까?
                    </div>
                    <div className="collect-date">{date1}2021-09-08</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl1 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl1} //테스트용으로 이미지랑, 타입이름, 날짜 넣은거니 그 부분만 지워서 쓰세용
                        // src="/images/result/type1/web.png"
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result2}</div>
                    <div className="collect-date">{date2}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl2 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl2}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result3}</div>
                    <div className="collect-date">{date3}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl3 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl3}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result4}</div>
                    <div className="collect-date">{date4}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl4 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl4}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result5}</div>
                    <div className="collect-date">{date5}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl5 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl5}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result6}</div>
                    <div className="collect-date">{date6}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl6 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl6}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result7}</div>
                    <div className="collect-date">{date7}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl7 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl7}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result8}</div>
                    <div className="collect-date">{date8}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl8 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl8}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>
                <div className="collect-box">
                    <div className="collect-type-name">{result9}</div>
                    <div className="collect-date">{date9}</div>
                    <button
                        className="collect-result-more"
                        onClick={() =>
                            this.props.history.push({ pathname: resultUrl9 })
                        }
                    >
                        more
                    </button>
                    <img
                        className="collect-result-img"
                        src={imgUrl9}
                        alt="collect-result-img"
                        onError={handleImgError}
                    />
                </div>

                {/* 예전 코드야 로직 헷갈릴까봐 남기는거고, 필요없으면 지워두 돼 */}
                {/* <article>
                            <table>
                                <tr
                                    onClick={() =>
                                        this.props.history.push({
                                            pathname: resultUrl1
                                        })
                                    }
                                >
                                    <th>
                                        <img
                                            src={imgUrl1}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl2}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl3}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl4}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl5}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl6}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl7}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl8}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
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
                                        <img
                                            src={imgUrl9}
                                            style={img_style}
                                            alt="collect-result-img"
                                        />
                                    </th>
                                    <th>{result9}</th>
                                    <th>{date9}</th>
                                </tr>
                            </table>
                        </article> */}
                <a href="/collect" class="btn_gotop">
                    <img
                        src="/images/up-arrow.png"
                        style={{ width: "2.7vw", height: "5vh" }}
                        alt="go to top"
                    />
                </a>
            </div>
        );
    }
}

export default collect;
