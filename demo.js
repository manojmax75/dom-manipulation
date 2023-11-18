var form=document.getElementById("addForm")
var itemList=document.getElementById("items")

form.addEventListener("submit",addItem);
itemList.addEventListener('click', removeitem);
filter.addEventListener("keyup",filteritems);

function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value
    var newitem1=document.getElementById("itemn").value
    newitem1=" "+newitem1
    


    var li=document.createElement("li")
   
    li.className="list-group-item"
    console.log(li)
    li.appendChild(document.createTextNode(newitem))
    
    var desc=document.createElement("span")
    desc.appendChild(document.createTextNode(newitem1))
    li.append(desc)

    var button=document.createElement("button")
    button.className="btn btn-danger btn-sm float-right delete"
    button.appendChild(document.createTextNode("X"))
    li.appendChild(button)

    var editbutton=document.createElement("button")
    editbutton.className="btn btn-primary btn-sm float-right edit"
    editbutton.appendChild(document.createTextNode("edit"))
    li.appendChild(editbutton)

    itemList.append(li)


}

function removeitem(e){
   

    if(e.target.classList.contains('delete')){
        if(confirm("are you sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    

    
}


function filteritems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.querySelectorAll("li")

    for(let i=0;i<items.length;i++){
        var itemtext=items[i].firstChild.textContent.toLowerCase()
        var itemtext1=items[i].firstElementChild.textContent.toLowerCase()
        
        if(itemtext.indexOf(text)!=-1 || itemtext1.indexOf(text)!=-1){
            items[i].style.display="block"
        }else{
            items[i].style.display="none"
        }
    }
    


}