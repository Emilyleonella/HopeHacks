// const total = function getAnswers() {
//    let values = [];
//   let q1 = document.getElementsById('input[name = q1]:checked').value;
//   let q2 = document.getElementById('input[name = q2]:checked').value;
//   let q3 = document.getElementById('input[name = q3]:checked').value;
//   let q4 = document.getElementById('input[name = q4]:checked').value;
//   let q5 = document.getElementById('input[name = q1]:checked').value;


//   values.push(document.getElementsById("questionOne").value)
//   values.push(document.getElementById("questionTwo").value);
//   values.push(document.getElementById("questionThree").value);
//   values.push(document.getElementById("questionFour").value);
//   values.push(document.getElementById("questionFive").value);
  
// return values;


// };

// console.log(total)

function results (){
  let values = [];

let radioBtns = document.querySelectorAll('input[name = "q1"]');
let radioBtns2 = document.querySelectorAll('input[name = "q2"]');
let radioBtns3 = document.querySelectorAll('input[name = "q3"]');
let radioBtns4 = document.querySelectorAll('input[name = "q4"]');
let radioBtns5 = document.querySelectorAll('input[name = "q5"]');

let findSelected = () => {
  let selected = document.querySelector("input[name = 'q1']:checked").value
  console.log(selected) 
}
let findSelected2 = () => {
  let selected = document.querySelector("input[name = 'q2']:checked").value
  console.log(selected)
}
let findSelected3 = () => {
  let selected = document.querySelector("input[name = 'q3']:checked").value
  console.log(selected)
}
let findSelected4 = () => {
  let selected = document.querySelector("input[name = 'q4']:checked").value
  console.log(selected)
}
let findSelected5 = () => {
  let selected = document.querySelector("input[name = 'q5']:checked").value
  console.log(selected)
}


radioBtns.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected);
})

radioBtns2.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected2);
})
radioBtns3.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected3);
})
radioBtns4.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected4);
})
radioBtns5.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected5);
})
}



let radioBtns = document.querySelectorAll('input[name = "q1"]');
let radioBtns2 = document.querySelectorAll('input[name = "q2"]');
let radioBtns3 = document.querySelectorAll('input[name = "q3"]');
let radioBtns4 = document.querySelectorAll('input[name = "q4"]');
let radioBtns5 = document.querySelectorAll('input[name = "q5"]');


let findSelected = () => {
  let selected = document.querySelector("input[name = 'q1']:checked").value
  console.log(selected) 
 
}
let findSelected2 = () => {
  let selected = document.querySelector("input[name = 'q2']:checked").value
  console.log(selected)
 
}
let findSelected3 = () => {
  let selected = document.querySelector("input[name = 'q3']:checked").value
  console.log(selected)
  
}
let findSelected4 = () => {
  let selected = document.querySelector("input[name = 'q4']:checked").value
  console.log(selected)
  
}
let findSelected5 = () => {
  let selected = document.querySelector("input[name = 'q5']:checked").value
  console.log(selected)
  
}


radioBtns.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected);
})

radioBtns2.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected2);
})
radioBtns3.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected3);
})
radioBtns4.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected4);
})
radioBtns5.forEach(radioBtn =>{
  radioBtn.addEventListener("change",
  findSelected5);
})

