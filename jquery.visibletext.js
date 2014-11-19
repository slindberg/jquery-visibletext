;(function($) {
  $.fn.visibleText = function() {
    if (!this.is(':visible')) {
      return '';
    }

    return $.map(this.contents(), function(el) {
      return el.nodeType === 3 ? $(el).text() : $(el).visibleText();
    }).join('');
  };
}(jQuery));
