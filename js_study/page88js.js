
// function show_detail(){
//     document.querySelector(".detail").style.display = 'block';
//     document.querySelector("#open").style.display = 'none';
//     document.querySelector(".close").style.display = 'block';
// }

// function hide_detail() {
//     document.querySelector(".detail").style.display = 'none';
//     document.querySelector("#open").style.display = 'block';
//     document.querySelector(".close").style.display = 'none';
// }

desc_status = false;

function show_detail(){
    if(desc_status == true){
        document.querySelector("#desc").style.display = 'none';
        document.querySelector("#open").innerHTML = "상세 설명 보기";
        desc_status = false;
    }
    else{
        document.querySelector("#desc").style.display = 'block';
        document.querySelector("#open").innerHTML = "상세 설명 닫기";
        desc_status = true;
    }
}



















































































































