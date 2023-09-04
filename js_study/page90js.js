time1 = new Date("2023-08-16") // 일상식 표현
time2 = new Date("2023-09-04")

toTime1 = time1.getTime()// 1970년 이후로 절대시간(ms)
toTime2 = time2.getTime()// 1970년 이후로 절대시간(ms)
timeDiffer = toTime2 - toTime1;
console.log("ms : " + timeDiffer);

console.log("s : " + timeDiffer/1000);

console.log("h : " + timeDiffer/(1000*60*60));

console.log("h : " + timeDiffer/(1000*60*60*24));



console.log(Math.round(3.5));//반올림
console.log(Math.ceil(3.5));//올림
console.log(Math.floor(3.5));//버림

console.log(Math.min[1, 2, 3, 4]);
console.log(Math.max[1, 2, 3, 4]);

console.log(Math.random());

console.log("주사위 값 : " + Math.floor(Math.random()*5+1)); // 1-6


















