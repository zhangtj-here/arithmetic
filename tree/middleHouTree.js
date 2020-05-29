function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// let middle = [ 'f', 'c', 'g', 'a', 'd', 'b', 'e' ];
// let hou = [ 'f', 'g', 'c', 'd', 'e', 'b', 'a' ];
let middle = [ 'g', 'f', 'c', 'a', 'b', 'd', 'e' ];
let hou = [ 'g', 'f', 'c', 'e', 'd', 'b', 'a' ];


function MiddleHouTree(middle, hou) {
    if (middle == null || hou == null || middle.length == 0 || hou.length == 0 || middle.length !== hou.length) return null;
    let root = new Node(hou[hou.length - 1]);
    let index = middle.indexOf(root.value);
    let middleLeft = middle.slice(0, index);
    let middleRight = middle.slice(index + 1, middle.length);
    let houLeft = hou.slice(0, index);
    let houRight = hou.slice(index, hou.length - 1);
    root.left = MiddleHouTree(middleLeft, houLeft);
    root.right = MiddleHouTree(middleRight, houRight);
    return root;
}

console.log(JSON.stringify(MiddleHouTree(middle, hou), null, "    "));