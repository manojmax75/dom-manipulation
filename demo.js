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

var li= document.getElementsByTagName("li");
console.log(li[1])
li[2].style.color="green"
li[1].style.backgroundColor="#f4f4f4"

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight="bold"
    li[i].style.backgroundColor="#f4f4f4"
}