import React from "react";
import "./developer_intro.css";

function Developer_intro() {
    return (
        <div className="developer_intro">
            <div className="developer_intro_text">Developer Intro.</div>
            <div className="developer_intro_text_subtext">
                사진을 클릭하시면 해당 멤버의 Github 페이지로 이동합니다.
            </div>
            <div class="member">
                <center>
                    <a
                        href="https://github.com/ParkJaeyeon0308"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="../images/member/박재연.jpg"
                            style={{ marginTop: "4vh" }}
                            alt="member1"
                        />
                    </a>
                </center>
                <div class="info">
                    <span id="mem_info">
                        <span
                            style={{
                                fontSize: "1em",
                                color: "rgb(113, 157, 138)",
                                fontFamily: "S-CoreDream-6Bold",
                                fontWeight: "700"
                            }}
                        >
                            뉴미디어웹솔루션과
                        </span>{" "}
                        박재연
                    </span>
                    <br />
                    <span id="part">백엔드/프론트엔드 개발</span>
                    <br />
                    <div className="github-logo">
                        <a
                            href="https://github.com/ParkJaeyeon0308"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/github-logo.png"
                                alt="github-logo"
                            />
                        </a>
                    </div>
                    <div className="facebook-logo">
                        <a
                            href="https://www.facebook.com/profile.php?id=100035692459512"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/facebook-logo.png"
                                alt="facebook-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="member">
                <center>
                    <a
                        href="https://github.com/Shinipsae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="../images/member/신잎새.jpg"
                            style={{ marginTop: "4vh" }}
                            alt="member2"
                        />
                    </a>
                </center>
                <div class="info">
                    <span id="mem_info">
                        <span
                            style={{
                                fontSize: "1em",
                                color: "rgb(52, 95, 214)",
                                fontFamily: "S-CoreDream-6Bold",
                                fontWeight: "700"
                            }}
                        >
                            뉴미디어소프트웨어과
                        </span>{" "}
                        신잎새
                    </span>
                    <br />
                    <span id="part">백엔드 개발</span>
                    <br />
                    <div className="github-logo">
                        <a
                            href="https://github.com/Shinipsae"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/github-logo.png"
                                alt="github-logo"
                            />
                        </a>
                    </div>
                    <div className="facebook-logo">
                        <a
                            href="https://www.facebook.com/profile.php?id=100009419736751"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/facebook-logo.png"
                                alt="facebook-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="member">
                <center>
                    <a
                        href="https://github.com/MaengSooYeon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="../images/member/맹수연.jpg"
                            style={{ marginTop: "4vh" }}
                            alt="member3"
                        />
                    </a>
                </center>
                <div class="info">
                    <span id="mem_info">
                        <span
                            style={{
                                fontSize: "1em",
                                color: "rgb(113, 157, 138)",
                                fontFamily: "S-CoreDream-6Bold",
                                fontWeight: "700"
                            }}
                        >
                            뉴미디어웹솔루션과
                        </span>{" "}
                        맹수연
                    </span>
                    <br />
                    <span id="part">프론트엔드 개발</span>
                    <br />
                    <div className="github-logo">
                        <a
                            href="https://github.com/MaengSooYeon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/github-logo.png"
                                alt="github-logo"
                            />
                        </a>
                    </div>
                    <div className="facebook-logo">
                        <a
                            href="https://www.facebook.com/profile.php?id=100011719852951"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/logo/facebook-logo.png"
                                alt="facebook-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Developer_intro;
