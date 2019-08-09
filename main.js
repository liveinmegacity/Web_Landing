$(document).ready(function () {

  var block = $('#idVacancy');
  var top = block.position().top;
  var height = Math.max($(window).height() - top, top);

  block.css('min-height', height);

  /************************/

  $('#idRange > input[type="range"]').on('input', function (event) {
    var range = $(event.currentTarget);
    var value = parseInt(range.val(), 10);
    var w = (value - 1) * 25;

    range.css('background-size', w.toString() + '%');
    range.attr('value', value);

    $('#idRange > .mb-slider__rangepoint')
      .removeClass('mb-slider__rangepoint_active');
    $('#idRange > .mb-slider__rangepoint:nth-child(' + (value + 1) + ')')
      .addClass('mb-slider__rangepoint_active');
  });

  $('#idRange > input[type="range"]').trigger('input');

})