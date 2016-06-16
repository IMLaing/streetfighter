$(document).ready(function() {
   $('.ryu').mouseenter(function(){
       $('.ryuStill').hide();
       $('.ryuReady').show();
   })
   .mouseleave(function(){
        $('.ryuReady').hide();
        $('.ryuStill').show()});
    
    $('.ryu').mousedown(function(){
        playHadouken(); 
        $('.ryuReady').hide();
        $('.ryuThrow').show();
        $('.hadouken').show().animate({
            'left': '1020px'}, 500, function(){
            $(this).hide();
            $(this).css('left', '520px')
        });
    }).mouseup(function(){        
        $('.ryuThrow').hide();
        $('.hadouken').hide();
        $('.ryuReady').show();
    });
    
});
    function playHadouken(){
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};