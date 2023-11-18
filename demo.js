const myform=document.querySelector("#my-form")
var name1=document.querySelector("#name")
var email1=document.querySelector("#email")
const msg=document.querySelector(".msg")
var number=document.querySelector("#phonenumber")

myform.addEventListener("submit",localstore)

function localstore(e){
    e.preventDefault();
    if(name1.value==="" || email1.value===""|| number.value===""){
        msg.classList.add('error')
        msg.innerHTML="please enter the feilds"
        setTimeout(()=>{
            msg.remove()},3000
        )
    }else{
        let myobj={
            name:name1.value,
            email:email1.value,
            phone_number:number.value
        }
        myobj_serialize=JSON.stringify(myobj);
        localStorage.setItem(email1.value,myobj_serialize)

        console.log(JSON.parse(localStorage.getItem("myuser")))
       
    }

}

