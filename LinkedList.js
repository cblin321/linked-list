import { Node } from "./Node.js";
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            const toAdd = new Node(value);
            this.tail.next = toAdd;
            this.tail = toAdd;
        } 
        this.size++;

    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.tail = new Node(value);
        } else {
            const lastHead = this.head;
            this.head = new Node(value);
            this.head.next = lastHead;
        }

        this.size++;
    }

    at(index) {
        if (index > this.size)
            throw new Error("Index exceeds size of list");
        let curr = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index)
                return curr;
            curr = curr.next;
        }
    }

    pop() {
        if (this.size === 0)
            throw new Error("Can't pop from empty list");

        let curr = this.head;
        for (let i = 0; i < this.size - 1; i++) {
            curr = curr.next;
        }

        this.tail = curr;
        curr.next = null;
        this.size--;
    }

    contains(val) {
        let curr = this.head;
        for (let i = 0; i < this.size; i++) {
            if (curr.value === val)
                return true;
            curr = curr.next;
        }
        return false;
    }

    find(value) {
        let curr = this.head;
        for (let i = 0; i < this.size; i++) {
            if (curr.value === value)
                return i;
            curr = curr.next;
        }
        return null;
    }

    toString() {
        if (this.size === 0)
            return "()";
        let rep = `( ${this.head.value} )`;
        let curr = this.head.next;
        while (curr) {
            rep += ` -> ( ${curr.value} )`;
            curr = curr.next;
        }
        rep += " -> null";
        return rep;
    }

}

export {LinkedList};