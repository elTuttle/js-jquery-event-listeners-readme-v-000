//define functions here
function getIt() {
  $('p').on("click", function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on("load", addClass("tasty"));
}

function pressIt() {
  $('form').on("keydown", function(key){
    if (key.which == 71) {
      alert('you have pressed the G key')
    }
  });
}

$(document).ready(function(){

  frameIt();

});
