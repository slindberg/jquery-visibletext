jQuery.fn.visibleText = function() {
  return $.map(this.contents(), function(el) {
    if (el.nodeType === 3) {
      return $(el).text();
    }
    if ($(el).is(':visible')) {
      return $(el).visibleText();
    }
  }).join('');
};
