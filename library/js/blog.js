(function($){

  $.fn.pin = function(){

    var $this = this,
          maxWinWidth = 768,
          pinned = false,
          $clone,
          winWidth = $(window).width();
    
    $clone = $this.clone();
    $clone.addClass("pinned").hide();
    $("BODY").append($clone)

    var pin = function(){
      $clone.show();
      $this.css('visibility','hidden');
      pinned = true;
    }

    var unpin = function(){
      $clone.hide();
      $this.css('visibility','visible');
      pinned = false;
    }
      
    $(window).resize(function(){
      winWidth = $(window).width();
      if (winWidth < maxWinWidth){
        unpin();
      }
    });

    $(window).scroll(function(){
      var top = $this.offset().top - $(window).scrollTop();
      if (top <= 0 && !pinned && winWidth >= maxWinWidth) {
        pin();
      }else if (top > 0 && pinned){
        unpin();
      }
    });

  };

})(jQuery);

jQuery(function(){

  jQuery(".main-nav").pin();

  var icm = parseInt(jQuery(".inner-container").css("margin-top")),
        header = jQuery(".header"),
        logo = header.find("#logo");
      
  jQuery(window).scroll(function(){
    var sT = jQuery(window).scrollTop();
    if (sT < icm) {
      header.css("top", -1 * sT/2);
    } 
  });

});

