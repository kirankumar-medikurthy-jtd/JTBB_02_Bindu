
var button=document.querySelector(".button");
var addbook=JSON.parse(localStorage.getItem("bookDetails")) || [];
button.onclick=function(){
var name=document.querySelector(".name").value;
var authorname=document.querySelector(".authorname").value;
var year=document.querySelector(".year").value;
var publisher=document.querySelector(".publicname").value;
var type=document.querySelector(".booktype").value;
var prize=document.querySelector(".prize").value;
var rate=document.querySelector(".rate");

console.log(name,authorname,year,publisher,type,prize,rate);

let addbook=JSON.parse(localStorage.getItem("bookDetails"))||[];
localStorage.setItem("bookDetails",JSON.stringify([...addbook,{name,authorname,year,publisher,type,prize,rate}]));
console.log(localStorage.getItem("bookDetails"))
alert("book added successfully");
}