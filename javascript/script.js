var wordArray = ["work", "learn", "Grow", "Improve", "Make difference"];
var wordCount = 1;
var screen_height = $(window).height();
var screen_width = $(window).width();

$(window).on('load', function() {

	scale_images();

	scale_font();

	console.log(screen_width, screen_height)

	$(".objective-text").fadeIn(1000, function() {
		$(".objective-text").text("work");
	});
});

$(window).bind('resize', function(e){
    window.resizeEvt;
    $(window).resize(function(){
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function(){
        scale_images();
        scale_font();
        }, 150);
    });
});

function scale_font() {
	headline = $("#headline-text");
	middleline = $("#middleline-text");
	headline.css("font-size", (pol_size*1.2).toString()+'px');
	middleline.css("font-size", (pol_size*0.2).toString()+'px');
}

setTimeout(change_word, 3000);

function change_word() {

	$(".objective-text").fadeOut(function() {
		$(".objective-text").text(wordArray[wordCount]);
		
		if(wordCount==4) {wordCount = 0;} else {wordCount++;}
		
		$(".objective-text").fadeIn();
	});
};

function intro_to_skills() {
	window.location.href = url;
};