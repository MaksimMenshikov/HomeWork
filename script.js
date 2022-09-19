
const btn = document.querySelector('#Calculate');
const firstNumber=document.querySelector('#first-number');
const secondNumber=document.querySelector('#second-number');
const action = document.querySelector('#operation');
const resultEl = document.querySelector('#result');
let result=0 ;
btn.addEventListener('click', onBtnClick);
//***********Описание функций**************/
function onBtnClick() {
  if(isValInvalid(firstNumber.value)){
    resultEl.textContent="Некорректный ввод первого числа";
  }else if(isValInvalid(secondNumber.value)){
    resultEl.textContent="Некорректный ввод второго числа";
  }
  else{
  result=+firstNumber.value;
  result = calculate(result,+secondNumber.value);
  resultEl.textContent=`Результат: ${firstNumber.value}${action.value}${secondNumber.value} = ${result}`;
  }
}

function calculate(a, b) {
  switch (action.value) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}

function isValInvalid(operand) {
  return operand === null || operand.trim() === '' || isNaN(operand);
}
