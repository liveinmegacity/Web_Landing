$(document).ready(function () {
  h = Math.max($(window).height() - $('#idHeader').height(), $('#idVacancy').height());
  $('#idVacancy').css('min-height', h);
})