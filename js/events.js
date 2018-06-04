function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('form').on('keydown', function() {
    if (key.which===71) {
      alert('You have pressed g!');
    } else {
      alert('You haven\'t pressed g!');
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
