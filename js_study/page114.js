// 셋(Set) : 수학 집합
// 배열 vs 셋 : 중복 여부
let array = [1, 2, 3, 2, 1];
let set1 = new Set(array);
console.log(array);
console.log(set1);

set1.add(10);
console.log(set1);
console.log(set1.has(10));
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1);

let stu1 = ["html", "css"];
let stu2 = ["html", "js"];
let stu3 = ["js", "react"];
let classes = [...stu1, ...stu2, ...stu3];
console.log(classes);
let classes_set = new Set(classes);
console.log(classes_set);


