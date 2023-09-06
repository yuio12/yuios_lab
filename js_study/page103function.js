window.addEventListener('load', function (){
    btn1 = function(){
        document.getElementById("c1").style.zIndex = 1;
        document.getElementById("c2").style.zIndex = 2;
    }
    
    btn2 = function(){
        document.getElementById("c1").style.zIndex = 2;
        document.getElementById("c2").style.zIndex = 1;
    }
   
    const myCanvas = document.querySelector("#c1");
    const ctx = myCanvas.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.beginPath ();
    ctx.arc(200, 150, 50, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();

    //
    const myCanvas1 = document.querySelector("#c2");
    const ctx1 = myCanvas1.getContext("2d");
    ctx1.fillStyle = "red";
    ctx1.beginPath ();
    for(let i = 0; i < 2; i++){
        ctx1.arc(200, 150, 50, 0, 2*Math.PI);
    }
    ctx1.closePath();
    ctx1.fill();








});