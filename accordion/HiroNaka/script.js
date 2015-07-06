$('.trigger').on('click', function(e) {
	e.preventDefault();
	$(this).next().slideToggle(300);
});
