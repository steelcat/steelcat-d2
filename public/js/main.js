$(document).ready(function(){
	$('.button-up').hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.button-up').fadeIn();
			} else {
				$('.button-up').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.button-up').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	$(function(){

		$('.sidebar-menu__item-link--trigger').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				menu = $this.closest('.sidebar-menu'),
				item = $this.closest('.sidebar-menu__item'),
				items = menu.find('.sidebar-menu__item'),
				content = item.find('.sidebar-menu__inner-list'),
				duration = 300;

			console.log(item, items, menu);

			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
				items.find('.sidebar-menu__inner-list').slideUp(duration);
				content.stop(true, true).slideDown(duration);

			} else {
				item.removeClass('active');
				content.stop(true, true).slideUp(duration);
			}
		});
	}());

	$(document).ready(function(){

		if ($('.content__options-select').length) {
			$('.content__options-select').simpleSelect();
		}

		$('.selectbox__dropdown').jScrollPane();


	});

	$('.content__options-select').on('change', function(){
		var
			$this = $(this),
			list = $('.product-list'),
			view = $this.val();

		if (view === 'cells') {
			list.addClass('product-list--cells');
		}

		if (view === 'lines') {
			list.removeClass('product-list--cells');
		}

	});
});