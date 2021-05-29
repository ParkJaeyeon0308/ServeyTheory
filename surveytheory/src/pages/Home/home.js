import React, { Component } from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

export default class Home extends Component {
    render() {
        // img style settings
        const img_style = {
            width: "30rem",
            height: "20rem",
            margin: "0 auto"
        };

        // slider settings
        const settings = {
            dots: true, //넘겨지는 점 보여지게
            arrows: true,
            infinite: true, //계속 활용할 수 있는걸로
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1, // 장수
            slidesToScroll: 1 //1장씩 넘기는거
        };
        return (
            <div className="container">
                <Slider {...settings} className="slide">
                    <div>
                        <img src="/images/지브리.png" style={img_style} />
                    </div>
                    <div>
                        <img
                            src="/images/스코틀랜드 격자.jpg"
                            style={img_style}
                        />
                    </div>
                    <div>
                        <img src="/images/아가일 체크.jpg" style={img_style} />
                    </div>
                    <div>
                        <img src="/images/보라하늘.png" style={img_style} />
                    </div>
                    <div>
                        <img src="/images/노란 체크.jpg" style={img_style} />
                    </div>
                    <div>
                        <img
                            src="/images/스코틀랜드 격자.jpg"
                            style={img_style}
                        />
                    </div>
                </Slider>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>

                {/* 빈 박스 */}
                <div className="box"></div>
                <div className="box"></div>
                <Link to="./SignUp">
                    <button type="button" className="more">
                        더보기
                    </button>
                </Link>
            </div>
        );
    }
}
