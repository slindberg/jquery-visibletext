## jQuery `visibleText` plugin

This plugin adds the `.visibleText()` method to jQuery objects for finding the *visible* text contained within an element. The output differs from `.text()` in cases where child elements that contain text are visually hidden:

```html
<div id="content">
  This is <span style="display:none;">not</span> useful.
</div>
```

```javascript
$('#content').text(); // 'This is not useful.'

$('#content').visibleText(); // 'This is  useful.'
```

Visibility of an element is determined using [jQuery's `:visible` selector](http://api.jquery.com/visible-selector/). The plugin performs a full traversal of all child elements, recursively calling `visibleText` until text nodes are found, and therefore performs poorly when called on elements with a large number of descendants. Also note that `visibleText` will return an empty string when called directly on a text node selector.

See [this Stack Overflow question](http://stackoverflow.com/questions/17754134/get-only-visible-text-with-jquery/22518704) for more details.

Install via bower:

```sh
$ bower install jquery-visibletext
```
