import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

export default class Home extends Component {
    render() {
        // img style settings
        const img_style = {
            width: "100vw",
            height: "90vh"
        };

        // slider settings
        const settings = {
            infinite: true, //계속 활용할 수 있는걸로
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            pauseOnHover: false // 마우스 hover시에도 멈춤 X
        };
        return (
            <div className="home">
                <div className="main-content">
                    <img
                        className="content-logo"
                        src="/images/logo.png"
                        alt="logo"
                    />
                    <div className="main-content-text">
                        ddasdasddasdasddasdasddasdasddasdasd
                    </div>
                    <button
                        className="go_to_test"
                        onClick={() => this.props.history.push("/survey")}
                    >
                        start
                    </button>
                </div>
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
            </div>
        );
    }
}
