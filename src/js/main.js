$(function () {
	AOS.init();

	$('[data-fancybox]').fancybox({
		loop: true,
	});

	$('.card__1 .slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		appendDots: $(".card__1 .card__right"),
		prevArrow: $('.card__1 .btn__prev'),
		nextArrow: $('.card__1 .btn__next'),
	});
	$('.card__2 .slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		appendDots: $(".card__2 .card__right"),
		prevArrow: $('.card__2 .btn__prev'),
		nextArrow: $('.card__2 .btn__next'),
	});
	$('.card__3 .slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		appendDots: $(".card__3 .card__right"),
		prevArrow: $('.card__3 .btn__prev'),
		nextArrow: $('.card__3 .btn__next'),
	});

	$('.review__slider .slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		appendDots: $(".review__slider"),
		prevArrow: $('.review__slider .btn__prev'),
		nextArrow: $('.review__slider .btn__next'),
	});

	function modal() {
		$(".add__review").click(function () {
			$.fancybox.open($(".modal"), {
				infobar: false,
				touch: false,
			})
		})

		$(".modal form").submit(function (e) {
			e.preventDefault()
			$(this).removeClass("active");
			$(".send__window").addClass("active");
			$(".modal .name__input").val("")
			$(".modal .modal__area").val("")
			$(".modal .file img").attr("src", "").css("display", "none")
			delayClose()
		})
		function delayClose() {
			setTimeout(function () {
				$(".modal form").addClass("active");
				$(".send__window").removeClass("active");
				$(".modal .fancybox-close-small").click();
			}, 5000);
		}
	}

	modal()
})
