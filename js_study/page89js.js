
// let changebtn = document.querySelector('#change');
// changebtn.onclick = chang_color;

// function chang_color(){
//     document.querySelector("p").style.color = 'red';
// }



var now = new Date();
document.write("현재시간" + now.toLocaleDateString());

var numbers = new Array();
var numbers2 = new Array(4);
var numbers3 = [1, 2, 3, 4,];
var numbers4 = Array(1, 2, 3, 4, 5, 6);
console.log(numbers4.length);
console.log(numbers2);

let num = ["일", "이", "삼", "사", "오"];
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}

// concat : 배열 + 배열 = 배열
a = [1, 2, 3];
b = [4, 5, 6];
console.log(a+b);
c = a.concat(b);
console.log(c);


// join : 배열요소 -> 문자열 하나
a = ['010','1234','5678'];
let a_join2 = a.join('-')
console.log(a_join2);
a = ['010','1234','5678'];
let a_join = a.join()
console.log(a_join);

// 배열 추가 push : 뒤에 추가
n = [1, 2, 3];
n.push(4, 5);
console.log(n);

n2 = n.push(6, 7);
console.log(n2);
console.log(n);

// 배열추가 unshift : 앞에 추가
n3 = a.unshift(0);
console.log(n3 + "개, a:" + n);

// 배열 꺼내기 pop : 뒤에 있는 배열이 나온다
chars = ['a', 'b', 'c', 'd'];
popped = chars.pop();
console.log(popped + "가 나오고" + chars + "가 남았다");

// 배열 꺼내기 shift : 앞에 있는 배열이 나온다
chars = ['a', 'b', 'c', 'd'];
popped = chars.shift();
console.log(popped + "가 나오고" + chars + "가 남았다");

// splice 임의 조작
// case1 : 인수 1개일때
numbers = [1, 2, 3, 4, 5];
x = numbers.splice(2) // 2번 index 이후로 전부
console.log("얻은 것 : " + x + "남은것 : " + numbers);
// case2 : 인수 2개일때
numbers2 = [1, 2, 3, 4, 5];
x2 = numbers2.splice(2, 1) // 2번 index 이후로 1개
console.log("얻은 것 : " + x2 + "남은것 : " + numbers2);
// case3 : 인수 3개일때
numbers3 = [1, 2, 3, 4, 5];
x3 = numbers3.splice(2, 1, 30) // 2번 index 이후로 1개 추출 후 그 자리에 30추가
console.log("얻은 것 : " + x3 + "남은것 : " + numbers3);



// slice : 원본 유지
numbers4 = [1, 2, 3, 4, 5];
x4 = numbers4.slice(2) // 2번 index 이후로 전부
console.log("얻은 것 : " + x4 + "남은것 : " + numbers4);
// 인수 2개 일때
numbers5 = [1, 2, 3, 4, 5];
x5 = numbers5.slice(2, 4) // 2번 index 이후로 4번전 까지
console.log("얻은 것 : " + x5 + "남은것 : " + numbers5);




























