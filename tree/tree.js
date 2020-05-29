function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
let arr = [];

// 前序遍历
function f1(tree) {
    if (tree == null) return;
    arr.push(tree.value);
    if (tree.left) {
        f1(tree.left);
    }
    if (tree.right) {
        f1(tree.right);
    }
}

// f1(a);

// 中序遍历
function f2(tree) {
    if (tree == null) return;
    if (tree.left) {
        f2(tree.left);
    }
    arr.push(tree.value);
    if (tree.right) {
        f2(tree.right);
    }
}

// f2(a);

// 后序遍历
function f3(tree) {
    if (tree == null) return;
    if (tree.left) {
        f3(tree.left);
    }
    if (tree.right) {
        f3(tree.right);
    }
    arr.push(tree.value);
}

f3(a);

console.log(arr);









