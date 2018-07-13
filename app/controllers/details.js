// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.pageLabel.setText(args.title);
$.pageTitleLabel.setText(args.title);

$.left.addEventListener('click', function() {
  Alloy.Globals.parent.toggleLeft();
});

$.right.addEventListener('click', function() {
  Alloy.Globals.parent.toggleRight();
});