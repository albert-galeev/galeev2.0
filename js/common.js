paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

TweenMax.from(".logo", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);


$('.text_two').delay(5000).animate({'opacity':'1'},500);