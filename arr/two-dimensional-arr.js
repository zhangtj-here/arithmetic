let arr = new Array(2);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(8);
}


// console.log(arr);

function Node(value) {
    this.value = value;
    this.neighbor = []
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');


a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);

b.neighbor.push(a);
b.neighbor.push(d);
b.neighbor.push(e);

c.neighbor.push(a);

d.neighbor.push(b);

e.neighbor.push(b);

f.neighbor.push(a);

console.log(a);


