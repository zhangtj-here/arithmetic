function Node(value) {
    this.value = value;
    this.childs = [];
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");


a.childs.push(b);
a.childs.push(c);
a.childs.push(f);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root) {
    if (root === null) return ;
    console.log(root.value);
    for (let i = 0; i < root.childs.length; i++) {
        deepSearch(root.childs[i]);
    }
}
deepSearch(a);