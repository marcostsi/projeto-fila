class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }
        return this.items.shift();
    }
    front() {
        if (this.isEmpty()) {
            return "A fila está vazia"
        } else {
            return this.items[0];
        }
    }
    rear() {
        if (this.isEmpty()){
            return "A fila esta vazia"
        } else {
            return this.items[this.size() - 1];
        }
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}

export { Queue }
