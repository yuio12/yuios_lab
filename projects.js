window.addEventListener('load', function(){

    var tablink = document.querySelectorAll('.tab_box a');
    var product = document.querySelectorAll('.product_frame');
  
    for(var i= 0; i < tablink.length; i++ ){
      tablink[i].addEventListener('click', function(e){
        e.preventDefault();
        var tab = e.target.getAttribute('href');
  
        var tabmenu = tab.replace('#','');
  
        for(var j = 0; j < product.length; j++ ){
          product[j].style.display = 'none';
        }
  
        document.getElementById(tabmenu).style.display = 'flex';
      })
  
    }
  
  });