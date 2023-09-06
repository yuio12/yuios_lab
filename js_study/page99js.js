window.addEventListener('load', function(){
    add_p_element = () => {
        let newP = document.createElement("p");
        let txtnode = document.createTextNode("새로 태어난 element");
        newP.appendChild(txtnode);
        document.getElementById("info").appendChild(newP);
    }



    newregister = () =>{
        let newitem = document.createElement("li");
        let subject = document.getElementById('subject');
        let newtext = document.createTextNode(subject.value);
        newitem.appendChild(newtext);
        
        let itemlist = this.document.getElementById('itemlist');
        itemlist.appendChild(newitem);
        subject.value = "";

        let items_li = document.querySelectorAll("li");
        for(let i = 0; i < items_li.length; i++){
            items_li[i].addEventListener("click", function(){
                if(this.parentNode){
                    this.parentNode.removeChild(this);
                }
            });
        };
    };













});



