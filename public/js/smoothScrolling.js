SmoothScrolling = function() {
    var target = 0; // top: 0
    var className = ".smooth";
    $('body,html').bind('mousewheel', function(e){
      offset = e.originalEvent.wheelDelta;
      var itemLength = $(className).length;

      if(!isLock()){
        lock();
        if(e.originalEvent.wheelDelta < 0) {
          //scroll down
          target ++;
          if(target >= itemLength)
            target = itemLength-1;
        }else {
          //scroll up
          target --;
          if(target < 0)
            target = 0;
        }
        console.log(e.originalEvent.wheelDelta);
        scrolling(target);
      }
      

      //prevent page fom scrolling
      return false;
    });

    function scrolling(target){
      var itemLength = $(className).length;

      $('#bg').animate({
        'background-position-y':  -offset + 'px'
      },20,'linear');
      $('document')
      var pos_this = $(document).scrollTop();
      var pos_target = $( className + ":eq(" + target+ ")" ).offset().top;
      var body = $("html, body");
      body.animate({scrollTop:pos_target},{
        duration: '1300',
        complete: function() { 
          setTimeout(function(){
            unLock();
          },100);
          //console.log('complete');
        }
      });
    };

    var locker = false;

    function lock(){
      locker = true;
    }

    function unLock(){
      locker = false;
    }

    function isLock(){
      return locker;
    }
};
