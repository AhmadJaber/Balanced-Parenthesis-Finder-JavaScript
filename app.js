const btnUI = document.querySelector('#btn');
const inputParenUI = document.querySelector('#input-paren');

btnUI.addEventListener('click', isBalanced);
inputParenUI.addEventListener('keyup', function(e) {
    if(e.keycode === 13) {
        isBalanced();
    }
});

function isBalanced() {
    let stack = [];
    const openParen = {'{': '}', '[': ']', '(': ')'};
    const closeParen = {'}': true, ']': true, ')': true};

    const inputVal = inputParenUI.value;
    
    for(let i=0; i<inputVal.length; i++) {
        let val = inputVal[i];
        
        if(openParen[val]) {
            stack.push(val);
        }
        else if(closeParen[val]) {
            if(openParen[stack.pop()] !== val) {
                return printResult(false);
            }
        }
    }

    let result = stack.length === 0 ? true : false;
    printResult(result);
}

function printResult(bol) {
    const answerUI = document.querySelector('#answer');
    const inputVal = inputParenUI.value;

    if(bol) {
        answerUI.innerHTML = `WooHoo! Your String <div class='bold'>\"${inputVal}\ "</div> is <span class='bold'>balanced</span>`;
    }else {
        answerUI.innerHTML = `Ack! Your string <div class='bold dirty-font'>\"${inputVal} \"</div> is <span class='bold'>unbalanced</span>, check your string again.`;
    }

    inputParenUI.value = '';
}

/**
 * Test 
    * balancedParens('(');  // false
    balancedParens('()'); // true
    balancedParens(')(');  // false
    balancedParens('(())');  // true
    balancedParens('[](){}'); // true
    balancedParens('[({})]');   // true
    balancedParens('[(]{)}'); // false
    balancedParens('var supYo  = { hey: dog() }'); // true
    balancedParens('var fiddle = function() { doggy.eat();'); // false
 */