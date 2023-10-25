class CircularQueue 
{
  constructor(size) 
  {
    this.queue = new Array(size);
    this.maxSize = size;
    this.front = this.rear = -1;
  }

  isEmpty()
  {
    return this.front === -1;
  }

  isFull() 
  {
    return (this.rear + 1) % this.maxSize === this.front;
  }

  enqueue(item)
  {
    if (this.isFull())
    {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) 
    {
      this.front = this.rear = 0;
    } else
    {
      this.rear = (this.rear + 1) % this.maxSize;
    }

    this.queue[this.rear] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.queue[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.queue[this.rear];
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let i = this.front;
    while (true) {
      console.log(this.queue[i]);
      if (i === this.rear) {
        break;
      }
      i = (i + 1) % this.maxSize;
    }
  }
}
