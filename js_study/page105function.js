window.addEventListener('load', function(){
    const myCanvas = document.querySelector("#c1");
    const ctx = myCanvas.getContext("2d");

    //destination
    ctx.fillStyle = "red";
    ctx.fillRect(100, 50, 100, 100);

    //source-over , source-in, source-out, source-atop, 
    //destination-over 
    //lighter, darken ,copy, xor
    ctx.globalCompositeOperation = "lighter";

    //source
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(180, 120, 50, 0, 2*Math.PI, false);
    ctx.fill();

    //
    const myCanvas2 = document.querySelector("#c2");
    const ctx2 = myCanvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.font = "bold 80px arial"
    ctx2.fillText("Newjeans",0, 100);
    ctx2.fillText("Coming",50, 200);

    ctx2.globalCompositeOperation = "source-in";

    let img_newjeans = new Image();
    img_newjeans.src = "../img/뉴진스.jpg"
    img_newjeans.onload = function(){
        ctx2.drawImage(img_newjeans, 0, 0, myCanvas2.width, myCanvas2.height);
    }














});