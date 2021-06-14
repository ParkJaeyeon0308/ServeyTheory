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
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question2_1")}
                    >
                        <img
                            src="/images/slider-img/img1_2.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question3_1")}
                    >
                        <img
                            src="/images/slider-img/img1_3.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question4_1")}
                    >
                        <img
                            src="/images/slider-img/img1_4.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question5_1")}
                    >
                        <img
                            src="/images/slider-img/img1_5.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question6_1")}
                    >
                        <img
                            src="/images/slider-img/img1_6.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question7_1")}
                    >
                        <img
                            src="/images/slider-img/img1_7.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question8_1")}
                    >
                        <img
                            src="/images/slider-img/img1_8.png"
                            style={img_style}
                        />
                    </div>
                    <div
                        onClick={() => this.props.history.push("/Question9_1")}
                    >
                        <img
                            src="/images/slider-img/img1_9.png"
                            style={img_style}
                        />
                    </div>
                </Slider>
                <div className="text">원하는 테스트를 골라 시작해보세요!</div>

                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question1_1")}
                >
                    <img src="../images/box-img/img2_1.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question2_1")}
                >
                    <img src="../images/box-img/img2_2.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question3_1")}
                >
                    <img src="../images/box-img/img2_3.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question4_1")}
                >
                    <img src="../images/box-img/img2_4.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question5_1")}
                >
                    <img src="../images/box-img/img2_5.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question6_1")}
                >
                    <img src="../images/box-img/img2_6.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question7_1")}
                >
                    <img src="../images/box-img/img2_7.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question8_1")}
                >
                    <img src="../images/box-img/img2_8.png" />
                </div>
                <div
                    className="box"
                    onClick={() => this.props.history.push("/Question9_1")}
                >
                    <img src="../images/box-img/img2_9.png" />
                </div>
                <div className="text">계속 설문을 만드는 중 입니다!</div>
            </div>
        );
    }
}
