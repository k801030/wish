$(function (){
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       0
    }
  );
  wow.init();
  setBackgroundHeight();
  $( window ).scroll(function() {
    var speed = 1.1;
    var position = $(document).scrollTop();
    var move = position / speed;
    //$('#log').html('move:'+move+" position:"+position);
    //$('#log').css('top', position);
    $('#bg').css('backgroundPosition', '0px ' + move + 'px');
    /*$('#bg').animate({
      'background-position-y':  move + 'px'
    },20,'linear');
    console.log('d');*/
    setBackgroundHeight();
  });

  function setBackgroundHeight() {
    $('#bg').css('height', $(document).height() + 'px');
  }
  

});