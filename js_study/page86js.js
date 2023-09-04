seatnum = 1;
document.write("<table>");

for(let rownum = 1; rownum <= 2; rownum++){
    document.write("<tr>");
    for(let colnum = 1; colnum<= 5; colnum++){
        document.write("<td id='seat" + seatnum +"'>");
        document.write("좌석" + seatnum);
        document.write("</td>");
        seatnum++;
    }
    document.write("</tr>");
}
document.write("</table");

function reservation(){
    let seatresnum = prompt("예약하고 싶은 좌석 번호?");
    document.getElementById("seat" + seatresnum).innerHTML = "예약완료";
}











