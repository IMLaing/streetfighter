$(document).ready(function() {
  var ryuHide = $('.ryuStill, .ryuReady, .ryuThrow, .textHide');

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