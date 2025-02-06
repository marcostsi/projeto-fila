import { enqueue, dequeue, front, rear, size, isEmpty, queue } from './queue.js';

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
        enqueue(valor);
        updateMeuArray();
    }
}

function dequeueValue() {
    dequeue();
    updateMeuArray();
}

function frontValue() {
    alert(`Primeiro elemento da fila: ${front()}`);
}

function rearValue() {
    alert(`Último elemento da fila: ${rear()}`);
}

function sizeValue(){
    alert(queue.length) 
}

function isEmptyValue(){
    alert(queue.length === 0)
}

function updateMeuArray() {
    document.getElementById("meuArray").innerHTML = "";
    for (const i of queue) {
        document.getElementById("meuArray").innerHTML += `<span class="valor_array p-2 bg-blue-300">${i}</span>`;
    }
}