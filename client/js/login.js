var $login = document.getElementById('login');
var $login_bg = document.getElementById('login-bg');
var $signup_return = document.getElementById('signup-return');

// Login
$('#login-btn').on('click', function(e) {
  e.preventDefault();

  if ($('#user').val() == "") {
    //handleError("Please enter username");
    return false;
  } else if ($('#pass').val() == "") {
    //handleError("Please enter password");
    return false;
  } else {
    sendAjax($('#loginForm').attr('action'), $('#loginForm').serialize());
    return false;
  }
});

// Ajax
function sendAjax(action, data) {
  $.ajax({
    cache: false,
    type: 'POST',
    url: action,
    data: data,
    dataType: 'json',
    success: function(result, status, xhr) {
      enterPage(result.redirect);
    },
    error: function(xhr, status, error) {
      var msg = JSON.parse(xhr.responseText).error;
      console.log(msg);
    }
  });
  return false;
}

// Animation
$(document).ready(function() {
  TweenMax.fromTo($login, 1.5, {y: -150, opacity: 0}, {y: 0, opacity: 1, ease: Sine.easeInOut});
  TweenMax.fromTo($login_bg, 1, {opacity: 0}, {opacity: 1, ease: Sine.easeInOut});
});

$signup_return.addEventListener('click', function() {
  TweenMax.to($login, 1.5, {y: -150, opacity: 0, ease: Sine.easeInOut});
  TweenMax.to($login_bg, 1, {opacity: 0, ease: Sine.easeInOut});
  setInterval(function() {
    window.location.href = "/signup";
  }, 1500);
});

function enterPage(direct) {
  TweenMax.to($login, 1.5, {y: -150, opacity: 0, ease: Sine.easeInOut});
  TweenMax.to($login_bg, 1, {opacity: 0, ease: Sine.easeInOut});
  setInterval(function() {
    window.location.href = direct;
  }, 1500);
}
