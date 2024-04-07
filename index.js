var icon = document.getElementById("button2")
icon.onclick = function () {
    document.body.classList.toggle("white-theme")


}
icon.addEventListener("click", myfunction);
function myfunction() {
    if (icon.innerHTML != "dark") {

        icon.innerHTML = "dark"
    }
    else {
        icon.innerHTML = "white"
    }

}
const image = document.querySelector(".slimg")

icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        image.src = "Side image (1).png";
    }
    else {
        image.src = "Side image.png"
    }
})
const himg = document.querySelector(".headingimg")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        himg.src = "Heading 1.png"
    }
    else {
        himg.src = "Heading 1 (1).png"
    }
})
const vec = document.querySelector(".table")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        vec.style.backgroundImage = 'url("Vector 1 (1).png")'
    }
    else {
        vec.style.backgroundImage = 'url("Vector 1.png")'
    }
})
const desgine = document.querySelector(".desgine")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "white") {
        desgine.style.backgroundImage = 'url("Background elements.png")'
    }
    else {
        desgine.style.backgroundImage = 'url("")'
    }
})
const logo = document.querySelector(".sheraw")

icon.addEventListener("click", function () {
    if (icon.innerHTML == "dark") {
        logo.src = "Shera Web.png";
    }
    else {
        logo.src = "Shera Web (1).png"
    }
})

function creatcard(digit1,number1,digit2,number2,digit3,number3,digit4,number4){
 let digit
 if (digit1>1000){
    digit=digit1/1000 +"k";  

 }

 else{
    digit=digit1
 }
 let num
 if (digit3>1000){
    num=digit3/1000+"k"

 }
 else{
    num=digit3;
 }
    
 

   let html= `<div class="box31">
   <span><h1>${digit} </h1><p>${number1} </p></span>
   <span><h1>${digit2} </h1><p>${number2} </p></span>
   <span><h1>${num} </h1><p>${number3} </p></span>
   <span><h1>${digit4}</h1><p>${number4} </p></span>
   <span></span>
   </div>`

   document.querySelector(".phase3").innerHTML = html


}
creatcard(48900,"Job Completed",10+"+","Industry Experiance",25000,"Followers",120+"+","Won a lot Awards")



const pic= document.querySelector(".box63")

icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        pic.src = "Group 15 (1).png";
    }
    else {
        pic.src = "Group 15.png"
    }
})
 

const pic2= document.querySelector(".box64")

icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        pic2.src = "Group 14 (1).png";
    }
    else {
        pic2.src = "Group 14.png"
    }
})

