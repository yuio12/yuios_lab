window.addEventListener('load', function(){
    const canvas = document.querySelector("#canvas");
    const toolbar = document.querySelector("#toolbar");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-toolbar.offsetHeight;

    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    
    toolbar.addEventListener("click", function(){
        ctx.clearRect(0,0, canvas.width, canvas.height );
    });

    canvas.addEventListener("mousedown", function(){
        isDrawing = true;
    });
    canvas.addEventListener("mouseup", function(){
        isDrawing = false;
    });

    canvas.addEventListener("mousemove", function(event){
        if(isDrawing == true){
            ctx.linWidth = 2;
            ctx.lineTo(event.clientX, event.clientY);
            ctx.stroke();
        }
    });





});