$.index.open();


Alloy.Globals.parent = $.drawer;
$.left.addEventListener('click', function() {
  $.drawer.toggleLeft();
});

$.right.addEventListener('click', function() {
  $.drawer.toggleRight();
});


function chageCenterView() {
  $.drawer.setCenterView(Alloy.createController('details', {
    title: 'Detailed View'
  }).getView());
}