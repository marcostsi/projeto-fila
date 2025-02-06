const queue = [];

function enqueue(value) {
    queue.push(value);
}

function dequeue() {
    return queue.shift();
}

function front() {
    if (queue.length === 0) {
        return null;
    }
    return queue[0];
}

function rear() {
    if (queue.length === 0) {
        return null;
    }
    return queue[queue.length - 1];
}

function size(){
    return queue.length
}

function isEmpty(){
    return queue.length === 0
}

export { enqueue, dequeue, front, rear, size, isEmpty, queue };