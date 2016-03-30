(function() {
  $(document).foundation();
  var $frame = $('.day-picker-frame');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'centered',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    pagesBar: $wrap.find('.pages'),
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,

    startAt: $('.day-picker-frame li').index($('.day-picker-frame li.active')),

    // Cycling
    cycleBy: 'pages',
    cycleInterval: 1000,
    pauseOnHover: 1,
    startPaused: 1,

    // Buttons
    prevPage: $('button.previous-week'),
    nextPage: $('button.next-week')
  });

  $(".show-feedback").click(function() {
    $(this).parent().siblings().find(".assessment-feedback").toggleClass("hide");
  });

  $(".icon-show-answer").click(function() {

    $(this).closest(".row").siblings(".faq-answer").toggleClass("hide");

    $(this).toggleClass(function() {
      if($(this).hasClass("icon-show-answer")) {
        return "icon-hide-answer";
      } else {
        return "icon-show-answer";
      }
    });
  });

  var toggleBookings = function() {
    $(".early-bookings").toggleClass("hide");
    $(".show-bookings").toggleClass("hide");
    $(".hide-bookings").toggleClass("hide");
  };

  $(".show-bookings").click(toggleBookings);
  $(".hide-bookings").click(toggleBookings);
})();