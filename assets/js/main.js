$(function(){
  $('#show').on('click', function(){
    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
    $('body').toggleClass('active');
    $('.sp-nav').toggleClass("active");

  });
  
  $('.nav-menu li a').on('click', function () {
      $('#show').removeClass('active');
      $('#nav').removeClass('active');
      $('body').removeClass('active');
  });

});

// ボタンを隠す
// $('#toTop').hide();

//画面をスクロールしたらフェードイン
$(window).scroll(function(){
  if($(this).scrollTop()>300){
    $('#toTop').fadeIn(400);
  }
  else{
    $('#toTop').fadeOut(400);
  }
});

//「topへ戻る」ボタンを押すとtopから0の地点へスクロールする
$('#toTop').click(function(){ 
  $('html,body').animate({'scrollTop':0},500);
  return false;
});

//アコーディオン
$('.hide').hide();
$('#moreBtn').on('click', function() {
	$('.hide').slideToggle();
  return false;
});

//FAQのアコーディオン
// $('.faq-answer').hide();
  $('.faq-question').on('click', function() {
	$(this).toggleClass('active');
	$(this).next('.faq-answer').slideToggle();

});