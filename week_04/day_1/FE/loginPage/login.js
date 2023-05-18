var result=JSON.parse(localStorage.getItem("signupdata")) || [];
var adminCode=JSON.parse(localStorage.getItem("AdminCode"))

var btn=document.querySelector(".btn");
btn.onclick=function(){
var name=document.querySelector(".name").value;
var password=document.querySelector(".password").value;
var admin=document.querySelector(".adminCode").value;
var temp = false

if(result.name && result.password == " "){
    alert("please enter details");
    return
    //var adminCode=JSON.parse(localStorage.setItem("AdminCode")) || [];
}
else{  
    for(let i=0; i<result.length; i++){
        console.log(result[i].password, password)
        console.log(result[i].user, name)
        if(result[i].user === name && result[i].password === password){
            temp= true
            if(admin === "" || admin === adminCode){
                alert("login successful");
                localStorage.setItem("loginUser",JSON.stringify({...result[i], admin: admin === "" ? false : true}))
                window.location.href="../homepage/homepage.html";
                return
            }
            else{
            alert("Wrong Admin Code")
            return
            }
        }

    }
}   
if(!temp) alert("wrong username and password")
}