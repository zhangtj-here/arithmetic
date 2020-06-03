function Node(value) {
    this.value = value;
    this.neighbor = [];
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

function breadthSearch(rootList, target, path) {
    if (rootList === null || rootList.length === 0) return false;
    let nextRootList = [];
    for (let i = 0; i < rootList.length; i++) {
        if (path.indexOf(rootList[i]) > -1) continue;
        if (rootList[i].value === target) return true;
        path.push(rootList[i]);
        nextRootList = nextRootList.concat(rootList[i].neighbor);
    }
    return breadthSearch(nextRootList, target, path);
}

console.log(breadthSearch([a], 'c', []));