var ryuHide = $('.ryuStill, .ryuReady, .ryuThrow, .textHide, .ryuCool');


$(document).ready(function() {
     $('.ryu').mouseenter(function(){
       ryuHide.hide();
       $('.ryuReady').show();
   })
   .mouseleave(function(){
        ryuHide.hide();
        $('.ryuStill').show();
        $(".textHide").show();

    });
    
    $('.ryu').mousedown(function(){
        playHadouken(); 
        ryuHide.hide();
        $('.ryuThrow').show();
        $('.hadouken').show().animate({
            'left': '1020px'}, 500, function(){
            $(this).hide();
            $(this).css('left', '520px')
        });
    }).mouseup(function(){        
        ryuHide.hide();
        $('.hadouken').hide();
        $('.ryuReady').show();
    });
    
});
    function playHadouken(){
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};


$(document).keydown(function(e){
  if(e.which = 88) {
    ryuHide.hide();
  $('.ryuCool').show();
};
});
$(document).keyup(function(e){
  $('.ryuCool').hide();
  $('.ryuStill').show();
});