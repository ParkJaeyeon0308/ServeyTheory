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
                <div className="text">원하는 테스트를 골라 시작해보세요!</div>
                <div class="box2"></div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question1_1")}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_1.png"
                        alt="app vs web"
                    />
                    <div className="boxtext_1">
                        웹과 앱 중에 나는 어느 쪽에 더 관심 있어 하고, 개발하는
                        걸 선호하는 지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #웹_앱_개발자 #웹_앱_디자이너
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question2_1")}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_2.png"
                        alt="3 month project"
                    />
                    <div className="boxtext_2">
                        3개월 동안 진행하는 프로젝트가 주어졌을 때 한 달만에
                        완성해내거나 3개월이라는 넉넉한 시간을 줬음에도 불구하고
                        시간이 더 필요한 상황을 주고, 그 중 나는 어떤 타입인지
                        알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #벼락치기 #개발자는_힘들어
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question3_1")}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_3.png"
                        alt="mental grade"
                    />
                    <div className="boxtext_1">
                        미림 학생을 대상으로 한 테스트로, 자신이 얼마나 미림화가
                        되었는 지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">#미림 #프로젝트</div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question4_1")}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_4.png"
                        alt="rectal mbti"
                    />
                    <div className="boxtext_2">
                        스타트업 / 중소, 연봉 / 워라밸, 개발직종 / 운영, 디자인,
                        사무직종으로 세분화하여 내가 원하는 직장 타입이 무엇인
                        지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #모든 #취준생분들 #힘내세요
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question5_1")}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_5.png"
                        alt="a few years developer mined"
                    />
                    <div className="boxtext_1">
                        비기너 / 주니어 / 시니어로 나누어 내가 가지고 있는
                        개발자 마인드의 위치는 어디에 있는 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #비기너 #주니어 #시니어 #개발라이프
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question6_1")}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_6.png"
                        alt="software? solution? design?"
                    />
                    <div className="boxtext_2">
                        나는 디자인, 개발 감각이 둘 다 있어서 둘 중 어느 쪽의
                        퍼센트가 더 큰 지, 아니면 한 분야만 잘하는 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-left">#디발자 #개자이너</div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question7_1")}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_7.png"
                        alt="server dev vs front dev"
                    />
                    <div className="boxtext_1">
                        미림마이스터고에 있는 소프트웨어과 / 웹솔루션과 /
                        디자인과 중에서 나는 어떤과에 적합한 지 알 수 있는
                        테스트입니다.
                    </div>
                    <div className="hashtag-right">
                        #소프트웨어 #웹솔루션 #디자인
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question8_1")}
                >
                    <img
                        className="boximg-right"
                        src="../images/box-img/img2_8.png"
                        alt="programming languages"
                    />
                    <div className="boxtext_2">
                        나는 프론트엔드 / 백엔드 중 어떤 분야에 적성이 맞는지 알
                        수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-left">
                        #백엔드 #프론트엔드 #개발
                    </div>
                </div>
                <div
                    className="test_box"
                    onClick={() => this.props.history.push("/Question9_1")}
                >
                    <img
                        className="boximg-left"
                        src="../images/box-img/img2_9.png"
                        alt="leader vs follower"
                    />
                    <div className="boxtext_1">
                        팀플에서 나는 리더 / 조력자 / 평범한 팀원 / 버스받는
                        팀원 중 어떤 포지션인지 알 수 있는 테스트입니다.
                    </div>
                    <div className="hashtag-right">#열정 #성장 #협동</div>
                </div>
                <div className="text">계속 설문을 만드는 중 입니다!</div>
                <a href="/#">
                    <button
                        className="up_to_main"
                        onClick={() => this.props.history.push("/")}
                    >
                        UP
                    </button>
                </a>
            </div>
        );
    }
}
