function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let node2 = new Node('2');
let node3 = new Node('3');
let node5 = new Node('5');
let node6 = new Node('6');
let node7 = new Node('7');
let node8 = new Node('8');
let node9 = new Node('9');

// node9.left = node8;
// node8.left = node7;
// node7.left = node6;
// node6.left = node5;
// node5.left = node3;
// node3.left = node2;


node2.right = node3;
node3.right = node5;
node5.right = node6;
node6.right = node7;
node7.right = node8;
node8.right = node9;


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
        if (leftDeep > rightDeep) {
            let notChangeDeep = getDeep(root.left.left);
            let changeDeep = getDeep(root.left.right);
            if (changeDeep > notChangeDeep) root.left = roteLeft(root.left);
            return roteRight(root);
        }
        else {
            let notChangeDeep = getDeep(root.right.right);
            let changeDeep = getDeep(root.right.left);
            if (changeDeep > notChangeDeep) root.right = roteRight(root.right);
            return roteLeft(root);
        }
    }

}

// console.log(JSON.stringify(change(node2), null, "     "));


// console.log(isBalance(node2));
let num1 = 0;
function addNode(root, num) {
    if (root === null) return;
    if (root.value === num) return;
    if (root.value > num) {
        if (root.left === null) {
            num1++;
            root.left = new Node(num);
        }
        else addNode(root.left, num);
    } else {
        if (root.right === null) {
            num1++;
            root.right = new Node(num);
        }
        else addNode(root.right, num);
    }
}

function buildSearchTree(arr) {
    if (arr === null || arr.length === 0) return;
    let root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

let num = 0;
function searchByTree(root, target) {
    num++;
    if (root === null) return false;
    if (root.value === target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}
let arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}


let root = buildSearchTree(arr);


console.log(num1);
console.log(getDeep(root));
console.log(searchByTree(root, 10000));
console.log(num);

num = 0;
let root1 = change(root);
console.log(getDeep(root1));

console.log(searchByTree(root1, 10000));
console.log(num);



