/*Make loading scene*/
document.write('<div class="load"><div class="loader">');
document.write('<div class="bouncing-ball"></div><div class="bouncing-ball"></div>');
document.write('</div></div>');

/*if ready, fade out*/
$(document).ready(function () {
    $(".load").fadeOut(3000);
});


