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
        
        

        console.log(JSON.parse(localStorage.getItem(email1.value)).email)
        var textvalue=JSON.parse(localStorage.getItem(email1.value)).name+" - "+JSON.parse(localStorage.getItem(email1.value)).email+" - "+JSON.parse(localStorage.getItem(email1.value)).phone_number
        
        var listItem=document.querySelector("#users");
        var li=document.createElement("li")
        li.classList.add("item")
        var text=document.createTextNode(textvalue)
        li.appendChild(text)
        var button=document.createElement("button")
         button.className=" btn-danger btn-sm float-right delete"
         button.id="size"
         button.style.maxWidth="80px"
         button.style.maxHeight="40px"
         button.appendChild(document.createTextNode("X"))
         li.appendChild(button)

         var edit_button=document.createElement("button")
         edit_button.className=" btn-primary btn-sm float-right edit"
         edit_button.id="edit-size"
         edit_button.style.maxWidth="80px"
         edit_button.style.maxHeight="40px"
         edit_button.appendChild(document.createTextNode("edit"))
         li.appendChild(edit_button)
        

        listItem.appendChild(li)
    }

}
var listItem=document.querySelector("#users");
listItem.addEventListener("click",delete_edit)

function delete_edit(e){
    e.preventDefault()
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement;
        let text=li.firstChild.textContent.split(" - ")
        localStorage.removeItem(text[1])
        listItem.removeChild(li)
    }else if(e.target.classList.contains("edit")){
        let li=e.target.parentElement;
        let text=li.firstChild.textContent.split(" - ")
        name1.value=text[0]
        email1.value=text[1]
        phonenumber.value=text[2]
        localStorage.removeItem(text[1])
        listItem.removeChild(li)
    }
}


