$(function () {
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

	$(".bg__icon").on('click',function (e) {
		var that = $(this);
		var devArrs = $(this).attr("data-tab"); 

		var tabBody = $('.bg__section');

		console.log(tabBody);
		console.log(this);

        for (var i = 0; i < tabBody.length; i++) {
            if (devArrs == i) {
                $(tabBody[i]).css("display", "flex");
            } else {
            	$(tabBody[i]).css("display", "none");
            }
       	 }
	});


//================
//scrollTop
//================
});
$(window).on("load",function() {
	let windowHeight = $(document).height();
	let speedStep = 2;
	let timeScrolling = windowHeight / speedStep;

	$(".scrollTop").click(function(event) {
		$("html, body").animate({
			scrollTop: 0
		}, timeScrolling);
	});
});