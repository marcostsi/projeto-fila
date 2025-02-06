import express from 'express';
import cors from 'cors';
import {enqueue, dequeue, size, items, front, rear, isEmpty} from "./array-queue.js"


const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/queue', (req, res) => {
  res.send({
    'items': items
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    enqueue(element)

    res.send({
      'element': element,
      'pos': size(),
    })
})

app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    enqueue(element)
    res.send({
        'element': element,
        'pos': size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = dequeue()
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
    const size = size()
    res.send({
        'size': size,
      })
})

app.get('/front', function(req, res) {
    const _front = front()
    res.send({
        'front': _front,
      })
})

app.get('/rear', function(req, res) {
    const _rear = rear()
    res.send({
        'rear': _rear,
      })
})

app.get('/isEmpty', function(req, res) {
    const _isEmpty = isEmpty()
    res.send({
        'isEmpty': _isEmpty,
      })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;