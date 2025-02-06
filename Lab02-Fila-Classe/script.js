import {Queue } from './queue.js';
const queue = new Queue()

const buttonEnqueue = document.querySelector("#buttonEnqueue");
const buttonDequeue = document.querySelector("#buttonDequeue");
const buttonFront = document.querySelector("#buttonFront");
const buttonRear = document.querySelector("#buttonRear");
const buttonSize = document.querySelector("#buttonSize");
const buttonisEmpty = document.querySelector("#buttonisEmpty");

buttonEnqueue.addEventListener("click", () => enqueueValue());
buttonDequeue.addEventListener("click", () => dequeueValue());
buttonFront.addEventListener("click", () => frontValue());
buttonRear.addEventListener("click", () => rearValue());
buttonSize.addEventListener("click", () => sizeValue());
buttonisEmpty.addEventListener("click", () => isEmptyValue());

function enqueueValue() {
    let valor = document.getElementById("elemento").value;
    if (valor) {
        queue.enqueue(valor);
        updateMeuArray();
    }
}

function dequeueValue() {
    queue.dequeue();
    updateMeuArray();
}

function frontValue() {
    alert(`Primeiro elemento da fila: ${queue.front()}`);
}

function rearValue() {
    alert(`Último elemento da fila: ${queue.rear()}`);
}

function sizeValue(){
    alert(queue.size()) 
}

function isEmptyValue(){
    alert(queue.isEmpty())
}

function updateMeuArray() {
    document.getElementById("meuArray").innerHTML = "";
    for (const i of queue.items) {
        document.getElementById("meuArray").innerHTML += `<span class="valor_array p-2 bg-blue-300">${i}</span>`;
    }
}

