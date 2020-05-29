function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function BreadthFirst(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    let arr = [];
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i] !== null) {
            if (rootList[i].value === target) return true;
            else {
                arr.push(rootList[i].left);
                arr.push(rootList[i].right);
            }
        }
    }
    return BreadthFirst(arr, target);
}

console.log(BreadthFirst([a], "e"));