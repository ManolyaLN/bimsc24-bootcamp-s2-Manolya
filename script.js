//this is my first line in javascript
console.log("hello world")

let name = "Mano"
console.log(name)

const doc = document.documentElement
console.log(doc)

//change style of doc from js
doc.style.background = "black"
doc.style.fontFamily = "monospace"

//access particular elements
const nav = document.querySelector('#navbar')
// console.log(nav)
nav.innerHTML = "Cows are Great"
nav.style.fontSize = "16px"


const sidebar = document.querySelector('#sidebar')
//add elements from js
let resetButton = document.createElement("button")
sidebar.appendChild(resetButton)


resetButton.innerHTML = "Reset Button"
resetButton.style.fontSize = "5px"

let submitButton = document.createElement("button")
sidebar.appendChild(submitButton)
submitButton.innerHTML = "Submit"
submitButton.style.fontSize = "5px"

//create a form element in the sidebar
let input = document.createElement("input")
sidebar.appendChild(input)

//create an event when you click the button

submitButton.addEventListener('click', doSomething)
resetButton.addEventListener('ckick', Refresh)

const main = document.querySelector("#main")

function doSomething(){

    //create a p element
    //fill that p element with some text
    //append that element to main

 let inputText = input.value
 main.innerHTML += inputText
 console.log(inputText)
    

}

function Refresh(){
let inputText = input.value
 main.innerHTML = ""

     //get rif of all the paragraphs

}



