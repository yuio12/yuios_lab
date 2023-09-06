window.addEventListener('load', function(){

    const mycanvas = document.querySelector('canvas');
    const ctx = mycanvas.getContext('2d');
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(10, 10, 100, 100,); // 시작좌표(10,10) ~ (폭100, 높이100)

    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillRect(10+100, 10, 100, 100,);
    ctx.fillRect(10, 10+100, 100, 100,);
    
    ctx.strokeStyle = "black";
    ctx.strokeRect(10+100, 10+100, 100, 100,);
    ctx.strokeRect(10, 10, 100, 100,);

    ctx.clearRect(10+50, 10+50, 100, 100);

    const mycanvas1 = document.querySelector('#c1');
    const ctx1 = mycanvas1.getContext('2d');

    ctx1.beginPath();
    ctx1.moveTo(50, 50); // 시작점 (50, 50)
    ctx1.lineTo(250, 250); // 끝점(250, 250)
    ctx1.stroke(); // 실제로 그리기

    ctx1.beginPath();
    ctx1.moveTo(50+50, 50);
    ctx1.lineTo(250+50, 250); 
    ctx1.stroke();
    
    const mycanvas2 = document.querySelector('#c2');
    const ctx2 = mycanvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.moveTo(50, 50);
    ctx2.lineTo(150, 100);
    ctx2.lineTo(50, 150);
    ctx2.closePath();
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(150, 100);
    ctx2.lineTo(250, 50);
    ctx2.lineTo(250, 150);
    ctx2.closePath();
    ctx2.stroke();

    ctx2.fillStyle = "rgb(0, 200, 0)";
    ctx2.fill();

    const mycanvas3 = document.querySelector('#c3');
    const ctx3 = mycanvas3.getContext('2d');

    ctx3.fillStyle = "yellow";
    ctx3.strokeStyle = "red";

    ctx3.beginPath();
    // 원 중심 좌표 (200, 150) 반지름 100 시작각도 0, 끝각도2PI, (반시계방향 기본값ture)
    ctx3.arc(200, 150, 100, 0, 2*Math.PI); 
    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();


    const mycanvas4 = document.querySelector('#c4');
    const ctx4 = mycanvas4.getContext('2d');

    ctx4.fillStyle = "yellow";
    ctx4.strokeStyle = "red";

    ctx4.beginPath();
    // 원 중심 좌표 (100, 100) 반지름 50 시작각도 0(시계3시), 끝각도180도, (반시계방향 기본값ture)
    ctx4.arc(100, 100, 50, 0, (2*Math.PI/360)*180, true); 
    ctx4.arc(280, 100, 50, 0, (2*Math.PI/360)*180, false); 
    ctx4.fill();
    
    ctx4.beginPath();
    ctx4.arc(120, 200, 50, (2*Math.PI/360)*90, (2*Math.PI/360)*270, false);
    ctx4.closePath();
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.arc(200, 200, 50, 0, (2*Math.PI/360)*60, false);
    ctx4.stroke();


    const mycanvas5 = document.querySelector('#c5');
    const ctx5 = mycanvas5.getContext('2d');

    ctx5.strokeStyle = "blue";
    ctx5.beginPath();
    // 원점(200, 70), 반지름(80, 50) ,회전 0, 시작 각도0(3시방향), 끝각도0, (반시계방향 기본값true)
    ctx5.ellipse(200, 70, 80, 50, 0, 0, 2*Math.PI);
    ctx5.stroke();

    ctx5.strokeStyle = "red";
    ctx5.beginPath();
    // 원점(150, 200), 반지름(80, 50) ,회전 60도, 시작 각도0(3시방향), 끝각도0, (반시계방향 기본값true)
    ctx5.ellipse(150, 200, 80, 50, (2*Math.PI/360)*60, 0, 2*Math.PI);
    ctx5.stroke();









});