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



let radioBtns = document.querySelectorAll('input[name = "q1"]');
let radioBtns2 = document.querySelectorAll('input[name = "q2"]');
let radioBtns3 = document.querySelectorAll('input[name = "q3"]');
let radioBtns4 = document.querySelectorAll('input[name = "q4"]');
let radioBtns5 = document.querySelectorAll('input[name = "q5"]');
let qValues = [];

let findSelected = () => {
  let selected = document.querySelector("input[name = 'q1']:checked").value
  qValues.push(selected)
 console.log(qValues)
}
let findSelected2 = () => {
  let selected = document.querySelector("input[name = 'q2']:checked").value
  qValues.push(selected)
 console.log(qValues)
}
let findSelected3 = () => {
  let selected = document.querySelector("input[name = 'q3']:checked").value
    qValues.push(selected)
 console.log(qValues)
}
  
  
let findSelected4 = () => {
  let selected = document.querySelector("input[name = 'q4']:checked").value
  qValues.push(selected)
  console.log(qValues)
 
}
let findSelected5 = () => {
  let selected = document.querySelector("input[name = 'q5']:checked").value
  qValues.push(selected)
  console.log(qValues)
  // let number = parseFloat(qValues[0])
  // let number2 = parseFloat(qValues[1])
  // let number3 = parseFloat(qValues[2])
  // let number4 = parseFloat(qValues[3])
  // let number5 = parseFloat(qValues[4])
  // console.log(number)
  // console.log(number)
  // console.log(number2)
  // console.log(number3)

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


console.log(qValues)

//Submit button 
// fire submit onclick 
    // run the loop to find the sum 
    // post sum to website for user to see
    // clear the array and all form values

    function submitForm (){
    console.log(qValues)
      var sum = 0;
      for(let i = 0; i < qValues.length; i++){
        sum += qValues[i];
      }
       //return sum;
      console.log(sum)
    }


let myForm = document.getElementById('fromQues')

myForm.addEventListener('submit', (event) => {
  event.preventDefault() // prevent form from auto submiting 

  // const request = new XMLHttpRequest();

  // request.open("post", "form.php")
  // request.onload = function(){
  //   console.log(request.responseText)
  // }
  // request.send(new FormData(myForm))
})
