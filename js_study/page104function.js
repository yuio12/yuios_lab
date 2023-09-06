window.addEventListener('load', function(){
    const myCanvas = document.querySelector("#c1");
    const ctx = myCanvas.getContext("2d");


    ctx.font = "60px Arial";
    ctx.fillText("hello!", 50, 50); // (50, 50)에 출력
    ctx.strokeText("hello!", 50, 100); // (50, 100)에 출력
    
    ctx.font = "italic 60px Arial";
    ctx.fillText("hello!", 50, 150); // (50, 50)에 출력
    ctx.font = "bold 60px Arial";
    ctx.strokeText("hello!", 50, 200); // (50, 100)에 출력




    const myCanvas2 = document.querySelector("#c2");
    const ctx2 = myCanvas2.getContext("2d");

    let img = new Image();
    img.src = "../img/cup-1.png"
    img.onload = function(){
        ctx2.drawImage(img, 0,0, myCanvas2.Width, myCanvas2.height);
        ctx2.drawImage(img, 0, 0, 200, 200);
        ctx2.drawImage(img, 200, 100, 200, 200);
    }


    const myCanvas3 = document.querySelector("#c3");
    const ctx3 = myCanvas3.getContext("2d");
    let img2 = new Image();
    img2.src = "../img/tree-2.jpg"
    img2.onload = function(){
        // ctx3.drawImage(img2, 0,0, myCanvas3.Width, myCanvas3.height);
        ctx3.drawImage(img2, 0, 0, 200, 200);
    }

    const myCanvas4 = document.querySelector("#c4");
    const ctx4 = myCanvas4.getContext("2d");
    let img3 = new Image();
    img3.src = "../img/뉴진스.jpg"
    img3.onload = function(){
        ctx4.drawImage(img3, 0,0, myCanvas4.Width, myCanvas4.height);
    }
    ctx4.beginPath();
    ctx4.arc(60,100,50,0,2*Math.PI);
    ctx4.moveTo(140,120);

    ctx4.arc(140,120,50,0,2*Math.PI);
    ctx4.moveTo(200,120);

    ctx4.arc(200,120,50,0,2*Math.PI);
    ctx4.moveTo(260,80);

    ctx4.arc(260,80,50,0,2*Math.PI);
    ctx4.moveTo(340,100);

    ctx4.arc(340,100,50,0,2*Math.PI);
    ctx4.clip();







});