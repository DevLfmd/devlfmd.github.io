(function($) {
    "use strict";
	
    $(document).ready(function() {
        $("body").toggleClass("loaded");
        setTimeout(function() { $("body").addClass("loaded"); }, 1500);
		
		const item = $("#bl-work-items>div");
		const elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++)
			$(item[i]).hoverdir();
		
		$("#selector").animatedHeadline({ animationType: "clip" });
		
        Boxlayout.init();
		$("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));

        $(".contactform").on("submit", function() {
            $(".output_message").text("Loading...");

            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        $(".contactform").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    } else {
                        $(".contactform").find(".output_message").addClass("error");
                        $(".output_message").text("Error Sending!");
                    }
                }
            });

            return false;
        });

		$(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true,
        });
		
		if ($(window).width() > 800) {
			$(".resume-list-item, .resume-card").on("click", function() {
				$(".resume-list-item").removeClass("is-active");
				var e = parseInt($(this).data("index"),10);
				$("#resume-list-item-" + e).addClass("is-active");
				var t = e + 1,
					n = e - 1,
					i = e - 2;
				$(".resume-card").removeClass("front back up-front up-up-front back-back"), $(".resume-card-" + e).addClass("front"), $(".resume-card-" + t).addClass("back"), $(".resume-card-" + n).addClass("back-back"), $(".resume-card-" + i).addClass("back")
			});
		}
    });
})(jQuery);