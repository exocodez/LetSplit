var $signup = document.getElementById('signup');
var $signup_bg = document.getElementById('signup-bg');
var $login_return = document.getElementById('login-return');

// Signup
$('#signup-btn').on('click', function(e) {
  e.preventDefault();

  if ($('#firstname').val() == "" || $('#lastname').val() == "" || $('#username') == "" || $('#email') == "" || $('#password') == "" || $('#confirm') == "") {
    //handleError("All fields are required");
    return false;
  } else if ($('#password').val() !== $('#confirm').val()) {
    //handleError("Passwords do not match");
    return false;
  } else {
    sendAjax($('#signupForm').attr('action'), $('#signupForm').serialize(), enterPage);
    return false;
  }
});

// Animation
$(document).ready(function() {
  TweenMax.fromTo($signup, 1.5, {y: -150, opacity: 0}, {y: 0, opacity: 1, ease: Sine.easeInOut});
  TweenMax.fromTo($signup_bg, 1, {opacity: 0}, {opacity: 1, ease: Sine.easeInOut});
});

$login_return.addEventListener('click', function() {
  TweenMax.to($signup, 1.5, {y: -150, opacity: 0, ease: Sine.easeInOut});
  TweenMax.to($signup_bg, 1, {opacity: 0, ease: Sine.easeInOut});
  setInterval(function() {
    window.location.href = "/login";
  }, 1500);
});

var enterPage = function(result) {
  TweenMax.to($signup, 1.5, {y: -150, opacity: 0, ease: Sine.easeInOut});
  TweenMax.to($signup_bg, 1, {opacity: 0, ease: Sine.easeInOut});
  setInterval(function() {
    window.location.href = result.redirect;
  }, 1500);
}
