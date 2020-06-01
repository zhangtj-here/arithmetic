// 假设有一万个数，从这些数中取某个数是否存在，要求性能最好

let arr = [];

for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 100000);
}

// arr = [5, 3, 5, 1, 6, 8, 2, 9, 7, 2, 6];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, target) {
    if (root === null) return;
    if (root.value === target) return;
    if (root.value > target) {
        if (root.left === null) {
            num1++;
            root.left = new Node(target);
        }
        else addNode(root.left, target);
    } else {
        if (root.right === null) {
            num1++;
            root.right = new Node(target);
        }
        else addNode(root.right, target);

    }
}

let num1 = 0;
function buildSearchTree(arr) {
    if (arr === null || arr.length === 0) return;
    let root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

let root = buildSearchTree(arr);
// console.log(JSON.stringify(buildSearchTree(arr), null, "     "));
console.log(num1);



let num = 0;
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        num++;
        if (arr[i] === target) return true;
    }
    return false;
}

let num2 = 0;
function searchTree(root, target) {
    num2++;
    if (root === null || !target && target !== 0) return false;
    if (root.value === target) return true;
    if (root.value < target) return searchTree(root.right, target);
    else return searchTree(root.left, target);
}
// console.log(root);
console.log(searchTree(root, 1000));
console.log(num2);

console.log(search(arr, 1000));
console.log(num);
