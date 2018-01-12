import { doctorSearch } from './../src/js/doctor-search.js';
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
//Testing set input
  // $('#medical-condition-input').val('acne');
  $('#name-input').val('name');

  $('#doctor-finder').submit(function(event) {
    event.preventDefault();
    const searchType = $('#medical-condition-input').val();
    const condition = $('#medical-condition-input').val();
    const name = $('#name-input').val();
//Clear forms
    // $('#medical-condition-input').val("");
    // $('#name-input').val("");
    const searchResults = doctorSearch(apiKey, name);

    searchResults.then(function(response) {
    const doctors = JSON.parse(response);
    console.log(doctors);
    doctors.data.map(function(doctor) {
    if (doctors.data) {
          $('.output').append(`<div class="doctor-list-item">
                                <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>

                              </div>`
                            );
        } else {
            $('.output').append(`There are search results for your query.`
                              );
          }
        });
  }, function(error) {
      Error(`There was an error processing your request: ${error.message}`);
    });
  });
});
