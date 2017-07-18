$(function () {
	// MOUSEON
// 	$("a").on("mouseover", function (e) {
// 	let that = this;

// 	$(that).animate({
// 		paddingLeft: "+=50%",
// 		paddingRight: "+=50%",
// 	}, 500, function(){
// 		$(that).css({
// 			"color": "#00FFF6",
// 			"border-color": "#00FFF6"
// 		});
// 	});

// });


// // MOUSELEAVE
// 	$("a").on("mouseleave", function (e) {
// 	let that = this;

// 		$(that).removeAttr("style");

// 	// $(this).stop().animate({
// 	// 	opacity: 1,
// 	// 	paddingLeft: "0",
// 	// 	paddingRight: "0",
// 	// }, 500, function(){
// 	// 	$(this).css({
// 	// 		"color": "#616161",
// 	// 		"border-color": "#616161"
// 	// 	});
// 	// });

// 	});


	$(".device").on('click', function (e) {
		var that = $(this);
		var devArrs = $(this).attr("data-tab"); 

		if (that.hasClass("device")){
			var device = $(".device");

			for (var i = 0; i < device.length; i++) {
				$(device[i]).removeClass("active");
			}
			that.addClass("active");
		}
	});




});