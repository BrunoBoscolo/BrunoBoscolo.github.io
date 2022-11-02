var animation_gear_button = anime({
  targets: '.gear-button',
  rotate: {
  	value: 1080,
    duration: 4000,
    easing: 'easeInOutSine'
  },
  delay: 2000,
  loop: false,
});

var animation_gear_headline = anime({
  targets: '.gear-headline',
  rotate: {
  	value: 1080,
    duration: 3000,
    easing: 'easeInOutSine'
  },
  loop: false,
});

var animation_pol1 = anime({
  targets: '.polia-headline1',
  rotate: {
  	value: 1080,
    duration: 4000,
    easing: 'easeInOutQuad'
  },
});

var animation_pol2 = anime({
  targets: '.polia-headline2',
  rotate: {
    value: 1080,
    duration: 4000,
    easing: 'easeInOutQuad'
  },
});

var animation_rope_headline = anime({
  targets: '.headline-rope',
  height: ['80%','30%'],
  easing: 'easeInOutQuad',
  duration: 4000,
  loop: false,
});

var animation_name_up = anime({
  targets: '.headline-text',
  translateY: ['200%','0%'],
  easing: 'easeInOutQuad',
  duration: 4000,
  loop: false,
});

var animation_rope_button = anime({
  targets: '.rope-button',
  height: ['100%', '40%'],
  easing: 'easeInOutQuad',
  duration: 4000,
  delay: 2000,
  loop: false,
});

var animation_sign = anime({
  targets: '.sign',
  boxShadow: ["5px 5px 0px 0px #E8AA14", "10px 10px 0px 0px #E8AA14"],
  easing: 'easeInOutQuad',
  duration: 1000,
  direction: 'alternate',
  loop: true,
});

var cta_anim = anime({
  targets: '.cta-button',
  marginTop: ['50%', '25%'],
  easing: 'easeInOutSine',
  duration: 4000,
  delay: 2000,
  loop: false,
});

var slider = $(".slider-headline");
slider.oninput = function() {
  state = this.value;
  animation_rope_up.seek((state / 100) * animation_rope_up.duration);
	animation_gear2.seek((state / 100) * animation_gear2.duration);
	animation_pol.seek((state / 100) * animation_pol.duration);
	animation_name_up.seek((state / 100) * animation_name_up.duration);
	state=state-1;
	console.log(state);
}

var slider2 = $(".slider-button");
slider2.oninput = function() {
  state2 = this.value;
  animation_gear1.seek((state2 / 100) * animation_gear1.duration);
	animation_rope.seek((state2 / 100) * animation_rope.duration);
	state=state-1;
	console.log(state);
} 
