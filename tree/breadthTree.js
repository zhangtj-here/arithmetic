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

function deepSearch(rootList, target) {
    if (rootList === null || rootList.length === 0) return false;
    let arr = [];
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i].value === target) return true;
        arr = arr.concat(rootList[i].childs);
        // for (let j = 0; j < rootList[i].childs.length; j++) {
        //     arr.push(rootList[i].childs[j]);
        // }
    }
    return deepSearch(arr, target);
}

console.log(deepSearch([a], 'e'));