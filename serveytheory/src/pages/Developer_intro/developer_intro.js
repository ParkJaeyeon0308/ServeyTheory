import React from "react";
import "./developer_intro.css";

function Developer_intro() {
    return (
        <div className="developer_intro">
            <div className="developer_intro_text">Developer Intro.</div>
            <div className="developer_intro_text_subtext">
                사진을 클릭하시면 해당 멤버의 Github 페이지로 이동합니다
            </div>
            <div className="container">
                <a href="https://github.com/ParkJaeyeon0308">
                    <div class="member">
                        <img src="../images/member/맹수연.jpg" />
                        <div class="info">
                            <span id="mem_info">뉴미디어웹솔루션과 박재연</span>
                            <br />
                            <span id="part">프론트엔드/백엔드 개발</span>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Shinipsae">
                    <div class="member">
                        <img src="../images/member/신잎새.jpg" />
                        <div class="info">
                            <span id="mem_info">
                                뉴미디어소프트웨어과 신잎새
                            </span>
                            <br />
                            <span id="part">백엔드 개발</span>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/MaengSooYeon">
                    <div class="member">
                        <img src="../images/member/맹수연.jpg" />
                        <div class="info">
                            <span id="mem_info">뉴미디어웹솔루션과 맹수연</span>
                            <br />
                            <span id="part">프론트엔드 개발</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Developer_intro;
