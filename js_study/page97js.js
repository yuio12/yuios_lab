window.onload = function(){
    document.getElementById("cup1").onclick = (Event) =>{
        // document.getElementById("disp1").innerHTML = 
        // "<p>유형 : " + Event.type + ", x좌표 : " + Event.pageX + ", y좌표 : " + Event.pageY + "</p>";
        let x = Event.pageX;
        let y = Event.pageY;

        if(80 < x && x < 210 && y > 100 && y < 290){
            document.getElementById("disp1").innerHTML = "<p>다니엘</p>"
        }
        else if(x > 240 && x < 380 && y > 155 && y < 331) {
            document.getElementById("disp1").innerHTML = "<p>혜린</p>"
        }
        else if(x > 390 && x < 520 && y > 110 && y < 308) {
            document.getElementById("disp1").innerHTML = "<p>하니</p>"
        }
        else if(x > 530 && x < 700 && y > 70 && y < 270) {
            document.getElementById("disp1").innerHTML = "<p>혜인</p>"
        }
        else if(x > 706 && x < 870 && y > 82 && y < 302) {
            document.getElementById("disp1").innerHTML = "<p>민지</p>"
        }
        else {
            document.getElementById("disp1").innerHTML = 
            "<p>유형 : " + Event.type + ", x좌표 : " + Event.pageX + ", y좌표 : " + Event.pageY + "</p>";
        }
    }
    document.getElementById("cup1").onmousemove = (Event) =>{
        document.getElementById("disp2").innerHTML = 
        "<p>유형 : " + Event.type + ", x좌표 : " + Event.pageX + ", y좌표 : " + Event.pageY + "</p>";
    }
};





