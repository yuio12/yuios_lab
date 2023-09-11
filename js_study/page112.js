// 배열 관련 함수 map, filter, reduce

let numbers = [1, 2, 3, 4];
let doubles = numbers.map(number => number*2)
console.log(doubles);

let temperatures = [23, 24, 25, 26, 29, 27, 23, 20];
let hightemp = temperatures.filter(temp => temp >= 25);
console.log(hightemp);

let hightemp2 = temperatures.filter(
    (temp, i) => {
        if(temp >= 25){
            console.log(`${i}: ${temp}`);
        }
    }
)
console.log(hightemp2);

let num1to5 = [1, 2, 3, 4, 5];
let result = num1to5.reduce(
    (total, now) => total + now, 0);

console.log(result);

let result2 = num1to5.reduce(
    (total, now) => total * now, 1);

console.log(result2);
