function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let node2 = new Node('2');
let node5 = new Node('5');
let node3 = new Node('3');
let node6 = new Node('6');

node2.right = node5;
node5.left = node3;
node5.right = node6;


function getDeep(root) {
    if (root == null) return 0;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}
// console.log(getDeep(e));


function isBalance(root) {
    if (root === null) return true;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    }
    return isBalance(root.left) && isBalance(root.right);
}



function roteLeft(root) {
    let newRoot = root.right;
    let changeRoot = root.right.left;
    root.right = changeRoot;
    newRoot.left = root;
    return newRoot;
}

function roteRight(root) {
    let newRoot = root.left;
    let changeRoot = root.left.right;
    root.left = changeRoot;
    newRoot.right = root;
    return newRoot;
}
function change(root) {
    if (isBalance(root)) return root;
    if (root.left !== null) root.left = change(root.left);
    if (root.right !== null) root.right = change(root.right);
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) return root;
    else {
        if (leftDeep > rightDeep) return roteRight(root);
        else return roteLeft(root);
    }

}

console.log(change(node2));


// console.log(isBalance(node2));



