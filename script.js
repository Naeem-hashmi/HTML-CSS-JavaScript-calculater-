function displayValue(button) {
    let btnValue = button.value;
    display.innerHTML += btnValue;
}
function clr() {
    display.innerHTML = "";
}
function del() {
    text = display.innerText;
    newText = text.slice(0, -1);
    display.innerText = newText;
}
function evaluateExpression() {
    var displayDiv = document.getElementById('display');
    var expression = displayDiv.textContent;

    try {
        var result = eval(expression);
        displayDiv.textContent = result;
    } catch (error) {
        displayDiv.textContent = 'Invalid expression';
    }
}
