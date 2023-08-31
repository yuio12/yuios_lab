



// let point = prompt("총점은?");
// if (point >= 90){
//     grade = "A";
// }
// else if (point < 70 && point <= 89) {
//     grade = "B";
// }
// else if (point < 60 && point <= 70) {
//     grade = "C";
// }
// else if (point < 50 && point <= 60) {
//     grade = "D";
// }
// else{
//     grade = "F";
// }
// document.write("<p>학점은" + grade + "입니다.</p>")
let point = prompt("총점은?");
if (point >= 0 && point <=100) {
     if (point < 80 && point >= 70) {
        grade = "C";
    }
    else if (point < 90 && point >= 80) {
        grade = "B";
    }
    else if (point >= 90){
        grade = "A";
    }
    else if (point >= 60) {
        grade = "D";
    }
    else{
        grade = "F";
    }0
    document.write("<p>학점은" + grade + "입니다.</p>")
}
else {
    document.write("<p>점수가 잘 못 입력 되었나봐요.</p>")
};















































