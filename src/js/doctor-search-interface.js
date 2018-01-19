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

// JSON Doctor Details
// <div class="details">
//   <span class="address"> Address: ${doctor.practices[10].visit_addresss[5]}</span>
//   <span class="phone">Phone: ${doctor.practices[8].phones[0]}</span>
//   <span class="new-patients">Accepting New Patients: ${doctor.practices[0]}</span>
//   <span class="website">Website: ${doctor.practices[11]}</span>
// </div>
