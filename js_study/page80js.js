// function sleep(ms) {
//     const t1 = date.now() + ms;
//     while(date.now() < t1){}
// }





// for (let i = 60; i >= 0; i--) {
//     document.write(i + " ")
//     if(i == 0){
//         document.write("<p>발사</p>");
//     }
// }

// let sec = 60;

// while(sec >= 0){
//     document.write(sec + " ");
//     sec--;
// }
// document.write("<p>발사</p>");



// for (let i = 1; i <= 9; i++) {
//     document.write(i + " ");
    
//     for(let los = 2; los <= 9; los++){
//         list = los * i;
//         document.write(list + " ");
//         if(los % 9 == 0){
//             document.write("<br>");
//         }
//     }
// }

// for (let i = 1; i <= 9; i++) {
//     document.write(i + " ");
    
//     for(let los = 2; los <= 9; los++){
//         list = los * i;
//         document.write(list + " ");
//     }
//     document.write("<br>");
// }


let i = 1;
while(i <= 9){
    let los = 2;
    while(los <= 9){
        list = los * i;
        document.write(list + " ");
        los++;
    }
    document.write("<br>");
    i++;
}
