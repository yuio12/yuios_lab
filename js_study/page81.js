



// for (let i = 1; i <= 7; i++) {
//     for (let num = 1; num <= i; num++) {
//         document.write(num);
//     }
//     for(let star = 7; star >= i; star--){
//         document.write("*");
//     }
//     document.write("<br>");
// }


for(let i = 1; i <= 7; i++){
    for(let num = 1; num <= 7; num++){
        if(i >= num){
            document.write(num);
        }
        else{
            document.write("*");
        }
    }
    document.write("<br>");
}
















