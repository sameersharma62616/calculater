// Select elements
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
const operators = ['/', '*', '-', '+', '%'];
let currentInput = '';

// Add event listener for all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            // Clear the input box
            inputBox.value = '';
            currentInput = '';
        } else if (value === 'DEL') {
            // Delete the last character
            inputBox.value = inputBox.value.slice(0, -1);
            currentInput = inputBox.value;
        } else if (operators.includes(value)) {
            // Add operator to the input
            if (currentInput !== '' && !operators.includes(currentInput.slice(-1))) {
                currentInput += value;
                inputBox.value = currentInput;
            }
        } else if (value === '=') {
            // Evaluate the expression
            try {
                const result = eval(currentInput);
                inputBox.value = result;
                currentInput = result.toString();
            } catch (e) {
                inputBox.value = 'Error';
                currentInput = '';
            }
        } else {
            // Add number or decimal to the input
            currentInput += value;
            inputBox.value = currentInput;
        }
    });
});
