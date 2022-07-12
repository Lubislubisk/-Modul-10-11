let lastOperand = 0;
let operation = null;

const input = document.getElementById('inputWindow');



document.getElementById('btn_clr').addEventListener('click', function () {
    input.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    input.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    input.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    input.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    input.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    input.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    input.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    input.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    input.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    input.value += '9';
})
document.getElementById('btn_0').addEventListener('click', function () {
    input.value += '0';
})


document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(input.value);
    operation = 'sum';
    input.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(input.value);
    operation = 'def';
    input.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(input.value);
    operation = 'mult';
    input.value = '';
})

document.getElementById('btn_divis').addEventListener('click', function () {
    lastOperand = parseInt(input.value);
    operation = 'divis';
    input.value = '';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(input.value);
    operation = 'sqrt';
    input.value = '';
})


  document.getElementById('btn_calc').addEventListener('click', function () 

{
    if (operation === 'sum'){
      const result = lastOperand + parseInt(input.value); 
      input.value = result;
    }

    if (operation === 'def'){
        const result = lastOperand - parseInt(input.value);  
        input.value = result;
      }

      if (operation === 'mult'){
        const result = lastOperand * parseInt(input.value);  
        input.value = result;
      }

      if (operation === 'divis'){
        const result = lastOperand / parseInt(input.value);  
        input.value = result;
      }

      if (operation === 'sqrt'){
        const result = Math.sqrt(lastOperand);   
        input.value = result;
      }
     
    })

   