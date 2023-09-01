




// let count = 0;


// for (let a = 1; a <= 100; a++){
//     for (let b = 1; b <= 100; b++) {
//         for (let c = 1; c <= 100; c++){
//             if((a * a) + (b * b) == c * c){
//                 count++;
//             }
//         }
//     }
// }
// document.write("총 갯수는" + count);




let sum_val = 0;

for (let hang = 1; hang <= 10; hang++) {
    document.write(hang);
    for (let yeol = 1; yeol <= 10; yeol++){
        les = hang + yeol -1;
        sum_val += les;
        document.write(les);
    }
    
    document.write("<br>");
}
document.write("합은" + sum_val);


















