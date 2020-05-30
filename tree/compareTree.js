function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let a1 = new Node('a');
let b1 = new Node('b');
let c1 = new Node('c');
let d1 = new Node('d');
let e1 = new Node('e');
let f1 = new Node('f');
let g1 = new Node('g');
a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

let a2 = new Node('a');
let b2 = new Node('b');
let c2 = new Node('c');
let d2 = new Node('d');
let e2 = new Node('e');
let f2 = new Node('f');
let g2 = new Node('g');

a2.left = c2;
a2.right = b2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;


// 对比二叉树是否相同，左右子树不能互换
function compare(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
    if (root1.value !== root2.value) {
        return false;
    }

    let left = compare(root1.left, root2.left);
    let right = compare(root1.right, root2.right);
    return left && right;

}



function compareTree(root1, root2) {
    if (root1 === root2) return true;
    if (root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
    if (root1.value !== root2.value) return false;
    let leftBool = compareTree(root1.left, root2.left);
    let rightBool = compareTree(root1.right, root2.right);
    return leftBool && rightBool;
}

// 判断两个二叉树是否相同，拓扑结构下，即左右子树可以互换位置
function compareLeftOrRightTree(root1, root2) {

    if (root1 === root2) return true;
    if (root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
    if (root1.value !== root2.value) return false;

    // 错误的写法,这种写法很片面
    // let leftBool = compareLeftOrRightTree(root1.left, root2.left) || compareLeftOrRightTree(root1.left, root2.right);
    // let rightBool = compareLeftOrRightTree(root1.right, root2.right) || compareLeftOrRightTree(root1.right, root2.left);
    // return leftBool && rightBool;

    return compareLeftOrRightTree(root1.left, root2.left) && compareLeftOrRightTree(root1.right, root2.right)
    || compareLeftOrRightTree(root1.left, root2.right) && compareLeftOrRightTree(root1.right, root2.left);

}

console.log(compareLeftOrRightTree(a1, a2));
// console.log(compareTree(a1, a2));


// console.log(compare(a1, a2));

// console.log(a1 == a2);
