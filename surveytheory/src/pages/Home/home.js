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
            width: "100vw",
            height: "82vh",
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
                            src="/images/slider-img/img1_1.png"
                            alt="app vs web"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question2_1")}
                    >
                        <img
                            src="/images/slider-img/img1_2.png"
                            alt="3 month project"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question3_1")}
                    >
                        <img
                            src="/images/slider-img/img1_3.png"
                            alt="mental grade"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question4_1")}
                    >
                        <img
                            src="/images/slider-img/img1_4.png"
                            alt="rectal mbti"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question5_1")}
                    >
                        <img
                            src="/images/slider-img/img1_5.png"
                            alt="a few years developer mined"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question6_1")}
                    >
                        <img
                            src="/images/slider-img/img1_6.png"
                            alt="software? solution? design?"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question7_1")}
                    >
                        <img
                            src="/images/slider-img/img1_7.png"
                            alt="server dev vs front dev"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question8_1")}
                    >
                        <img
                            src="/images/slider-img/img1_8.png"
                            alt="programming languages"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question9_1")}
                    >
                        <img
                            src="/images/slider-img/img1_9.png"
                            alt="leader vs follower"
                            style={img_style}
                        />
                    </div>
                </Slider>
                <div className="text">원하는 테스트를 골라 시작해보세요!</div>

                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question1_1")}
                >
                    {/* <img
                        className="boximg"
                        src="../images/box-img/img2_1.png"
                        alt="app vs web"
                    />
                    <div className="boxtext_1">
                        웹과 앱 중에 나는 어느 쪽에 더 관심 있어 하고, 개발하는
                        걸 선호하는 지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag">#웹_앱_개발자 #웹_앱_디자이너</div> */}
                </div>
                {/* <div
                    className="box"
                    onClick={() => this.props.history.push("/Question2_1")}
                >
                    <img
                        src="../images/box-img/img2_2.png"
                        alt="3 month project"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question3_1")}
                >
                    <img
                        src="../images/box-img/img2_3.png"
                        alt="mental grade"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question4_1")}
                >
                    <img src="../images/box-img/img2_4.png" alt="rectal mbti" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question5_1")}
                >
                    <img
                        src="../images/box-img/img2_5.png"
                        alt="a few years developer mined"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question6_1")}
                >
                    <img
                        src="../images/box-img/img2_6.png"
                        alt="software? solution? design?"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question7_1")}
                >
                    <img
                        src="../images/box-img/img2_7.png"
                        alt="server dev vs front dev"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question8_1")}
                >
                    <img
                        src="../images/box-img/img2_8.png"
                        alt="programming languages"
                    />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question9_1")}
                >
                    <img
                        src="../images/box-img/img2_9.png"
                        alt="leader vs follower"
                    />
                </div> */}
                <div className="text">계속 설문을 만드는 중 입니다!</div>
            </div>
        );
    }
}
