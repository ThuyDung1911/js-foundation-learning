// let arr = ["A","B","C"];
// console.log(arr);

// let arrNums = [1,2,3];
// console.log(arrNums);
// console.log(arrNums[0]);
// console.log(arrNums[arrNums.length-1]);

// arrNums[5] = 10;
// console.log(arrNums);
// console.log(arrNums[4]);
// arrNums[0] = 5;
// console.log(arrNums);

// const arr = new Array(1,2,3);
// console.log(arr);

// const arr = new Array("A","B","C");
// console.log(arr);

// const arr = new Array(1);
// console.log(arr.length);
// console.log(arr[0]);

// const arr = [1,"abc",{
//     name: "Nguyen Van A",
//     age: 20
// }, [1,2,3]];
// console.log(arr);
// console.log(arr[2].name);

// const arr = ["A","B","C"];
// arr[arr.length] = "D";
// console.log(arr);
// arr.push("E");
// console.log(arr);

// arr.unshift("Z");
// console.log(arr);

// console.log(arr.pop());

// const arr = ["A", "B", "C"];
// arr.splice(1,2, "D", "F");
// console.log(arr);
// arr.splice(1,2);
// console. log(arr);

// const arr = ["A", "B", 'C", "D", "E", I.F"];
// console.log(arr.slice(2,5));
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.join(""));

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.join());

// const arr = ["A", "B", "C", "D", "f", "e"];
// delete arr[1];
// console.log(arr);
// console.log(arr.sort().reverse());

// const arr = [1,2,13,14,5,6,7,8,9,10];
// console.log(arr.sort())
// console.log(arr.sort(function(a,b){return a-b}));

// const students = [
//     {
//         studentName: "Nguyen Van A",
//         age: 20
//     },
//     {
//         studentName: "Nguyen Van B",
//         age: 21
//     },
//     {
//         studentName: "Nguyen Van C",
//         age: 22
//     },
//     {
//         studentName: "Nguyen Van D",
//         age: 23
//     },
//     {
//         studentName: "Nguyen Van E",
//         age: 24
//     },
// ];
// //sort student by age
// students.sort(function(a,b){
//     return a.age - b.age;
// });
// console.log(students[0]);
// //sort student by name
// students.sort(function(a,b){
//     if(a.studentName > b.studentName){
//         return 1;
//     }
//     if(a.studentName < b.studentName){
//         return -1;
//     }
//     return 0;
// });
// console.log(students[0]);

// console.log(new Date());
// console.log(new Date(). toTimeString());
// console.log(new Date(). toUTCString());
// console.log(new Date("10-11-2023"));
// console.log(new Date("10/11/2023 20:00:00"));

// console.log(new Date(-1000000000))
// console.log(new Date(24*60*60*1000))
// new Date(year,month)
// new Date(year,month, day)
// new Date(year, month, day, hours)
// new Date(year,month, day, hours, minutes)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, seconds,ms)

// function add(a,b){
//     return a+b;
// }
// add(5,6);

// let a = add(5,6);
// console.log(a);

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(5,6));

// const add = (a,b) => {
//     return a+b;
// }
// add = 1;
// console.log(add(5,6));

// console.log(add(5,6));
// function add(a,b) {
//     return a+b;
// }

// function doSomething(a){
//     function doSomethingElse(b){
//         return a+b;
//     }
// }
// console.log(doSomething(5));
// console.log(doSomething(5)(6));
// function doSomething(a){
//     function doSomethingElse(a){
//         return a+a;
//     }
//     return doSomethingElse(a);
// }
// console.log(doSomething(6));

// function doSomething(a){
//     function doSomethingElse(b){
//         return a+b;
//     }
//     return doSomethingElse(a);
// }
// console.log(doSomething(6),(5));

// const dodo = (a) => {
//     return a*a;
// }
// const add = (a,b) => {
//     return a+b(a-1);
// }
// console.log(add(2,dodo));

// function dodo (a){
//     return a*a;
// }
// function add(a,b){
//     return a+b(a-1);
// }
// console.log(add(2,dodo));

// function add(a, b, ...more){
//     console.log(more);
    
// }

// add(1,0,6,8,9);

function dodo(){
    console.log(arguments);
}
dodo(1,2,3,4,5,6,7,8,9,10);