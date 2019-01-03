// from the new template
var wh = $(window).height(),
$header = $('.header'),
$hero = $('.hero'),
$heroImg = $('.hero-image'),
$heroTitle = $('.hero-title'),
$heroTitleH1 = $('.hero-title h1'),
$heroTitleH5 = $('.hero-title h5'),
$container = $('.container'),
$innerHeader = $('.inner-header'),
$containerImg = $('.container img');

// Init
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave' } });



// Create scene
$hero.each(function () {
  new ScrollMagic.Scene({
    duration: '150%' }).



  setPin(this).
  addTo(ctrl);
});


// Create  timeline and animations
var fadeScroll = new TimelineMax();
fadeScroll.
set($heroImg, { scale: 1.1 }).
set($heroTitle, { perspective: 800, transformStyle: 'preserve-3d' }).
set($container, { yPercent: 41, perspective: 800, transformStyle: 'preserve-3d' }).
to($heroImg, 4, { yPercent: -5, scale: 0.8, ease: SlowMo.easeOut }, '0').
to($heroTitleH1, 4, { scale: 0.9, rotationX: -10, rotationY: 10 }, '0').
to($heroTitleH5, 4, { scale: 0.9, x: -30, rotationX: -10, rotationY: 10 }, '0').
fromTo($heroImg, 2, { opacity: 1 }, { opacity: 0 }, '=-.9').
to($container, .5, { autoAlpha: 1, y: -50, ease: SlowMo.easeOut }, '=-0.7').
to($header, 1, { color: 'black' }, '+1.4');


// Create scene
new ScrollMagic.Scene({
  duration: '110%' }).

setTween(fadeScroll).
triggerElement($hero).
addTo(ctrl);



//Image transition loop
$($containerImg).each(function () {

  // Create variables
  var controller = new ScrollMagic.Controller();
  var img = this;

  // Create  timeline and animations
  var imageIn = new TimelineMax();
  imageIn.
  set(img, { scale: .8 }).
  to(img, 2, { autoAlpha: 1, scale: 1, rotationX: 0, ease: Power0.easeNone });

  // Create scene
  var scene = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: img,
    offset: -wh * 0.9 }).

  setTween(imageIn).
  addTo(controller);

});
// end the new template

var vid = document.getElementById("promovideo");

// collapse for the FAQ Sections
var items = document.querySelectorAll(".accordion a");
items.forEach(function (item) {
    item.addEventListener('click', toggleAccordion);
});

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white"+" opacity-mid";
        $("#btnregister").css("display","inline-block");
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white opacity-mid", "");
        $("#btnregister").css("display","none");
    }
    if ($('.hero-image').css('opacity')==0){
      $('.hero').css('z-index','-1000')
    }
    else{
      $('.hero').css('z-index','0')
    }
}

$(document).ready(function(){
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white"+" opacity-mid";
      $("#btnregister").css("display","inline-block");
  } else {
      navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white opacity-mid", "");
      $("#btnregister").css("display","none");
  }
  if ($('.hero-image').css('opacity')==0){
    $('.hero').css('z-index','-1000')
  }
  else{
    $('.hero').css('z-index','0')
  }
})


// Used to toggle the menu on small screens when clicking on the menu button

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show w3-top";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Trasnition in Services , Process and Benefits
$(document).ready(function(){
  $('.a').hover(function(){
    $(this).children('.b').css('color','orange');
    $(this).children('.b').css('transform','scale(1.1)');
    $(this).children('.b').css('transition','.5s');
    // $(this).children('.c').css('letter-spacing','2px');
    $(this).children('.c').css('transform','scale(1.1)');
    $(this).children('.c').css('transition','.5s');
    $(this).children('.c').css('color','orange');
  }, function(){
    $(this).children('.b').css('color','black');
    $(this).children('.b').css('transform','scale(1)');
    $(this).children('.b').css('transition','.5s');
    // $(this).children('.c').css('letter-spacing','0px');
    $(this).children('.c').css('transform','scale(1)');
    $(this).children('.c').css('transition','.5s');
    $(this).children('.c').css('color','black');
  })
  $('.at-work-process').hover(function(){
    $(this).children('.at-work-process-details').addClass('at-work-process-hover-at-work-process-details')
    $(this).children('.at-work-process-details').css('bottom','0')
    $(this).children('.at-work-process-details').css('z-index','2')
    $(this).children('.at-work-process-details').css('opacity','1')
    $(this).children('.at-work-process-text').addClass('at-work-process-hover-at-work-process-text')
  }, function(){
    $(this).children('.at-work-process-details').removeClass('at-work-process-hover-at-work-process-details')
    $(this).children('.at-work-process-details').css('bottom','-60px')
    $(this).children('.at-work-process-details').css('z-index','-1')
    $(this).children('.at-work-process-details').css('opacity','0')
    $(this).children('.at-work-process-text').removeClass('at-work-process-hover-at-work-process-text')
  })
});

// Click on IOS (prevent Double Click on IOS
$('.IOS').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});
