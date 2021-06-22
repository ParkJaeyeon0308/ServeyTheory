import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";
import { Link } from "react-router-dom";

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
                    <div className="main-content-text">
                        <span>설문학개론</span>은 다양한 주제를 기반으로 한 총
                        9개의 심리테스트가 있고, 테스트를 통해 맞춤 통계를
                        분석해주는 웹 사이트입니다 :-)
                        <Link to="/survey" style={{ textDecoration: "none" }}>
                            <div className="go_to_test">START</div>
                        </Link>
                    </div>
                </div>
                <Slider {...settings} className="slide">
                    <div>
                        <img
                            src="/images/slider-img/img1_1.png"
                            alt="app vs web"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_2.png"
                            alt="3 month project"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_3.png"
                            alt="mental grade"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_4.png"
                            alt="rectal mbti"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_5.png"
                            alt="a few years developer mined"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_6.png"
                            alt="software? solution? design?"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_7.png"
                            alt="server dev vs front dev"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slider-img/img1_8.png"
                            alt="programming languages"
                            style={img_style}
                        />
                    </div>
                    <div>
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
