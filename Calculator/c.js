
// Get the display element
const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // evaluate the expression
    } catch (error) {
        display.value = "Error";
    }
}
