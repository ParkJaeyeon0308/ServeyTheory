import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Home extends Component {
    render() {
        function showBox() {
            jQuery(".more_btn").hide();
            jQuery(".box2").show();
            jQuery(".box3").show();
            jQuery(".close_btn").show();
        }

        function hideBox() {
            jQuery(".close_btn").hide();
            jQuery(".box2").hide();
            jQuery(".box3").hide();
            jQuery(".more_btn").show();
        }

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
                <div className="text">원하는 테스트를 골라 시작해보세요!</div>
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box2"></div>
                <div className="box2"></div>
                <div className="box2"></div>

                {/* 빈 박스 */}
                <div className="box3"></div>
                <div className="box3"></div>
                <button type="button" className="more_btn" onClick={showBox}>
                    더보기
                </button>
                <button type="button" className="close_btn" onClick={hideBox}>
                    닫기
                </button>
            </div>
        );
    }
}
