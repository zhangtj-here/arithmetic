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


function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value === target) return true;

    let left = deepSearch(root.left, target);
    let right = deepSearch(root.right, target);
    return left || right;
}

let IsSure = deepSearch(a, "m");
console.log(IsSure);