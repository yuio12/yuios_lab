window.addEventListener('load', function(){
    // let mouseP = document.getElementById("mouse-event");
    // mouseP.addEventListener("mouseover", () => {mouseP.style.fontSize = '2em';});
    // mouseP.addEventListener("mouseout", () => {mouseP.style.fontSize = '1em';});

    var pics = document.getElementsByClassName("pic");
    var img_box = document.getElementById("img_box");
    var box_img = document.getElementById("box_img");

    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener("click", showimg); // pics[i]번째를 클릭하면 클릭이벤트를 발생해라
        
    };
    function showimg(){
        var load_img = this.getAttribute("data-src");
        box_img.setAttribute("src", load_img);
        img_box.style.display = "flex";
    };

    img_box.onclick = function() {
        img_box.style.display = "none";
    }




































});












