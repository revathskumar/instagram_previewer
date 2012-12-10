var InstagramPreview = {

  showImage: function (e){
    var el = $(e.currentTarget);
    var position = el.offset();
    var width = el.width();
    var url = el.text().trim();
    var host = url.match(/^http\:\/\/instagr\.am*/g);
    if(host === null) return;

    $('#instagram_holder img').attr({
      src: url + (url[url.length - 1] == '/' ? '' : '/')  +"media?size=l",
      width: "298px",
      height: "298px"
    });
    $('#instagram_holder').css({
      left: position.left + width,
      top: position.top
    }).show('slow');
  },

  createHolder: function(){
    $('<div id="instagram_holder"><img></img></div>').appendTo('body');
  },

  hideImage: function () {
    setTimeout(function(){
      $('#instagram_holder').hide('slow');
    },500);
  },

  init: function (){
    this.createHolder();
    $(".twitter-timeline-link").live("mouseover",this.showImage);
    $(".twitter-timeline-link").live("mouseout",this.hideImage);
  }
};

jQuery(function($){
  InstagramPreview.init();
});
