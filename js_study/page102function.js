window.addEventListener('load', function (){
    const mycanvas1 = document.querySelector('#c1');
    const ctx1 = mycanvas1.getContext('2d');

    ctx1.beginPath();
    ctx1.moveTo(50, 200); // 곡선의 시작점
    // (200, 0) 가상의 중간점, 조절점 ,(350, 200) 끝점
    ctx1.quadraticCurveTo(200, 0, 350, 200);
    ctx1.stroke();

    ctx1.strokeStyle = "red";
    ctx1.beginPath();
    ctx1.moveTo(50, 200);
    ctx1.lineTo(200, 0);
    ctx1.lineTo(350, 200);
    ctx1.stroke();



    const mycanvas2 = document.querySelector('#c2');
    const ctx2 = mycanvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.moveTo(50, 100); // 곡선의 시작점
    // (200, 0) 가상의 중간점, 조절점 ,(350, 200) 끝점
    ctx2.quadraticCurveTo(100, 50, 150, 100);
    ctx2.quadraticCurveTo(200, 150, 250, 100);
    ctx2.quadraticCurveTo(300, 50, 350, 100);
    ctx2.stroke();

    ctx2.strokeStyle = "red";
    ctx2.beginPath();
    ctx2.moveTo(50, 100);
    ctx2.lineTo(100, 50); ctx2.lineTo(150, 100);

    ctx2.lineTo(200, 150); ctx2.lineTo(250, 100);

    ctx2.lineTo(300, 50); ctx2.lineTo(350, 100);
    ctx2.stroke();



    const mycanvas3 = document.querySelector('#c3');
    const ctx3 = mycanvas3.getContext('2d');

    ctx3.beginPath();
    ctx3.moveTo(50, 100); // 곡선의 시작점
    // (200, 0) 가상의 중간점, 조절점 ,(350, 200) 끝점
    ctx3.bezierCurveTo(90, 250, 310, 10, 350, 100);
    ctx3.stroke();

    ctx3.strokeStyle = "red";
    ctx3.beginPath();
    ctx3.moveTo(50, 100);
    ctx3.lineTo(90, 250);
    ctx3.lineTo(310, 10);
    ctx3.lineTo(350, 100);
    ctx3.stroke();


    const mycanvas4 = document.querySelector('#c4');
    const ctx4 = mycanvas4.getContext('2d');

    let triangle = new Path2D();
    triangle.moveTo(100, 100);
    triangle.lineTo(300, 100);
    triangle.lineTo(200, 100);
    triangle.closePath();

    ctx4.fillStyle = "blue";
    ctx4.stroke(triangle);









});