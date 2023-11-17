var form=document.getElementById("addForm")
var itemList=document.getElementById("items")

form.addEventListener("submit",addItem);
itemList.addEventListener('click', removeitem);

function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value

    var li=document.createElement("li")
   
    li.className="list-group-item"
    console.log(li)
    li.appendChild(document.createTextNode(newitem))

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