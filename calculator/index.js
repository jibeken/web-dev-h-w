let resultBox = document.getElementById('result');

function appendValue(value) {
    resultBox.value += value;
}

function clearScreen() {
    resultBox.value = '';
}

function deleteLast() {
    resultBox.value = resultBox.value.slice(0, -1);
}

function calculate() {
    try {
        resultBox.value = eval(resultBox.value);
    } catch (error) {
        resultBox.value = 'Error';
    }
}
