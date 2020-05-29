
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


let first = [ a, c, f, g, b, d, e ];
// let middle = [ f, c, g, a, d, b, e ];
let middle = [ g, f, c, a, b, d, e ];
// let later = [ f, g, c, d, e, b, a ];
let later = [ g, f, c, e, d, b, a ];

function createBinaryTree (first1, middle1) {
    if (first1.length <= 1 || middle1.length <= 1) return;
    let tree = first1[0];
    let index = middle1.findIndex((value) => value === tree);
    let mLeft = middle1.slice(0, index);
    let mRight = middle1.slice(index + 1, middle1.length);
    let fLeft = first1.slice(1, index + 1);
    let fRight = first1.slice(index + 1, first1.length);
    tree.left = fLeft[0] ? fLeft[0] : null;
    tree.right = fRight[0] ? fRight[0] : null;
    // console.log(mLeft);
    // console.log(mRight);
    // console.log(fLeft);
    // console.log(fRight);
    createBinaryTree(fLeft, mLeft);
    createBinaryTree(fRight, mRight);
}

// createBinaryTree(first, middle);

// function firstAndMiddleTree(first, middle) {
//     if (first.length <= 1 || middle.length <= 1) return;
//     let tree = first[0];
//     let index = middle.findIndex((value) => value === tree);
//     let MleftTree = middle.slice(0, index);
//     let MrightTree = middle.slice(index + 1, middle.length);
//     let FleftTree = first.slice(1, index + 1);
//     let FrightTree = first.slice(index + 1, first.length);
//     if (FleftTree[0]) tree.left = FleftTree[0];
//     if (FrightTree[0]) tree.right = FrightTree[0];
//     firstAndMiddleTree(FleftTree, MleftTree);
//     firstAndMiddleTree(FrightTree, MrightTree);
//     return tree;
// }

function firstAndMiddleTree(first, middle) {
    if (first == null || middle == null || first.length == 0 || middle.length == 0 || first.length !== middle.length) return null;
    let root = first[0];
    let index = middle.findIndex((value) => value === root);
    let MleftTree = middle.slice(0, index);
    let MrightTree = middle.slice(index + 1, middle.length);
    let FleftTree = first.slice(1, index + 1);
    let FrightTree = first.slice(index + 1, first.length);

    root.left = firstAndMiddleTree(FleftTree, MleftTree);
    root.right = firstAndMiddleTree(FrightTree, MrightTree);

    return root;
}




console.log(JSON.stringify(firstAndMiddleTree(first, middle), null, "     "));

function middleAndLaterCreateTree(middle, later) {
    if (middle.length <= 1 || later.length <= 1) return;
    let tree = later[later.length - 1];
    let index = middle.findIndex((value) => value === tree);
    let MLeftTree = middle.slice(0, index);
    let MRightTree = middle.slice(index + 1, middle.length);
    let LLeftTree = later.slice(0, index);
    let LRightTree = later.slice(index, later.length - 1);
    if (LLeftTree.length > 0) tree.left = LLeftTree[LLeftTree.length - 1];
    if (LRightTree.length > 0) tree.right = LRightTree[LRightTree.length - 1];

    middleAndLaterCreateTree(MLeftTree, LLeftTree);
    middleAndLaterCreateTree(MRightTree, LRightTree);
    return tree;
}

// console.log(JSON.stringify(middleAndLaterCreateTree(middle, later), null, "     "));

// console.log(middle.indexOf(first[0]));


