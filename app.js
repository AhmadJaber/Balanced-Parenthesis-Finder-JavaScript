
const btn = document.querySelector('#btn');
const inputParen = document.querySelector('#input-paren');

btn.addEventListener('click', isBalanced);
inputParen.addEventListener('keyup', function(e) {
  e.preventDefault(); // if it is form then i used that

  if (e.keyCode === 13) {
    isBalanced();
  }
})

function isBalanced() {
  const openParen = {'{':'}', '[': ']', '(': ')'};
  const closedParen = {'}': true, ']': true, ')': true};
  let stack = [];

  let inputVal = inputParen.value;
  let inputValArr = inputVal.split("");

  inputValArr.forEach(val => {
    if (openParen[val]) {
      stack.push(val);
    }else if (closedParen[val]) {
      if (openParen[stack.pop()] !== val) return printResult(false);
    }
  });

  let result = stack.length === 0 ? true : false;
  printResult(result);
}

function printResult(bool) {
  const UIanswer = document.querySelector("#answer");
  const inputVal = inputParen.value;

  if (bool) {
    UIanswer.innerHTML = `WooHoo! Your string <div class='bold'>\"${inputVal}\ "</div> is <span class='bold'>balanced</span>!`;
  } else {
    UIanswer.innerHTML = `Ack! Your string <div class='bold dirty-font'>\"${inputVal} \"</div> is <span class='bold'>unbalanced</span>, check your string again.`;
  }
}
