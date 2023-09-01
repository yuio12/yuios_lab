






let sum_100 = 0;

for(let num = 1; num < 101; num++){
    let num_1 = parseInt( (num/1)%10); // 1 의 자리
    let num_10 = parseInt( (num/10)%10); // 10의 자리
    let num_100 = parseInt( (num/100)%10); // 100의 자리
    let sum_3s = num_100 + num_10 + num_1;
    sum_100 += sum_3s;
}
document.write(sum_100);

// a = 123
// a_str = a.toString()
// a_str += 1
// console.log(a_str);

// a_int = parseInt(a_str)
// a_int += 1
// console.log(a_int);

// b_float = parseFloat("123.4567");
// b_float *= 10;
// console.log(b_float);


























































































