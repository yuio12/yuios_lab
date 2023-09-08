window.addEventListener('load', function(){
    const canvas = document.querySelector("#canvas");
    const toolbar = document.querySelector("#toolbar");
    const color_picker = document.querySelector("#color_picker");
    const ctx = canvas.getContext('2d');
    let color = "black";


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-toolbar.offsetHeight;


    toolbar.addEventListener("click", function(event){
        if(event.target.id == "reset"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        else if(event.target.id == "confirm"){
            alert("저장 완료");
        }
        else if(event.target.id == "color_sel"){
            color = color_picker.value;
        }
    });


    let isDrawing = false;
    

    canvas.addEventListener("mousedown", function(event){
        isDrawing = true;
    });
    canvas.addEventListener("mouseup", function(event){
        isDrawing = false;
        ctx.beginPath();
    });



    canvas.addEventListener("mousemove", function(event){
        if(isDrawing == true){
            ctx.strokeStyle = color;
            // ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.lineTo(event.clientX, event.clientY);
            ctx.stroke();
        }
    });



    // let isDrawing = false;
    
    // toolbar.addEventListener("click", function(){
    //     ctx.clearRect(0,0, canvas.width, canvas.height );
    // });

    // canvas.addEventListener("mousedown", function(){
    //     isDrawing = true;
    // });
    // canvas.addEventListener("mouseup", function(){
    //     isDrawing = false;
    // });

    // canvas.addEventListener("mousemove", function(event){
    //     if(isDrawing == true){
    //         ctx.linWidth = 2;
    //         ctx.lineTo(event.clientX, event.clientY);
    //         ctx.stroke();
    //     }
    // });





});