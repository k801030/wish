$(function (){
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       0
    }
  );
  wow.init();
  //SmoothScrolling();
  setBackgroundHeight();
  var ntusa_start = $('#ntusa').offset().top;
  $( window ).scroll(function() {
    var speed = 100;
    var position = $(document).scrollTop();
    var move = - position * (speed / 1000);
    var move2 = - position * (speed*1.1 / 1000);
    //$('#log').html('move:'+move+" position:"+position);
    //$('#log').css('top', position);
    $('#bg').css('backgroundPosition', '0px ' + move + 'px');

    $('#ntusa').css('top', (ntusa_start+move2) + 'px');
    /*$('#bg').animate({
      'background-position-y':  move + 'px'
    },20,'linear');
    console.log('d');*/
    setBackgroundHeight();
    var elem = $('#home-logo, #home-time');
    setFadeOut(elem, position);
    
  });

  function setBackgroundHeight() {
    $('#bg').css('height', $(document).height() + 'px');
  }

  function setFadeOut(elem, position){
    var start_pos = elem.offset().top;
    var end_pos = elem.offset().top + elem.height();
    elem.css('opacity',(end_pos - position)/(end_pos - start_pos));
  }
  
  

});