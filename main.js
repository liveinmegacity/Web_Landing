$(document).ready(function () {

  var block = $('#idVacancy');
  var top = block.position().top;
  var height = Math.max($(window).height() - top, top);

  block.css('min-height', height);

  /************************/

  $('#idRange').on('input', function (event) {
    var range = $(event.currentTarget);
    var w = (parseInt(range.val(), 10) - 1) * 25;
    range.css('background-size', w.toString() + '%');
  });

  $('#idRange').trigger('input');

})