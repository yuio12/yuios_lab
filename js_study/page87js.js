// function addnumber(a, b){
//     let sum = a + b; // 지역변수 함수 안에서만 쓰임
//     sum2 = a - b; // 전역변수
//     console.log(sum);
// }

// addnumber(1, 2);

// addnumber(3, 2);


// 호이스팅
// var x = 10;
// function test_hoist(){
//     var z = 5;
//     console.log("z: " + z);
//     console.log("x: " + x);
//     //var y;
//     console.log("y: " + y);
//     //y = 20;
//     var y = 20;
// }
// test_hoist()


// function calcsum(n){ // n : 매개변수
//     let sumval = 0;
//     for(let i = 1; i <= n; i++){
//         sumval += i;
//     }
//     console.log("sumval1" + sumval);
// }
// calcsum(10); // 10 : 인수 
// // console.log("sumval2" + sumval);

function calcsum2(n){ // n : 매개변수
    let sumval = 0;
    for(let i = 1; i <= n; i++){
        sumval += i;
    }
    return sumval;
}
let retval = calcsum2(10); // 10 : 인수
 
console.log("sumval1" + retval);

function insertinfo(name, major, grade, num){

}
//insertinfo로 IT학과 신입생들 인적사항 등록
function insertinfo(name, major="IT", grade=1, num){

}


function multiple(a, b = 5, c = 10) {
    return a + b + c;
}
console.log(multiple(1));


// 익명함수
let sum_func = function (a, b) {
    return a + b;
}

console.log(sum_func(1, 2));

//즉시실행 함수
(function(a, b){
    sum = a + b;
}(1, 2))
console.log(sum);

//화살표 함수
let func = (a, b) => {
    return a + b;
}


//매개변수가 없는 함수
const hi = function(){
    return "hi?";
}

// 매개변수가 없는 화살표 함수
const hi1 = () => {return "hi"};
const hi2 = () => "hi";

// 매개변수가 1개인 함수
const hi3 = function(user){
    console.log("hi" + user);
}

// 매개변수가 1개인 화살표 함수
const hi4 = user => {console.log("hi" + user)};

// 매개변수가 2개인 함수
const hi5 = function(a, b){return a + b;}
const hi6 = (a, b) => {return a + b;}














