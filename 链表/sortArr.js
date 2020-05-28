let arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 方法一:
// function getMin(arr) {
//     if (arr == null || arr.length == 0) return;
//     let index = -1;
//     for (let i = 0; i < arr.length; i ++) {
//         if (arr[i] !== null && arr[i] < arr[index] || arr[i] !== null && index === -1) index = i;
//     }
//     let temp = arr[index];
//     arr[index] = null;
//     return temp;
// }
//
// function sort(arr) {
//     let newArr = new Array(arr.length);
//     for (let i = 0; i < newArr.length; i++) {
//         newArr[i] = getMin(arr);
//         // newArr[i] = arr[getMin(arr)];
//         // arr[getMin(arr)] = null;
//     }
//     return newArr;
// }
// console.log(sort(arr));

// 方法二(冒泡排序):

function compare(a, b) {
    if (a > b) return true;
    else return false;
}

function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sortMaopo(arr) {
    if (arr === null || arr.length === 0) return [];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
    return arr;
}



// let temp = sortMaopo(arr);
// console.log(temp);

// 选择排序：
function sortSelect (arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length ; j++) {
    //         if (compare(arr[i], arr[j])) {
    //             exchange(arr, i, j);
    //         }
    //     }
    // }
    // return arr;

    for (let i = 0; i < arr.length; i++) {
        let MaxIndex = 0;
        for (let j = 1; j < arr.length - i ; j++) {
            if (!compare(arr[MaxIndex], arr[j])) {
                MaxIndex = j;
            }
        }
        exchange(arr, MaxIndex, arr.length - 1 - i);
    }
    return arr;
}


//
// let temp = sortSelect(arr);
// console.log(temp);




// 快速排序

// function quickSort(arr) {
//     if (arr === null || arr.length === 0) return [];
//     let leader = arr[0];
//     let left = [];
//     let right = [];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < leader) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     left = quickSort(left);
//     right = quickSort(right);
//     left.push(leader);
//     return left.concat(right);
// }
//
// console.log(quickSort(arr));

// 标准快速排序
// function quickSort2(arr, start, end) {
//     let leader = start;
//     let left = start + 1;
//     let right = end;
//     if (left >= right) return;
//
//     do {
//         do left++; while(arr[left] < arr[leader] && left < right)
//         do if (left < right) right--; while(arr[right] > arr[leader] && left < right)
//         if (left < right) exchange(arr, left, right);
//     } while (left < right)
//
//     let swipPoint = (arr[left] < arr[leader]) ? left : --left;
//     exchange(arr, leader, swipPoint);
//
//     quickSort2(arr,  start, left);
//     quickSort2(arr,  left + 1 , end);
// }
//
// function quickSort(arr) {
//     quickSort2(arr, 0, arr.length - 1);
//     return arr;
// }

function quickSort(arr, begin, end) {
    if (begin + 1 >= end) return;


    let left = begin;
    let right = end;

    do {
        do left++; while(left < right && arr[left] < arr[begin])
        do right--; while(left < right && arr[right] > arr[begin])
        if (left < right) exchange(arr, left, right);
    } while (left < right)

    let swapPoint = left === right ? --right : right;
    exchange(arr, begin, swapPoint);

    quickSort(arr, begin, swapPoint);
    quickSort(arr, swapPoint + 1, end);
}

quickSort(arr, 0, arr.length);

// let temp = quickSort(arr);
console.log(arr);