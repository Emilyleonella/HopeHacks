
let radioBtns = document.querySelectorAll('input[name = "q1"]'); // to select radio buttions by name ////////
let radioBtns2 = document.querySelectorAll('input[name = "q2"]');
let radioBtns3 = document.querySelectorAll('input[name = "q3"]');
let radioBtns4 = document.querySelectorAll('input[name = "q4"]');
let radioBtns5 = document.querySelectorAll('input[name = "q5"]');
let qValues = []; // empty array to push values ///////////

let findSelected = () => {
  let selected = document.querySelector("input[name = 'q1']:checked").value // function to store the value from the checked radio buttons 
  qValues.push(selected) // value is pushed into empty array ///////////
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


// console.log(qValues)

//Submit button 
// fire submit onclick 
    // run the loop to find the sum 
    // post sum to website for user to see
    // clear the array and all form values


/////// function for onsubmit 
    function submitForm (){
      let number = parseFloat(qValues[0])
      let number2 = parseFloat(qValues[1]) //storing the string values into numbers and sotring them into variables 
      let number3 = parseFloat(qValues[2])
      let number4 = parseFloat(qValues[3])
      let number5 = parseFloat(qValues[4])

      //let totalGallons = math.evaluate`${number}+${number2}+${number3}+${number4}+${number5}+` /////// math.evaluate is from mathjs api its working on server.js but not inside the Public folder 
      //console.log(totalGallons)

      // here I will add the values from the variables to get the sum ///////////
      }

// another function I was working on ////////////////////
    // function submitForm (){
    // console.log(qValues)
    //   var sum = 0;
    //   for(let i = 0; i < qValues.length; i++){
    //     sum += qValues[i];
    //   }
    //    //return sum;
    //   console.log(sum)
    // }


let myForm = document.getElementById('fromQues')

myForm.addEventListener('submit', (event) => {
  event.preventDefault() // prevent form from auto submiting /////////////

})

