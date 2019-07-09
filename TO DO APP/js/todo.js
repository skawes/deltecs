$(document).ready(function () {
  $(".add-task").click(function () {
    $(".action").text("Add tasks");
    $(".add-task,.menu,.workspace,.fas").hide();
    $(".add-space,.icon").show();
    // $('.fa-check-circle').replaceWith("");
  });
});

$(document).ready(function () {
  $('.icon').click(function(){
    $(".action").text("All the tasks");
    $(".add-space,.icon").hide();
    $(".menu,.all,.fas").show();
  })

});
/*
 var a = document.querySelector(".menu");
a.addEventListener("click", function () {
  // this.classList.add.('des');
  var el = event.target.id;
  if (el == 'all' || el == 'pending' || el == 'completed') {
    var co = document.querySelectorAll(".menu-item");
    for (var i = 0; i < co.length; i++)
      co[i].classList.remove('des');
    document.querySelector("#" + el).classList.add('des');
  }
  if (el == 'all' || el == 'pending' || el == 'completed') {
    var cl = document.querySelectorAll(".workspace");
    for (var i = 0; i < cl.length; i++)
      cl[i].classList.add('hide');
    document.querySelector("." + el).classList.remove('hide');
  }
}); 
 */

$(document).ready(function () {
$(".menu-item").click(function(){
  $(".workspace").addClass('hide');
  $this=$(this);
  $('.workspace[data-navname=' + $this.data('navname') + ']').removeClass('hide');
  $(".menu-item").removeClass('des');
  $('.menu-item[data-navname=' + $this.data('navname') + ']').addClass('des');
});

});
