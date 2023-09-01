
dan = prompt("구구단 몇 단을 출력할까요?");
document.write("<h1>" + dan + "단</h1>");

for (let gop = 1; gop < 10; gop++) {
    // res = 2 * gop;
    res = dan * gop;
    if(gop % 2 == 0){
        document.write("<p class = 'my_strong'>" + dan + " * " + gop + " = " + res + "</p>");
    }
    else {
        document.write("<p>" + dan + " * " + gop + " = " + res + "</p>");
    }
}






