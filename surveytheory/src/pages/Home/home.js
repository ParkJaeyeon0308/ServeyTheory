import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Home extends Component {
    render() {
        // img style settings
        const img_style = {
            width: "100%",
            height: "100%",
            cursor: "pointer"
        };

        // slider settings
        const settings = {
            // dots: true, //넘겨지는 점 보여지게
            arrows: true,
            infinite: true, //계속 활용할 수 있는걸로
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1, // 장수
            slidesToScroll: 1 //1장씩 넘기는거
        };
        return (
            <div className="home">
                <Slider {...settings} className="slide">
                    <div
                        onClick={() => this.props.history.push("/Question1_1")}
                    >
                        <img
                            src="/images/slider-img/앱 vs 웹.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question2_1")}
                    >
                        <img
                            src="/images/slider-img/3개월 프로젝트가 주어졌을때 내가 해낼 수 있는 기간은.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question3_1")}
                    >
                        <img
                            src="/images/slider-img/정신학년테스트.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question4_1")}
                    >
                        <img
                            src="/images/slider-img/직장 MBTI.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question5_1")}
                    >
                        <img
                            src="/images/slider-img/나는 몇년차 개발자의 마인드일까.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question6_1")}
                    >
                        <img
                            src="/images/slider-img/나와 어울리는 과는.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question7_1")}
                    >
                        <img
                            src="/images/slider-img/나와 어울리는 개발자 포지션은.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question8_1")}
                    >
                        <img
                            src="/images/slider-img/내가 잘 할 것같은 PG 언어는.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/question9_1")}
                    >
                        <img
                            src="/images/slider-img/팀플에서 나의 포지션은.png"
                            style={img_style}
                        />
                    </div>
                </Slider>
                <div className="text">원하는 테스트를 골라 시작해보세요!</div>

                <div
                    className="box"
                    id="box1"
                    onClick={() => this.props.history.push("/Question1_1")}
                >
                    <div className="test_title">웹, 앱 뭐가 더 잘 맞을까?</div>
                </div>
                <div
                    className="box"
                    id="box2"
                    onClick={() => this.props.history.push("/question2_1")}
                >
                    <div className="test_title">
                        3개월 프로젝트가 주어졌을때
                        <br />
                        내가 해낼 수 있는 기간은?
                    </div>
                </div>
                <div
                    className="box"
                    id="box3"
                    onClick={() => this.props.history.push("/question3_1")}
                >
                    <div className="test_title">정신학년 테스트</div>
                </div>
                <div
                    className="box"
                    id="box4"
                    onClick={() => this.props.history.push("/question4_1")}
                >
                    <div className="test_title">직장 mbti 테스트</div>
                </div>
                <div
                    className="box"
                    id="box5"
                    onClick={() => this.props.history.push("/question5_1")}
                >
                    <div className="test_title">
                        나는 몇년차 개발자의
                        <br /> 마인드일까?
                    </div>
                </div>
                <div
                    className="box"
                    id="box6"
                    onClick={() => this.props.history.push("/question6_1")}
                >
                    <div className="test_title">나와 어울리는 과는?</div>
                </div>
                <div
                    className="box"
                    id="box7"
                    onClick={() => this.props.history.push("/question7_1")}
                >
                    <div className="test_title">
                        나와 어울리는 개발자 포지션은?
                    </div>
                </div>
                <div
                    className="box"
                    id="box8"
                    onClick={() => this.props.history.push("/question8_1")}
                >
                    <div className="test_title">
                        내가 잘할 것 같은
                        <br /> 프로그래밍 언어는?
                    </div>
                </div>
                <div
                    className="box"
                    id="box9"
                    onClick={() => this.props.history.push("/question9_1")}
                >
                    <div className="test_title">팀플에서 나의 포지션은?</div>
                </div>
                <div className="text">계속 설문을 만드는 중 입니다!</div>
            </div>
        );
    }
}
