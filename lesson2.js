// let isMale = true;
// let a = isMale ? "Male": "Female";
// console.log(a);

// a = undefined
// b = a??111

// console.log(b)

// let a = 3.14
// console.log(typeof a)

// let a = 0.2
// let b = 0.1
// console.log(a+b)

// console.log('20'*'10')

// let b = 10
// console.log(b/"abc")
// console.log(b/0)
// console.log(typeof NaN)

// let a = new Number(10);
// let b = 10;

// console.log(a==b);
// console.log(a===b);

// let a = new Number(10);
// let b = new Number(10);

// console.log(a==b);
// console.log(a===b);

// console.log(Number.isNaN("abc"))
// console.log(Number.parseInt(NaN))
// console.log(Number.MAX_VALUE)

// console.log((12.4).toFixed(10))
// console.log((12.46).toFixed(1))

// console.log("My name is \"Dung\"")
// console.log("My name is 'Dung'")

// console.log("abc" == "abcd")
// console.log("abc".length)
// console.log("abcdef".substring(1,3))
// console.log("abcdef".toUpperCase())
// console.log("abcdefabc".replace("abc","xyz"))
// console.log("abcdefabc".replaceAll("abc","xyz"))

// console.log("ABCDA".replace(/A/i,"a"))
// console.log("ABCDA".replace(/A/g,"a"))
// console.log("ABCDAa".replace(/A/ig,"E"))

// console.log("Toi 10 la 20 Toi".replace(/t|o/i, "A"));

// console.log("Toi 10 la 20 Toi". replace(/t|o|1/i, "A"));

// console.log("Toi 10 la 20 Toi".replace(/t|o|1/ig, "A"));

// console.log("             abcdef".trim())

// let student = {
//     "name": "Dung",
//     "age": 10,
//     "gender": "female",
//     "passed":false,
//     "1": "abc",
//     getNameAndAddress: function(){
//         return this.name + " " + this.address;
//     }
// }
// console.log(student);
// student.address = "Ha Noi";
// console.log(student);
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["1"]);

// console.log(Object.keys(student));

// console.log(student.getNameAndAddress());

// console.log(delete student.age);

// console.log( student);

const obj = {a:3, b:5};
console.log(obj);
obj.a = 2;
delete obj.b;
console.log(obj);

console.log(JSON.stringify(obj));

a = JSON.parse('{"a":3, "b":5}');
console.log(a);

