var link=document.querySelector(".btn__feedback"),popup=document.querySelector(".modal"),content=document.querySelector(".modal__content"),close=content.querySelector(".modal__content-close"),slidebtn=document.querySelectorAll(".slide-btn"),basketlink=document.querySelector(".basket__link"),basketarea=document.querySelector(".basket__area"),overlay=document.querySelector(".modal__overlay"),input=popup.querySelectorAll(".modal__input"),label=popup.querySelectorAll(".label");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-show")}),overlay.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-show")}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-show")});for(var i=0;i<slidebtn.length;i++)slidebtn[i].addEventListener("click",function(a){a.preventDefault(),basketlink.classList.add("basket__link-show"),basketarea.classList.add("basket__area-goods"),basketarea.textContent="2 \u0442\u043e\u0432\u0430\u0440\u0430"});for(var i=0;i<input.length;i++)input[i].addEventListener("blur",function(){if(this.value.length>0)for(var a=0;a<input.length;a++)label[a].classList.add("label-data");else for(var a=0;a<input.length;a++)label[a].classList.remove("label-data")});
