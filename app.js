let phoneInput = document.querySelector('.phoneInput')
let codeInput = document.querySelector('.codeInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('#result')


let regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/ig
let regExp1 = /^1 \d{2} \d{2} \d{4} \d{5}$/ig && /^2 \d{2} \d{2} \d{4} \d{5}$/ig


phoneButton.addEventListener('click',() => {
  if(regExp.test(phoneInput.value) && regExp1.test(codeInput.value)){
    alert('Success')
    }else {
    // result.innerText = 'Failed'  
    alert('Failed')
  }
})
// codeButton.addEventListener('click',() => {
//     if(regExp1.test(codeInput.value)){
//       alert('Success')
//       }else {
//       alert('Failed')
//     }
//   })