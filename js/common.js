$('.main').t({
  mistype: 10,
  pause_on_click: true,
  caret: '<span style="color:hotpink;">▌</span>',
  typing: function (elm, chr) {
      if (chr.match(/skyblue/))
          elm.find('.t-caret').hide();
      else if (chr.match(/__caret/))
          elm.find('.t-caret').show();
  }
});