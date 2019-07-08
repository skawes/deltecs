var a=document.querySelector(".menu");
a.addEventListener("click",function(){
   // this.classList.add.('des');
  var el=event.target.id;
 
  
//  document.querySelector("#"+el).classList.add('des');
 
    var cl=document.querySelectorAll(".workspace");
     for(var i=0;i<cl.length;i++)
       cl[i].classList.add('hide');
    document.querySelector("."+el).classList.remove('hide');
});