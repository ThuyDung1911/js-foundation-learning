// while(true){
//     console.log("Vòng lặp vô hạn");
// }
// let a = 5;                      
// while (a < 10 && a > 0) {                
//     console.log(a);
//     a++;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sumOfArray(arr){
//     if(arr instanceof Array){
//         let result = 0;
//         let i = 0;
//         while(i < arr.length){
//             result += arr[i];
//             i++;
//         }
//         return result;
//     }
//     return null;
// }

// console.log(sumOfArray(arr));

// Viết function nhận vào 1 array và trả về 1 array bao gồm các số chẵn

// function getEvenNumber(arr){
//     if(arr instanceof Array && arr.length > 0){
//         let result = [];
//         let i = 0;
//         while(i < arr.length){
//             if(arr[i] % 2 == 0){
//                 result.push(arr[i]);
//             }
//             i++;
//         }
//         return result;
//     }
//     return null;
// }

// console.log(getEvenNumber(arr));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sumOfArray(arr){
//     if(arr instanceof Array){
//         let result = 0;
//         let i = 0;
//         do{
//             result += arr[i];
//             i++;
//         }
//         while(i < arr.length);
//         return result;
//     }
//     return null;
// }
// console.log(sumOfArray(arr));

// do{
//     console.log("Hi");
// }while(false);

// while(false){
//     console.log("Hi");
// }

// function findNumber(n) {
//     do{
//         if(n % 2 == 0){
//             console.log(n);
//         }
//         n--;
//     }while(n > 0);
// }

// console.log(findNumber(10));

// Viết function nhận vào số N, Tính tổng các số bé hơn N và chia hết cho 2 và chia hết cho 3

// function sumOfNumber(n){
//     let result = 0;
//     while(n > 0){
//         if(n % 2 == 0 && n % 3 == 0){
//             result += n;
//         }
//         n--;
//     }
//     return result;
// }

// function sumOfNumber(n){
//     let result = 0;
//     do{
//         if(n % 2 == 0 && n % 3 == 0){
//             result += n;
//         }
//         n--;
//     }while(n > 0);
//     return result;
// }
// console.log(sumOfNumber(20));

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// function sumOfNumber(n){
//     let result = 0;
//     for(let i = 1; i < n; i++){
//         if(i % 2 == 0 && i % 3 == 0){
//             result += i;
//         }
//     }
//     return result;
// }
// console.log(sumOfNumber(20));

// function tinhTong(N) {
//     try {
//         if (N >= 0 && Number.isInteger(N)) {
//             let tong = 0;
//             for (let i = 0; i < N; i++) {
//                 if (i % 2 === 0 && i % 3 === 0) {
//                     tong += i;
//                 }
//             }
//             return tong;
//         } else {
//             throw new Error("Error");
//         }
//     } catch (error) {
//         console.error(error.message);
//         return undefined;
//     }
// }

// console.log(tinhTong(20));

// Viết function tìm số đầu tiên chia hết cho 5 với input là 1 array gồm các số nguyên

// let arr = [1, 55, 3, 4, 5, 6, 7, 8, 9, 10];
// function findNumber(arr){
//     if(arr instanceof Array && arr.length > 0){
//         let result = null;
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 5 == 0){
//                 result = arr[i];
//                 break;
//             }
//         }
//         return result;
//     }
//     return null;
// }

// console.log(findNumber(arr));

// firstFor: for (let i = 0; i < 5; i++) {
//     console.log("i: " + i);
//     secondFor: for (let j = 0; j < 7; j++) {
//         console.log("j: " + j);
//         if (j == 6) {
//             break firstFor;
//         }
//     }
// }
// firstFor: for (let i = 0; i < 5; i++) {
//     console.log("i: " + i);
//     secondFor: for (let j = 0; j < 7; j++) {
//         console.log("j: " + j);
//         if (j == 3) {
//             continue firstFor;
//         }
//     }
// }

// let student = {
//     name: "Nguyen Van A",
//     age: 20,
//     address: "Ha Noi"
// }

// for (let key in student) {
//     console.log(key + ": " + student[key]);
//     console.log(`${key}: ${student[key]}`);
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.x = 100;
// for (let k in arr) {
//     console.log(k);
//     console.log(arr[k]);
// }
for (let k of arr) {
    console.log(k);
}








