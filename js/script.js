 var link = document.querySelector(".btn__feedback");
 var popup = document.querySelector(".modal__content");
 var close = popup.querySelector(".modal__content-close");
 var overlay = document.querySelector(".modal__overlay");
 var overclose = overlay.querySelector(".modal__overlay-show");
 var slidebtn = document.querySelectorAll(".slide-btn");
 var basketlink = document.querySelector(".basket__link");
 var basketarea = document.querySelector(".basket__area");

 var input = popup.querySelectorAll(".modal__input");
 var label = popup.querySelectorAll(".label");

 link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal__content-show");
        overlay.classList.add("modal__overlay-show");
        window.scrollTo(0, 300);
      });

 close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal__content-show");
        overlay.classList.remove("modal__overlay-show");
      });

 for(var i = 0; i < slidebtn.length; i++){
       slidebtn[i].addEventListener("click", function(event) {
       event.preventDefault();
       basketlink.classList.add("basket__link-show");
       basketarea.classList.add("basket__area-goods");
       basketarea.textContent = '2 товара';
     });
   }

 for(var i = 0; i < input.length; i++){
     input[i].addEventListener("blur",function(){
       if(this.value.length > 0){
          for(var i = 0; i < input.length; i++) {
             label[i].classList.add("label-data");}

     } else {
         for(var i = 0; i < input.length; i++) {
          label[i].classList.remove("label-data");
        }
     }
  });

    }
