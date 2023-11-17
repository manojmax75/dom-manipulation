// console.log(document.location)
// console.log(document.URL)
// console.log(document.title)
// document.title=123;
// console.log(document.title)
// console.log(document.doctype)
// console.log(document)
// console.log(document.head)

// console.log(document.all)
// console.log(document.forms[0])

// console.log(document.links)
// console.log(document.images)

// const title=document.getElementById("header-title")
// const mainheader=document.getElementById("main-header")

// console.log(title)
// title.textContent="goodbye"
// title.textContent="hello"

// console.log(title.innerText)
// console.log(title.textContent)



// console.log(title.innerHTML="<h3>hello</h3>")

// title.style.borderBottom="solid 1px #000"
// mainheader.style.borderBottom="solid 3px #000"


// edit the li by class name 


// var items= document.getElementsByClassName("list-group-item");
// console.log(items[1])
// items[2].style.color="green"
// // items[1].style.backgroundColor="green"

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }

//edit the li by tag name

// var li= document.getElementsByTagName("li");
// console.log(li[1])
// li[2].style.color="green"
// li[1].style.backgroundColor="#f4f4f4"

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight="bold"
//     li[i].style.backgroundColor="#f4f4f4"
// }


//QUERY SELECTOR 

// var header=document.querySelector("#main-header")
// header.style.borderBottom="solid 5px red" 

// var input=document.querySelector("input")
// input.value="hello world"

// var submit=document.querySelector('input[type="submit"]')
// submit.value="send"

// var si=document.querySelector('.list-group-item:nth-child(1)')
// si.style.color="red"









// const item=document.querySelectorAll("li")
// console.log(item)
// item[1].style.backgroundColor="green"
// item[2].style.display="none"
// for(let i=0;i<item.length;i++){
//    if(i%2===0){
//     item[i].style.fontWeight="bold"
//    }
// }


// TRAVERSING THE DOM 

var itemslist=document.querySelector("#items");
// console.log(itemslist.parentNode)
// itemslist.parentNode.style.backgroundColor="#f4f4f4"


// var itemslist=document.querySelector("#items");
// console.log(itemslist.parentElement)
// itemslist.parentElement.style.backgroundColor="#f4f4f4"

// child nodes
console.log(itemslist.childNodes)
console.log(itemslist.children)
console.log(itemslist.children[1])
itemslist.children[1].style.color="red"

// first child

console.log(itemslist.firstChild)
// first element child 
console.log(itemslist.firstElementChild)
itemslist.firstElementChild.style.color="blue"


// last child

console.log(itemslist.lastChild)
// last element child 
console.log(itemslist.lastElementChild)
itemslist.lastElementChild.style.color="blue"

// nextSibling

console.log(itemslist.nextSibling)
//  nextElementSibling
console.log(itemslist.nextElementSibling)
itemslist.nextElementSibling.style.color="red"


// previousSibling

console.log(itemslist.prevuousSibling)
// previousElementSibling
console.log(itemslist.prevuousElementSibling)
itemslist.previousElementSibling.style.color="red"

//create element 

var newdiv=document.createElement("div");
newdiv.className="hello"
newdiv.id="hello1"
newdiv.setAttribute("title","hello div")
console.log(newdiv)

// create a text Node

var textnode=document.createTextNode("Hello world")
newdiv.appendChild(textnode)

// insert in dom
var insertdom=document.querySelector("header .container")
var h1=document.querySelector("header h1")

insertdom.insertBefore(newdiv,h1)

var headertitle=document.querySelector("#header-title")

var newspan=document.createElement("span")
newspan.textContent="HEllo "
headertitle.insertBefore(newspan,headertitle.firstChild)

var listitem=document.querySelector(".list-group-item:first-child")
var newspans=document.createElement("span")
newspans.textContent="HEllo "
listitem.insertBefore(newspans,listitem.firstChild)