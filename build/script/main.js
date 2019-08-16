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

    $('#idRange > .mb-slider__rangepoint').removeClass('mb-slider__rangepoint_active');
    $('#idRange > .mb-slider__rangepoint:nth-child(' + (value + 1) + ')').addClass('mb-slider__rangepoint_active');
  });

  $('#idRange > input[type="range"]').trigger('input');

});

/************************/

$(window).on('load', function () {

  jQuery.each($('.mc-indicator-container'), function (_index, element) {
    var indicator = element.contentDocument;

    var title = indicator.getElementsByClassName('mc-indicator__title').item(0);
    var description = indicator.getElementsByClassName('mc-indicator__description').item(0);
    var segment = indicator.getElementsByClassName('mc-indicator__segment').item(0);

    $(title).html($(element).attr('data-title'));
    $(description).html($(element).attr('data-description'));
    $(segment).attr('stroke', $(element).attr('data-color'));
    $(segment).attr('d', describeArc(60, 60, 58, 0, $(element).attr('data-angle')));

  });

});

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {

  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');

  return d;
}