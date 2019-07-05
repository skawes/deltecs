/* $(".item").click(function () {
    $this = $(this);

    console.log(event.target);
    $('.single-screen').addClass('hide');
   $('.single-screen[data-navname=' + $this.data('navname') + ']').removeClass('hide');

   


    
}); */


 var a=document.querySelector(".header-container");



//event listener


EventListenr();

function EventListenr(){


    a.addEventListener('click',checkthetarget);


}

//function


function checkthetarget(){

//console.log('i am clicked');
    //console.log(event);
    var elid=event.target.id;
  

    
     var cl=document.querySelectorAll('.single-screen');
     debugger;
     console.log(document.getElementById("elid"));
   for(var i=0;i<cl.length;i++)
     cl[i].classList.add('hide');
     document.querySelector("."+elid).classList.remove('hide');
  // elid.classList.remove('hide');
   
   // debugger;
  //  console.log(elid);
   // console.log(event.target.classList.contains('hide'));

     



} 



