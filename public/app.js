// const total = function getAnswers() {
//    let values = [];
//   // let q1 = document.getElementsById("questionOne").value;
//   // let q2 = document.getElementById("questionTwo").value;
//   // let q3 = document.getElementById("questionThree").value;
//   // let q4 = document.getElementById("questionFour").value;
//   // let q5 = document.getElementById("questionFive").value;


//   values.push(document.getElementsById("questionOne").value)
//   values.push(document.getElementById("questionTwo").value);
//   values.push(document.getElementById("questionThree").value);
//   values.push(document.getElementById("questionFour").value);
//   values.push(document.getElementById("questionFive").value);
  
// return values;


// };

// console.log(total)


// const myForm = document.getElementById('questions')
// const response = await fetch('https://aquaalert.herokuapp.com/');

// myForm.addEventListener('submit', function(e){
  
//   e.preventDefault


//   const formData = new FormData(this)

//   fetch('form.php', {
//     method: 'post',
//     body: formData
//   }).then(function(response){
//     return response.text();
//   }).then(function(text){
// console.log(text);
//   }).catch(function(error){
//     console.error(error)
//   })
// })

function submitForm() {
  let form = document.getElementById("questions");
  form.submit();
}

const form = document.forms.questions;
const radios = form.elements.q1;

console.log(radios)


// let arr = Array.from(form.elements.q1).find(radio => radio.checked)

// console.log(arr)