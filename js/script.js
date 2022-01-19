
$(window).on("load", function () {
	$(window).scroll(function () {
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".fade").each(function () {
			/* Check the location of each desired element */
			var objectBottom = $(this).offset().top + $(this).outerHeight();

			/* If the element is completely within bounds of the window, fade it in */
			if (objectBottom < windowBottom) { //object comes into view (scrolling down)
				if ($(this).css("opacity") == 0) { $(this).fadeTo(300, 1); }
			} else { //object goes out of view (scrolling up)
				if ($(this).css("opacity") == 1) { $(this).fadeTo(300, 0); }
			}
		});
	}).scroll(); //invoke scroll-handler on page-load
});



var text = $('.text-overflow'),
	btn = $('.btn-overflow'),
	h = text[0].scrollHeight;

if (h > 120) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function (e) {
	e.stopPropagation();

	if (btn.hasClass('less')) {
		btn.removeClass('less');
		btn.addClass('more');
		btn.text('Ver menos');

		text.animate({ 'height': h });
	} else {
		btn.addClass('less');
		btn.removeClass('more');
		btn.text('Ver mas');
		text.animate({ 'height': '120px' });
	}
});


///////////menu responsive///////////////
// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
	this.classList.toggle('is-active');
	document.querySelector(".menuppal").classList.toggle("is_active");
	event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/


