$(document).ready(() => {

//for the lobster swapping
$('.bluelobster').on('mouseenter', () => {
  $('.bluelobster').attr('src', 'images/bluelobster.jpg');
}).on('mouseleave', () => {
  $('.bluelobster').attr('src', 'images/bwlobster.jpg');
});

$('#lobster').on('click', () => {
  $('.bluelobster').attr('src', 'images/bluelobster.jpg');
});

//for the sunset swapping
$('.sunset').on('mouseenter', () => {
  $('.sunset').attr('src', 'images/sunsetbw.jpg');
}).on('mouseleave', () => {
  $('.sunset').attr('src', 'images/sunset.jpg');
});

$('#changemood').on('click', () => {
  $('.sunset').attr('src', 'images/sunsetbw.jpg');
});

//for the red flower swapping
$('.redgreen').on('mouseenter', () => {
  $('.redgreen').attr('src', 'images/redgreenbw.jpg');
}).on('mouseleave', () => {
  $('.redgreen').attr('src', 'images/redgreen.jpg');
});

$('#mutesubject').on('click', () => {
  $('.redgreen').attr('src', 'images/redgreenbw.jpg');
});


//button for slide
$('#slider').on('click', () => {
  $('.zoom').toggle();
});


});
