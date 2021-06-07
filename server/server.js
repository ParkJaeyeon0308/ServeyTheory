const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // << 새로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "root", // mysql에 아이디를 넣는다.
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

app.post("/text", (req, res) => {
    const user_id = req.body.inText;
    const user_pw = req.body.inText1;
    const user_nick = req.body.inText2;
    console.log( "user_id: " + user_id + " / user_pw: " +  user_pw + " / user_nick: " + user_nick);
    connection.query("INSERT INTO member_tb (user_id, user_pw, user_nick) values(?, ?, ?)", 
    [user_id, user_pw, user_nick]),
    function(err, rows, fields){
        if (err){
            console.log("DB저장 실패");
        } else {
            console.log("DB저장 성공")
        }
    }
})

app.post("/data", (req, res) => {
    const user_id = req.body.inText3;
    console.log("user_id: " + user_id)
    connection.query("SELECT count(*) as count FROM member_tb WHERE user_id = ?", [user_id],
    function(err, rows, fields){
        if (err){
            console.log("데이터 가져오기 실패");
        } else {
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })

})

app.post("/login", (req, res) => {
    const user_id = req.body.inText;
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});