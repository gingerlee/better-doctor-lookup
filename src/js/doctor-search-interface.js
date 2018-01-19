import { DoctorList } from './../src/js/doctor-search.js';
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
//Testing set input
  $('#medical-condition-input').val('acne');
  $('#name-input').val('name');

  $('#doctor-finder').submit(function(event) {
    event.preventDefault();
    const name = $('#name-input').val();
    const condition = $('#medical-condition-input').val();

    let searchResults = new DoctorList();
    searchResults.doctorSearch(apiKey, name, condition);

    //clear form input and doctor list output
    $('#medical-condition-input').val("");
    $('#name-input').val("");
    $('.output').empty();
  });
});
