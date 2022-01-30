$(document).ready(function () {
  // Control login/signup button
  $('#dropdown').click(function () {
    $('.nav__options').toggle('.open');
  });

  // Control mobile menu
  $('#hamburger').click(function () {
    $(this).next('.navbar__components--mobile').slideToggle();
  });

  // Control mobile menu on resize
  $(window).on('resize', function () {
    var win = $(this);
    if (win.width() >= 1000) {
      $('.navbar__components--mobile').css('display', 'none')
    }
  });

  // Control login/signup options mobile menu on click outside of the target
  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.navbar__components--mobile') && !$(target).parents().is('#hamburger')) {
      $('.navbar__components--mobile').slideUp();
    }
    if (!$(target).is('#dropdown') && !$(target).parents().is('.nav__options')) {
      $('.nav__options').slideUp();
    }
  });
  $('#emojis-container > li').each(function () {
    $(this).click(function () {
      $('#blog-container').css('display', 'flex')
    })
  })
})