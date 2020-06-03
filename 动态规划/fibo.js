
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55......
// 给出第n位，值是几？

// function fibo(n) {
//     if (n <= 0) return -1;
//     let result = [];
//     if (n == 1) result[0] = 0;
//     else if (n == 2) result[1] = 1;
//     else result = [0, 1];
//     for (let i = 2; i < n; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }
//     return result[result.length - 1];
// }

// function fibo(n) {
//     if (n <= 0) return -1;
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     let a = 0;
//     let b = 1;
//     let c;
//     for (let i = 2; i < n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }

function fibo(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(32));
