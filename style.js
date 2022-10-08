let operand = [];
let operator = "";
let result = 0;

function setOperand(num) {
  if (operand.length === 0) {
    operand[0] = num;
  } else if (operand.length === 1 && operator.length === 0) {
    operand[0] += num;
  } else if (operand.length === 1 && operator.length > 0) {
    operand[1] = num;
  } else if (operand.length === 2 && operator.length > 0) {
    operand[1] += num;
  }

  disResult();
//   console.log(operand);
}

function setOperator(e) {
  if (operand.length > 0) {
    operator = e;
  }
//   console.log(operator, operator.length);

  disResult();
}

let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function () {
  setOperand("0");
});

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  setOperand("1");
});

let btnSum = document.getElementById("btnSum");
btnSum.addEventListener("click", function () {
  setOperator("+");
});

let btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", function () {
  setOperator("-");
});

let btnMul = document.getElementById("btnMul");
btnMul.addEventListener("click", function () {
  setOperator("*");
});

let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", function () {
  setOperator("/");
});

let btnClr = document.getElementById("btnClr");
btnClr.addEventListener("click", function () {
  operand = [""];
  operator = "";
  disResult();
});

function disResult() {
  let res = document.getElementById("res");
  let val1 = operand[0];
  let val2 = operand[1] === undefined ? "" : operand[1];

  //   console.log(val1, val2)
  res.innerText = `${val1} ${operator} ${val2}`;
}

let btnEql = document.getElementById("btnEql");

btnEql.addEventListener("click", function () {
  
  if (operand.length === 2 && operator.length > 0) {
    
   
    let a = parseInt(operand[0], 2);
    let b = parseInt(operand[1], 2);

    switch (operator) {
      case "+":
        operand = [(a + b).toString(2)];
    
        break;
      case "-":
        operand = [(a - b).toString(2)];
        break;
      case "*":
        operand = [(a * b).toString(2)];
        break;
      case "/":
        operand = [(a / b).toString(2)];
        break;
    }

    
    // operand = [];
    operator = "";
    disResult();
  }
});
