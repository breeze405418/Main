//移動到某處讓物件消失

  $(window).scroll(function () {
    if ($(window).scrollTop() < 800) {
      $(".backTop").slideUp(500);
    } else {
      $(".backTop").slideDown(500);
    }
  });


//點擊回到最上方

  $(".backTop").on("click", function () {
    $(this).animate({bottom:'100%'}, 1000);
    $("html,body").animate({ scrollTop: "0px" }, 1000);
    setTimeout(() => {
      $(".backTop").removeAttr("style");
    }, 1200);
  });


/* 點擊畫面上下滑動到指定區塊

$(‘#按鈕名稱‘).click(function(){
    $(‘html,body’).animate({scrollTop:$(‘#指定區塊塊名稱‘).offset().top}, 速度);
    }); //代表一個完整的執行區塊
*/


$(`#1`).click(function () {
  $(`html,body`).animate({ scrollTop: $(`#2`).offset().top }, 1500);
});
$(`#2`).click(function () {
  $(`html,body`).animate({ scrollTop: $(`#3`).offset().top }, 1500);
});

