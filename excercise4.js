let arr = [
    {
        studentName: "Tan",
        score: 7,
        priority: 2
    },
    {
        studentName: "Son",
        score: 5,
        priority: 1
    },
    {
        studentName: "Truong",
        score: 8,
        priority: 2
    },
    {
        studentName: "Luong",
        score: 7,
        priority: 2
    },
    {
        studentName: "Ha",
        score: 6,
        priority: 3
    },
    {
        studentName: "Dung",
        score: 9,
        priority: 2
    },
    {
        studentName: "Minh",
        score: 7,
        priority: 1
    },
    {
        studentName: "Dieu",
        score: 8,
        priority: 3
    }
]

//1. Tìm sinh viên có điểm cao nhất, ưu tiên theo priority
let maxScore = 0;
let studentTop1 = [];
let studentNo1 = [];
let maxPriority = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].score > maxScore) {
        maxScore = arr[i].score;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i].score === maxScore) {
        studentTop1.push(arr[i]);
    }
    for (let j = 0; j < studentTop1.length; j++) {
        if (studentTop1[j].priority > maxPriority) {
            maxPriority = studentTop1[j].priority;
        }
    }
}
for (let i = 0; i < studentTop1.length; i++) {
    if (studentTop1[i].priority === maxPriority) {
        studentNo1.push(studentTop1[i]);
    }
}
//2. Tìm sinh viên có điểm cao thứ 2 và ưu tiên theo priority
let maxScore2 = 0;
let studentTop2 = [];
let studentNo2 = [];
let maxPriority2 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].score > maxScore2 && arr[i].score < maxScore) {
        maxScore2 = arr[i].score;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i].score === maxScore2) {
        studentTop2.push(arr[i]);
    }
    for (let j = 0; j < studentTop2.length; j++) {
        if (studentTop2[j].priority > maxPriority2) {
            maxPriority2 = studentTop2[j].priority;
        }
    }
}
for (let i = 0; i < studentTop2.length; i++) {
    if (studentTop2[i].priority === maxPriority2) {
        studentNo2.push(studentTop2[i]);
    }
}

console.log("First prize: " + studentNo1[0].studentName + " - Score: " + studentNo1[0].score + ", Second prize: " + studentNo2[0].studentName + " - Score: " + studentNo2[0].score);

 
 	
// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[' và ']', xác định xem chuỗi đầu vào có hợp lệ hay không.
// Chuỗi đầu vào hợp lệ nếu:
// - Dấu mở phải được đóng bởi cùng loại dấu mở.
// - Dấu mở phải được đóng theo thứ tự chính xác.
// - Mỗi dấu đóng đều có một dấu mở tương ứng cùng loại.

function checkBracket(s){
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            stack.push(s[i]);
        }else{
            if(stack.length == 0){
                return false;
            }else{
                let top = stack.pop();
                if(s[i] == ")" && top != "("){
                    return false;
                }else if(s[i] == "]" && top != "["){
                    return false;
                }else if(s[i] == "}" && top != "{"){
                    return false;
                }
            }
        }
    }
    if(stack.length > 0){
        return false;
    }
    return true;
}
console.log(checkBracket("(())[]{}"));