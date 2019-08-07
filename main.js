$(document).ready(function () {
  h = Math.max($(window).height() - $('#idHeader').height(), $('#idVacancy').height());
  h = Math.max($(window).height() - $('#idVacancy').position().top, $('#idVacancy').height());
  $('#idVacancy').css('min-height', h);
})