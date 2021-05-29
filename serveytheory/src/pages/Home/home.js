import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

export default class Home extends Component {
    render() {
        const settings = {
            dots: true, //넘겨지는 점 보여지게
            infinite: true, //계속 활용할 수 있는걸로
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1, // 장수
            slidesToScroll: 1 //1장씩 넘기는거
        };
        return (
            <div className="container">
                <Slider {...settings} className="slide">
                    <div className="images">
                        <img src="/images/지브리.png" />
                    </div>
                    <div>
                        <img src="/images/스코틀랜드 격자.jpg" />
                    </div>
                    <div>
                        <img src="/images/아가일 체크.jpg" />
                    </div>
                    <div>
                        <img src="/images/보라하늘.png" />
                    </div>
                    <div>
                        <img src="/images/노란 체크.jpg" />
                    </div>
                    <div>
                        <img src="/images/스코틀랜드 격자.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}
