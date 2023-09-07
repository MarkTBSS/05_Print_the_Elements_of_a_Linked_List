class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // pointer
    }
}

function createLinkedList() {
    var headNode = new Node(16);
    var secondNode = new Node(13);
    headNode.next = secondNode;
    return headNode;
}

const head = createLinkedList();

function printLinkedList(head) {
    while (head) { 
        console.log(head.data)
        head = head.next 
    }
}

printLinkedList(head);