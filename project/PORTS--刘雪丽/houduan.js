let express = require("express")();
let mysql = require("mysql");
const port = 8080;
// 解决跨域问题
express.all("/*", function(_req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
// 规划数据库
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
    database:"students",
    timezone:"08:00"
})
// 链接
sql.connect();
// 监听发送的denglu请求
express.get("/denglu",(request,response)=>{
    let username = request.query.username;
    let passward = request.query.passward;
    // 读取数据库
    sql.query(`SELECT * FROM user WHERE username="${username}" AND passward="${passward}"`,(error,data)=>{
        console.log(data)
        if(error){
            response.send("error");
            console.log("error")
        }
        else{
            if(!data.length){
                response.send("error");
            }  
            else{
               response.send("success")
            }
        }
    })
})
// 监听发送的zhuce请求
express.get("/zhuce",(request,response)=>{
    let username = request.query.username;
    let passward = request.query.passward;
    // 读取数据库
    sql.query(`INSERT INTO user (username,passward) VALUES ("${username}","${passward}")`,(error)=>{
        if(error){
            response.send("success");
            console.log("error")
        }
        else{
            response.send("success")
            console.log("success")
        }
    })
})
express.listen(port)
console.log("server is running at " + port)