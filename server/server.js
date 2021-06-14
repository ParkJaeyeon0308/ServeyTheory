const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // << 새로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "root", // mysql의 아이디를 넣는다.
  password: "mysql", // mysql의 비밀번호를 넣는다.
  database: "survey", //위에서 만든 데이터베이스의 이름을 넣는다.
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/text", (req, res) => { // 회원가입 하는 메소드
    const user_id = req.body.inText;
    const user_pw = req.body.inText1;
    const user_nick = req.body.inText2; 
    console.log( "user_id: " + user_id + " / user_pw: " +  user_pw + " / user_nick: " + user_nick);
        // eslint-disable-next-line no-unused-expressions
    connection.query("INSERT INTO member_tb (user_id, user_pw, user_nick) values(?, ?, ?)", 
    [user_id, user_pw, user_nick]), // member_tb에 값 삽입
    function(err, rows, fields){
        if (err){
            console.log("DB저장 실패");
        } else {
            console.log("DB저장 성공")
        }
    }
})

app.post("/data", (req, res) => { // user_id를 이용하여 회원이 존재하는지 구하는 메소드
    const user_id = req.body.inText3;
    console.log("user_id: " + user_id)
    connection.query("SELECT count(*) as count FROM member_tb WHERE user_id = ?", [user_id],
    function(err, rows, fields){ // user_id가 일치하는 행의 개수를 구함 ( 0 or 1 )
        if (err){
            console.log("데이터 가져오기 실패");
        } else {
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })

})

app.post("/login", (req, res) => { // user_id와 user_pw를 이용하여 아이디 비번이 맞는지 확인하는 메소드
    const user_id = req.body.inText;
    const user_pw = req.body.inText1; 
    console.log("user_id: " + user_id + " / user_pw: " + user_pw)
    connection.query("SELECT count(*) as count FROM member_tb WHERE user_id = ? and user_pw = ?", [user_id, user_pw],
    function(err, rows, fields){ // user_id와 user_pw가 일치하는 행의 개수를 구함 (0 or 1 )
        if (err){
            console.log("데이터 가져오기 실패");
        } else {
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })

})

app.post("/change1", (req, res) => { // login과 동일하게 회원여부 확인
    const user_id = req.body.inText;
    const user_pw = req.body.inText1;
    console.log("user_id: " + user_id + " / user_pw: " + user_pw)
    connection.query("SELECT count(*) as count FROM member_tb WHERE user_id = ? and user_pw = ?", [user_id, user_pw],
    function(err, rows, fields){
        if (err){
            console.log("데이터 가져오기 실패");
        } else {
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })

})


app.post("/change2", (req, res) => { // 비밀번호를 변경하는 메소드
    const user_id = req.body.inText;
    const user_pw1 = req.body.inText2;
    console.log( "user_id: " + user_id + " / user_pw1: " +  user_pw1);
    connection.query("UPDATE member_tb SET user_pw = ? WHERE user_id = ?", [user_pw1, user_id], 
    function(err, rows, fields){ // user_id가 본인인 행의 pw를 변경함
        if (err){
            console.log("비번변경 실패");
        } else {
            console.log("비번변경 성공")
        }
    })
})

app.post("/withdraw", (req, res) => { // login과 동일하게 회원여부 확인
    const user_id = req.body.inText;
    const user_pw = req.body.inText1;
    console.log("user_id: " + user_id + " / user_pw: " + user_pw)
    connection.query("SELECT count(*) as count FROM member_tb WHERE user_id = ? and user_pw = ?", [user_id, user_pw],
    function(err, rows, fields){
        if (err){
            console.log("데이터 가져오기 실패");
        } else {
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })

})

app.post("/withdraw2", (req, res) => { // 회원정보를 삭제하는 메소드
    const user_id = req.body.inText;
    console.log( "user_id: " + user_id);
    connection.query("DELETE FROM member_tb WHERE user_id = ?", [user_id], 
    function(err, rows, fields){ // user_id가 본인인 행을 삭제
        if (err){
            console.log("회원탈퇴 실패");
        } else {
            console.log("회원탈퇴 성공")
        }
    })
})

app.post("/save", (req, res) => { // 회원결과 저장하는 메소드 
    const user_id = req.body.inText; // let user_id에서 가져옴
    const subject_name = req.body.inText1; // const 직접 설정
    const survey_url = req.body.inText2; // const 직접 설정
    console.log("user_id: " + user_id + " / subject_name: "  + subject_name + " / result_url: " + survey_url);
    // eslint-disable-next-line no-unused-expressions
    connection.query("INSERT INTO result_tb (user_id, survey_title, result_url) VALUES (?, ?, ?) ",
    [user_id, subject_name, survey_url]),
    function(err, rows, fields){
        if(err) {
            console.log("DB 저장 실패");
        } else {
            console.log("DB 저장 성공")
        }
    }
})

app.post("/collect", (req, res) => { // 회원 결과를 구하는 메소드
    const user_id = req.body.inText;
    connection.query("SELECT survey_title, result_url, result_date  from result_tb where user_id = ?", [user_id],
    function(err, rows, fields){
        if (err){
            console.log("결과 데이터 가져오기 실패");
        } else {
            console.log(rows[0])
            res.send(rows[0])
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});