const items = []

function enqueue(element){
    items.push(element)
}

function dequeue(){
    if (isEmpty()){
        return "Fila vazia"
    } 
    return items.shift()
}

function size(){
    return items.length
}

function isEmpty(){
    return items.length === 0
}

function front(){
    return isEmpty()? "A fila está vazia" : items[0]
}

function rear(){
    return isEmpty()? "A fila está vazia" : items[size()-1]
}

export {enqueue, dequeue, size, isEmpty, front, rear, items}