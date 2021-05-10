const calculatorGrid = document.querySelector('.calculator-grid')
const allClearButton = document.querySelector('button[data-all-clear]')
const deleteButton = document.querySelector('button[data-delete]')
const numberButtons = document.querySelectorAll('button[data-number]')
const equalButton = document.querySelector('button[data-equals]')
const input = document.querySelector('input')
const output = document.querySelectorAll('output')
const operationButtons = document.querySelectorAll('button[data-operation]')
calculatorGrid.addEventListener('click',(event)=>{

  if(event.target.hasAttribute('data-all-clear')){
    let inp = Array.from(input.value.split(''))
    input.value = inp.slice(0, inp.length-1).join('')
    if(input.value){
      input.previousElementSibling.value=input.value
    }else{
      input.previousElementSibling.value='0'
    }
  }

  if(event.target.hasAttribute('data-delete')){
    input.value = ''
    input.previousElementSibling.value='0'
  }

  if(event.target.hasAttribute('data-number')){ 
    if(input.previousElementSibling.value.match(/=/)){
    input.value = ''
    }
  }

  if(event.target.hasAttribute('data-number')||event.target.hasAttribute('data-operation')
    ||event.target.hasAttribute('data-equals')){ 
      input.value =input.value + event.target.innerHTML
      input.previousElementSibling.value=input.value
  }

  if((event.target.hasAttribute('data-operation')||event.target.hasAttribute('data-equals'))
    &&(input.value=='/'||input.value=='*'||input.value=='+'||input.value=='=')){
      input.value=''
      input.previousElementSibling.value='0'
      console.log('hey')
  }else if(event.target.hasAttribute('data-equals')){
     let out = Array.from(input.previousElementSibling.value.split(''))
    if(!isNaN(out[out.length-2])){
      input.value=eval(input.previousElementSibling.value.slice(0,-1))
      console.log(input.previousElementSibling.value.slice(0,-1))
      }else{
        input.value=input.value.slice(0,-1)
        input.previousElementSibling.value=input.value
      }
  }else if(event.target.hasAttribute('data-operation')){
    let out = Array.from(input.previousElementSibling.value.split(''))
    if(isNaN(out[out.length-2])){
       input.value=input.value.slice(0,-1)
       input.previousElementSibling.value=input.value
    }
 }
})


//keyboardEvent

window.addEventListener('keypress',(event)=>{
  let num = document.querySelector(`button[data-number="${event.key}"]`)
  let oper = document.querySelector(`button[data-operation="${event.key}"]`)
  let equal = document.querySelector(`button[data-equals="${event.key}"]`)

  if(num){ 
    if(input.previousElementSibling.value.match(/=/)){
      input.value = ''
      }
   }
  if(num||oper||equal){
  input.value = input.value+event.key
  input.previousElementSibling.value=input.value}


  if((oper||equal)
    &&(input.value=='/'||input.value=='*'||input.value=='+'||input.value=='=')){
      input.value=''
      input.previousElementSibling.value='0'
      console.log('hey')
  }else if(equal){
     let out = Array.from(input.previousElementSibling.value.split(''))
    if(!isNaN(out[out.length-2])){
      input.value=eval(input.previousElementSibling.value.slice(0,-1))
      console.log(input.previousElementSibling.value.slice(0,-1))
      }else{
        input.value=input.value.slice(0,-1)
        input.previousElementSibling.value=input.value
      }
  }else if(oper){
    let out = Array.from(input.previousElementSibling.value.split(''))
   if(isNaN(out[out.length-2])){
       input.value=input.value.slice(0,-1)
       input.previousElementSibling.value=input.value
     }
 }
})