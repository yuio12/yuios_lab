




// let sum_val = 0;

// for(let num = 682; num >= 1; num--){
//     if(num % 2 == 0){
//         num /= 2 ;
//     }
//     else(num % 2 == 1){
//         (num * 3 + 1) / 2 ;
//     }
//     sum_val++;
//     if (num == 1){
//         return;
//     }

// }
// document.write(sum_val);



num = 682;
count = 0;

while(true){
    if(num % 2 == 0){
        num /= 2 ;
    }
    else{
        num = (num*3 + 1)/2;
    }
    count++;

    if(num == 1){
        break;
    }
}

document.write(count);











