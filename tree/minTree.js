let pointSet = [];
let max = 100;
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function Node(value) {
    this.value = value;
    this.neighbor = [];
}
//
// function getMinDisNode(pointSet, distance, nowPointSet) {
//     let fromNode = null;
//     let minDisNode = null;
//     let minDis = max;
//     for (let i = 0; i < nowPointSet.length; i++) {
//         let nowPointIndex = getIndex(nowPointSet[i].value);
//         for (let j = 0; j < distance[nowPointIndex].length; j++) {
//             let thisNode = pointSet[j];
//             if (nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < minDis) {
//                 fromNode = nowPointSet[i];
//                 minDisNode = thisNode;
//                 minDis = distance[nowPointIndex][j];
//             }
//         }
//     }
//     fromNode.neighbor.push(minDisNode);
//     minDisNode.neighbor.push(fromNode);
//     return minDisNode;
// }
//
// function getIndex(str) {
//     for (let i = 0; i < pointSet.length; i++) {
//         if (pointSet[i].value === str) return i;
//     }
//     return -1;
// }
//
// function hasPoint() {
//
// }
//
// function prim(pointSet, distance, start) {
//     let nowPointSet = [];
//     nowPointSet.push(start);
//
//     while(true) {
//         let minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
//         nowPointSet.push(minDisNode);
//         if (nowPointSet.length == pointSet.length) {
//             break;
//         }
//
//     }
//
//     return nowPointSet;
//
//
//     // let startIndex = pointSet.indexOf(start);
//     // let min = distance[startIndex].sort((a, b) => a - b)[1];
//     // startIndex1 = distance[startIndex].indexOf(min);
//     // distance[startIndex][startIndex1] = max;
//     // distance[startIndex1][startIndex] = max;
//     // node.neighbor.push(pointSet[startIndex1]);
//     // console.log(node);
// }
//
//
// let nowPointSet = prim(pointSet, distance, c);
// console.log(nowPointSet);

// console.log(distance);
// console.log(0 == "Max");
// console.log([0, 1, 2, MAX ,3, 2, 1].sort((a, b) => a - b));

function getMinPointSet(pointSet, distance, nowPointSet) {
    let fromPoint = null;
    let nowPoint = null;
    let minDis = max;
    for (let i = 0; i < nowPointSet.length; i++) {
        let nowPointSetIndex = pointSet.indexOf(nowPointSet[i]);
        for (let j = 0; j < distance[nowPointSetIndex].length; j++) {
            if (nowPointSet.indexOf(pointSet[j]) < 0 && distance[nowPointSetIndex][j] < minDis) {
                fromPoint = nowPointSet[i];
                nowPoint =  pointSet[j];
                minDis = distance[nowPointSetIndex][j];
            }
        }
    }
    fromPoint.neighbor.push(nowPoint);
    nowPoint.neighbor.push(fromPoint);
    return nowPoint;

}
// 连点算法 （普利姆算法）
function prim(pointSet, distance, start) {
    let nowPointSet = [];
    nowPointSet.push(start);

    while (true) {
        let minPointSet = getMinPointSet(pointSet, distance, nowPointSet);
        nowPointSet.push(minPointSet);
        if (nowPointSet.length === pointSet.length) {
            return nowPointSet;
        }
    }
}

// prim(pointSet, distance, c);
// console.log(pointSet);

// 连线法(克鲁斯卡尔算法)


function canLink(resultLink, tempBeginIn, tempEndIn) {
    let beginIn = null;
    let endIn = null;
    for (let i = 0; i < resultLink.length; i++) {
        if (resultLink[i].indexOf(tempBeginIn) >= 0) {
            beginIn = resultLink[i];
        }
        if (resultLink[i].indexOf(tempEndIn) >= 0) {
            endIn = resultLink[i];
        }
    }
    if (beginIn !== null && endIn !== null && beginIn === endIn) return false;
    return true;
}

function link(resultLink, tempBeginIn, tempEndIn) {
    let beginIn = null;
    let endIn = null;
    for (let i = 0; i < resultLink.length; i++) {
        if (resultLink[i].indexOf(tempBeginIn) >= 0) {
            beginIn = resultLink[i];
        }
        if (resultLink[i].indexOf(tempEndIn) >= 0) {
            endIn = resultLink[i];
        }
    }
    if (beginIn === null && endIn === null) {
        let arr = [];
        arr.push(tempBeginIn);
        arr.push(tempEndIn);
        resultLink.push(arr);
    } else if (beginIn !== null && endIn === null) {
        beginIn.push(tempEndIn);
    } else if (beginIn === null && endIn !== null) {
        endIn.push(tempBeginIn);
    } else if (beginIn !== null && endIn !== null && beginIn !== endIn) {
        resultLink[resultLink.indexOf(beginIn)] = beginIn.concat(endIn);
        resultLink.splice(resultLink.indexOf(endIn), 1);
    }

    tempBeginIn.neighbor.push(tempEndIn);
    tempEndIn.neighbor.push(tempBeginIn);

}


function kruskal(pointSet, distance) {
    let resultLink = [];
    while(true) {
        let begin = null;
        let end = null;
        let mindis = max;
        for (let i = 0; i < distance.length; i++) {
            for(let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                if (i !== j && distance[i][j] < mindis && canLink(resultLink, tempBegin, tempEnd)) {
                    begin = tempBegin;
                    end = tempEnd;
                    mindis = distance[i][j];
                }
            }

        }

        link(resultLink, begin, end);
        if (resultLink.length === 1 && resultLink[0].length === pointSet.length) break;
    }
    return pointSet;
}

console.log(kruskal(pointSet, distance));
// console.log(pointSet);

