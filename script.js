let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

// Кнопка удаления

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

// Кнопка суммы

document.querySelector('#btn_sum').addEventListener('click', function () {
	operation = 'sum';
    lastOperand = parseInt(inputWindow.value);
    inputWindow.value = '';
})

// Кнопка вычитания

document.querySelector('#btn_subt').addEventListener('click', function () {
	operation = 'subt';
	lastOperand = parseInt(inputWindow.value);
	inputWindow.value = '';
})

// Кнопка умножения

document.querySelector('#btn_multy').addEventListener('click', function () {
	operation = 'multy';
	lastOperand = parseInt(inputWindow.value);
	inputWindow.value = '';
})

// Кнопка деления

document.querySelector('#btn_divison').addEventListener('click', function () {
	operation = 'divison';
	lastOperand = parseInt(inputWindow.value);
	inputWindow.value = '';
})

// Кнопка вычисления

document.querySelector('#btn_calc').addEventListener('click', function () {
	if(operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'subt'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'multy') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
	}
    if (operation === 'divison') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

// Кнопки от 0 до 9

document.querySelector('#btn_1').addEventListener('click', function () {
	inputWindow.value += '1';
})
document.querySelector('#btn_2').addEventListener('click', function () {
	inputWindow.value += '2';
})
document.querySelector('#btn_3').addEventListener('click', function () {
	inputWindow.value += '3';
})
document.querySelector('#btn_4').addEventListener('click', function () {
	inputWindow.value += '4';
})
document.querySelector('#btn_5').addEventListener('click', function () {
	inputWindow.value += '5';
})
document.querySelector('#btn_6').addEventListener('click', function () {
	inputWindow.value += '6';
})
document.querySelector('#btn_7').addEventListener('click', function () {
	inputWindow.value += '7';
})
document.querySelector('#btn_8').addEventListener('click', function () {
	inputWindow.value += '8';
})
document.querySelector('#btn_9').addEventListener('click', function () {
	inputWindow.value += '9';
})
document.querySelector('#btn_0').addEventListener('click', function () {
	inputWindow.value += '0';
})