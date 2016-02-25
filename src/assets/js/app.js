(function() {
	var $frame = $('.day-picker-frame');
	var sly = new Sly($frame, {
		horizontal: true,
		itemNav: 'basic',
		smart: true,
		activateOn: 'click',
		mouseDragging: true,
		touchDragging: true,
		releaseSwing: true,
		activatePageOn: 'click',
		speed: 300,
		elasticBounds: true,
		dragHandle: true,
		dynamicHandle: true,
		clickBar: true,
		startAt: $('.day-picker-frame li').index($('.day-picker-frame li.active')),
		prev: "button.previous-week",
		next: "button.next-week"
	}).init();

	$(window).resize(function(e) {
		$frame.sly('reload');
	});

})();