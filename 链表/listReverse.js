function nodeList(value) {
    return {
        value: value,
        next: null
    }
}

let node1 = nodeList(1);
let node2 = nodeList(2);
let node3 = nodeList(3);
let node4 = nodeList(4);
let node5 = nodeList(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseNodelist(root) {
    // if (root.next = null)  return;
    // let prev = root;
    // root = root.next;
    //
    if (root.next.next === null) {
        root.next.next = root;
        root.next = null;
        return root.next;
    } else {
        result = reverseNodelist(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }

    // if (root.next && root.next.next) {
    //     nizhiNodelist(root.next.next);
    //     // root.next.next = root;
    //     // root.next = null;
    // }

    // if (root.next !== null) return nizhiNodelist(root.next)
    // else return root;

}

console.log(reverseNodelist(node1));
console.log(JSON.stringify(node1, null, "    "));
console.log(JSON.stringify(node5, null, "    "));


