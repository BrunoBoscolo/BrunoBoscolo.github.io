var wordArray = ["work", "learn", "Grow", "Improve", "Make difference"];
var wordCount = 1;
var screen_height = $(window).height();
var screen_width = $(window).width();

$(window).on('load', function() {

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
        }, 150);
    });
});


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