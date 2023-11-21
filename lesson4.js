// let a = "5";
// if (a == 5) {
//     console.log("Equal 5");
// } else if (a == 6) {
//     console.log("Equal 6");
// } 
// else {
//     console.log("Not Equal");
// }

// function getDayOfWeek(dayIndex) {
//     if (dayIndex == 0) {
//         return "Monday";
//     }
//     else if (dayIndex == 1) {
//         return "Tuesday";
//     }
//     else if (dayIndex == 2) {
//         return "Wednesday";
//     }
//     else if (dayIndex == 3) {
//         return "Thursday";
//     }
//     else if (dayIndex == 4) {
//         return "Friday";
//     }
//     else if (dayIndex == 5) {
//         return "Saturday";
//     }
//     else if (dayIndex == 6) {
//         return "Sunday";
//     }
//     else {
//         return "Not a day of week";
//     }
// }

// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));

// false
// undefined
// null
// 0
// NaN
// the empty string ("")

// if (!"") {
//     console.log("...");
// }

// if (Infinity) {
//     console.log("...");
// }

// function add(a, b) {
//     if (a != undefined && b != undefined && a != null && b != null && typeof a == 'number' && typeof b == 'number') {
//         return a + b;
//     }
//     else {
//         return null;
//     }
// }

// console.log(add(undefined, 4)); 



// let a = 0;
// function learnSwitch(a){
//     switch(a){
//         case 0:
//             console.log("0 o day ne !! ");
//             break;
//         case "1":
//             console.log("1 o day ne !! ");     
//             break;
//         case 2, 3, 4, 5, 6, 7, 8, 9, 10:
//             console.log("2, 3, 4, 5, 6, 7, 8, 9, 10 o day ne !! ");
//             break;
//         default:
//             console.log("Khong co gi ca !! ");
//             break;
//     }
// }

// learnSwitch(10);

// function getDayOfWeek(dayIndex) {
//     switch (dayIndex) {
//         case 0:
//             return "Monday";
//         case 1:
//             return "Tuesday";
//         case 2:
//             return "Wednesday";
//         case 3:
//             return "Thursday";
//         case 4:
//             return "Friday";
//         case 5:
//             return "Saturday";
//         case 6:
//             return "Sunday";
//         default:
//             return "Not a day of week";   
//     }
// }

// function add(a, b) {
//     if ( typeof a == 'number' && typeof b == 'number') {
//         throw new Error("Invalid parameters");
//     }
// }


// function getMonthNane(mo) {
//     mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//     const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//         return months[mo];
//     } else {
//         throw new Error("InvalidMonthNo"); // throw keyword is used here

//     }
// }
// try {
//     // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//     monthName = "unknown";
//     console.log("A");
//     // logMyErrors(e); // pass exception object to error handler (i.e. your own function)
// }

function divide(a, b) {
    if (b == 0) {
        throw new Error("Divide by 0");
    }
    return a / b;
}
try {
    const result = divide(5, 0);
    console.log(result);
} catch (error) {
    console.log(error);
} finally {
    console.log("Done");
}

