
let enteredNumber = prompt("Введите  число больше 0");

while (isenteredNumberInvalid(enteredNumber)) {
    enteredNumber = prompt("Некорректный ввод. Введите число больше 0");
}
let sumOddNumbers=0;
let sumEvenNumbers=0;
for (let i = 1; i <= enteredNumber; i++) {
    if (i % 2 === 1){
        sumOddNumbers += i;
    }
    else sumEvenNumbers+=i;
  }
  alert (`Сумма нечетных чисел: ${sumOddNumbers}`);
  alert (`Сумма четных чисел: ${sumEvenNumbers}`);

function isenteredNumberInvalid(enteredNumber) {
    return enteredNumber === null || enteredNumber.trim() === '' || isNaN(enteredNumber)||enteredNumber<=0;
}
