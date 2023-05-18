let bookdisplay=document.querySelector(".bookdisplay");
let result=JSON.parse(localStorage.getItem("dataCreation"));
let totalData=JSON.parse(localStorage.getItem("bookDetails"));
var userdata=JSON.parse(localStorage.getItem("loginUser"));

if(!userdata)
{
    window.location.href="../homepage/homepage.html"
}

let name = document.createElement("h2");
name.textContent = "BookName:"+result.name;
name.style.marginLeft="30%";


let author = document.createElement("h3");
author.textContent = "Author:"+result.authour;
author.style.marginLeft="30%";

let year=document.createElement("h3");
year.textContent="Year:"+result.year;
year.style.marginLeft="30%";

let type=document.createElement("h3");
type.textContent="Type:"+result.type;
type.style.marginLeft="30%";

let publisher=document.createElement("h3");
publisher.textContent="Publisher:"+result.publisher;
publisher.style.marginLeft="30%";

let rate = document.createElement("h3");
rate.textContent = "rate : " + result.rate;
rate.style.marginLeft="30%";

let avatar = document.createElement("img");
avatar.setAttribute("src", result.avatar);
avatar.style.marginLeft="40%";
avatar.style.marginTop="30px";

let edit = document.createElement("button");
edit.textContent = "Edit";
// edit.style.marginLeft="500px";
edit.setAttribute("class","editing")
edit.style.marginLeft="90px";

let element = document.createElement("button");
element.textContent = "Delete";
element.style.marginLeft="310px";
element.setAttribute("class","deleting");

bookdisplay.append(avatar,name,author,year,type,publisher,rate,edit,element);

element.onclick = function(){
    let dub=[];
    for(let i=0; i<totalData.length; i++){
        if(result.serial_number != totalData[i].serial_number){
            dub.push(totalData[i])
    }
    else
    {
        console.log(totalData[i],result)
    }
    }
    localStorage.removeItem("bookData");
    localStorage.setItem("bookDetails",JSON.stringify(dub))
    alert("successfully deleted");
    window.location.href="../viewbooks/viewbooks.html";
}

edit.onclick = function(){
    bookdisplay.innerHTML= ""
    let namediv = document.createElement("div");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("value", result.name)
    nameInput.setAttribute("class", "NAME");
    nameInput.style.marginLeft="250px";
    // namediv.style.marginTop="20px"
    namediv.append(nameInput);

    let authordiv = document.createElement("div");
    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text")
    authorInput.setAttribute("value", result.authour);
    authorInput.setAttribute("class", "AUTHOR");
    authorInput.style.marginLeft="250px";
    // authordiv.style.marginTop="20px"
    authordiv.append(authorInput);

    let yeardiv = document.createElement("div");
    let yearInput = document.createElement("input");
    yearInput.setAttribute("type", "text")
    yearInput.setAttribute("value", result.year);
    yearInput.setAttribute("class", "YEAR");
    yearInput.style.marginLeft="250px";
    // yeardiv.style.marginTop="20px"
    yeardiv.append(yearInput);

    let typediv = document.createElement("div");
    let typeInput = document.createElement("input");
    typeInput.setAttribute("type", "text")
    typeInput.setAttribute("value", result.type);
    typeInput.setAttribute("class", "TYPE");
    typeInput.style.marginLeft="250px";
    // typediv.style.marginTop="20px"
    typediv.append(typeInput);

    let publisherdiv = document.createElement("div");
    let publisherInput = document.createElement("input");
    publisherInput.setAttribute("type", "text")
    publisherInput.setAttribute("value", result.publisher);
    publisherInput.setAttribute("class", "PUBLISHER");
    publisherInput.style.marginLeft="250px";
    // publisherdiv.style.marginTop="20px"
    publisherdiv.append(publisherInput);

    let ratediv = document.createElement("div");
    let rateInput = document.createElement("input");
    rateInput.setAttribute("type", "text")
    rateInput.setAttribute("value", result.rate);
    rateInput.setAttribute("class", "RATE");
    rateInput.style.marginLeft="250px";
    // ratediv.style.marginTop="20px"
    ratediv.append(rateInput);

    let done = document.createElement("button");
    done.textContent = "Done";
    done.setAttribute("class", "butn")
    done.style.marginLeft="270px"
    done.style.marginTop="20px"
    done.onclick = function(){
        var name=document.querySelector(".NAME").value;
        var authour=document.querySelector(".AUTHOR").value;
        var year=document.querySelector(".YEAR").value;
        var publisher=document.querySelector(".PUBLISHER").value;
        var type=document.querySelector(".TYPE").value;
        var rate=document.querySelector(".RATE").value;

        let obj ={name, authour, year,publisher,type,rate}
        localStorage.setItem("dataCreation", JSON.stringify({...result, ...obj}))

        let arr=[];
        for(let i=0; i<totalData.length; i++){
            if(totalData[i].serial_number === result.serial_number){
                arr.push({...result, ...obj});
            }
            else
            {
                arr.push(totalData[i])
            }
        }

        alert("edited successfully");
        localStorage.setItem("bookDetails", JSON.stringify(arr))
        window.location.href="../displaypage/displaypage.html"

    }
    bookdisplay.append(avatar, namediv,authordiv,yeardiv,typediv,publisherdiv,ratediv, done)

// bookdisplay.append(avatar,nameInput,authorInput,yearInput,typeInput,publisherInput,rateInput,done);
}


if(!userdata.admin){
    let editing=document.querySelector(".editing");
    editing.remove();
    let deleting=document.querySelector(".editing");
    deleting.remove();
}