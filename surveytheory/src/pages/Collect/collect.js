import React from "react";
import "./collect.css";

class collect extends React.Component {
    render() {
        const imgUrl = "/images/지브리.png";
        // type_name 값 받아와서 밑에꺼로 수정해서 쓰세용
        // const imgUrl = "/images/" + type_name + ".png";
        const result = this.props.result;
        const date = this.props.date;

        const img_style = {
            width: "4rem",
            height: "4rem",
            borderRadius: "40px 40px 40px 40px"
        };

        return (
            <div className="collect">
                <div className="test_result">테스트 결과</div>
                <div className="container">
                    <center>
                        <article>
                            <table>
                                <tr
                                    onClick={() =>
                                        this.props.history.push("/result")
                                    }
                                >
                                    <th>
                                        <img src={imgUrl} style={img_style} />
                                    </th>
                                    <th>{result}</th>
                                    <th>{date}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push("/result")
                                    }
                                >
                                    <th>
                                        <img src={imgUrl} style={img_style} />
                                    </th>
                                    <th>{result}</th>
                                    <th>{date}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push("/result")
                                    }
                                >
                                    <th>
                                        <img src={imgUrl} style={img_style} />
                                    </th>
                                    <th>{result}</th>
                                    <th>{date}</th>
                                </tr>

                                <tr
                                    onClick={() =>
                                        this.props.history.push("/result")
                                    }
                                >
                                    <th>
                                        <img src={imgUrl} style={img_style} />
                                    </th>
                                    <th>{result}</th>
                                    <th>{date}</th>
                                </tr>
                            </table>
                        </article>
                    </center>
                </div>
            </div>
        );
    }
}

// 기본 props 값
collect.defaultProps = {
    imgUrl: "/images/지브리.png",
    // imgUrl: "/images/" + type_name + ".png",
    result: "테스트 주제 이름",
    date: "2021/05/28"
};

export default collect;
