const myform=document.querySelector("#my-form")
var name1=document.querySelector("#name")
var email1=document.querySelector("#email")
const msg=document.querySelector(".msg")

myform.addEventListener("submit",localstore)

function localstore(e){
    e.preventDefault();
    if(name1.value==="" || email1.value===""){
        msg.classList.add('error')
        msg.innerHTML="please enter the feilds"
        setTimeout(()=>{
            msg.remove()},3000
        )
    }else{
        localStorage.setItem("email",email1.value)
        localStorage.setItem("name",name1.value)
       
    }

}

