// IMTIHON

// 1-masala 

// function reverseArray(str) {
//     return str.reverse().split()
// }
// console.log(reverseArray('12332'));

// 2-masala

//  == - bu qiymatni tekshiradi, === - bu ham qiymatni ham qiymatning tipini tekshiradi.

// 3-masala

// function createArray(num) {
//     let array = [];
//     for (let i = 1; i <= num; i++) {
//         array.push(i)
//     }
//     return array;
// }
// console.log(createArray(8));

// 4-masala

// function juftToqSonlar(arr) {
//     let juft = []
//     let toq = []
//     let sum1 = 0;
//     let sum2 = 0;
//     let result = [];
//     for (const iterator of arr) {
//         if (iterator % 2 == 0) {
//             sum1 += iterator;
//         } else {
//             sum2 += iterator;
//         }
//     }
//     return result.push(sum1).push(sum2)
// }
// console.log(juftToqSonlar([1, 2, 3]));


// 5-masala 
// men replace!All! dan foydalandim!!!
// function findSymbol(str) {
//     return str.replaceAll('!', '')
// }
// console.log(findSymbol('!salom!'));

// 6-masala

// function sumOfTwoArrays(arr1, arr2) {
//     let sum = 0;
//     let result = arr1.concat(arr2)
//     for (const iterator of result) {
//         sum += iterator;
//     }
//     return sum;
// }
// console.log(sumOfTwoArrays([1, 2], [3, 4, 5]));

// 7-masala

// function delEl(str) {
//     return str.shift().pop()
// }
// console.log(delEl('salom'));

// 8-masala

function reverse(arr) {
    return arr.reverse()
}
console.log(reverse('salom'));

// 10-masala  

// function smallEl(arr) {
//     let min = arr[0];
    
//     for (let i = 0; i < arr.length; i++) {
        
//         if (i > min) {
//             min = i;
//         }
//     }
//     let result = min**4;
//     return result;
// }

// console.log(smallEl([0, 1, 2]));