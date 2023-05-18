let btn = document.querySelector(".btn")

btn.onclick = function(){
	let userName = document.querySelector(".userName").value;
    let newpassword = document.querySelector(".newpassword").value;
    let rewritepassword = document.querySelector(".rewritepassword").value;
    let button = document.querySelector(".btn").value;
    let anchor = document.querySelector(".anchor").value;
    //local storage
            let result=JSON.parse(localStorage.getItem("data")) || [];
           
            
            if(rewritepassword === newpassword){
            	let temp =[];
            	for(let i=0; i<result.length;i++){
            	
            		if(userName === result[i].userName){
            			if(newpassword !== result[i].password){
            				console.log(rewritepassword, newpassword, userName);
            				let bag= {
            					...result[i],
            					password: newpassword
            				}
            				temp.push(bag)
            			}
	            	}
	            	else{
	            		temp.push(result[i])
	            	}			
           	}
   		localStorage.setItem("data",JSON.stringify(temp))
   		alert ("password matched")
   		window.location.href = "../homepage/homepage.html"; 
   		return
   		
            }
            else{
            	    console.log(newpassword, rewritepassword)
            	    alert("password not matching")
            }
            
	}










