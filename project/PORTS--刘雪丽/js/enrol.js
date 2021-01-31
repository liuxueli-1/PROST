// 页面功能
$(".li2").mouseover(function(){
    $(".erweima").fadeIn();    
})
$(".li2").mouseout(function(){
   $(".erweima").fadeOut();    
})
$(".li3").mouseover(function(){
   $(".gouwuc").fadeIn();
})
$(".li3").mouseout(function(){
   $(".gouwuc").fadeOut();    
})
$(".look").mouseover(function(){
   $(".sousuo").fadeIn();
})
$(".look").mouseout(function(){
   $(".sousuo").fadeOut();    
})
$(".navbox").mouseover(function(){
   $(".table").fadeIn();
})
$(".navbox").mouseout(function(){
   $(".table").fadeOut();
})
// 发送请求
$(".zhuce").click(function(){
    let http = new XMLHttpRequest();
    http.open("get",`http://127.0.0.1:8080/zhuce?username=${$(".haoma11").val()}&passward=${$(".mima2").val()}`);
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                alert("注册成功")
                // location.href = "http://10.35.161.8/day27/index.html";
            } 
            else{
                if(!data.length){
                    response.send("error");
                }  
                else{
                   response.send("success")
                }
                
            }
        }
    }
})