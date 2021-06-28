
$('.btns button').click(function () {
    $('.btns button')
      .eq($(this).index())
      .addClass('now')
      .siblings()
      .removeClass('now');
  });

