import { doctorSearch } from './../src/js/doctor-search.js';
const apiKey = require('./../.env').apiKey;
$(document).ready(function() {
//Testing set input
  $('#medical-condition-input').val('acne');
  $('#name-input').val('name');

  $('#doctor-finder').submit(function(event) {
    event.preventDefault();
    const name = $('#name-input').val();
    const condition = $('#medical-condition-input').val();



    const searchResults = doctorSearch(apiKey, name, condition);

    searchResults.then(function(response) {
    const doctors = JSON.parse(response);
    console.log(doctors);
    doctors.data.map(function(doctor) {
    if ((doctors.length === 0) || (doctors === null)) {
      $('.output').append(`There are no search results for your query.`
                        );
      } else {
        $('.output').append(`<div class="doctor-list-item">
                              <h4>${doctor.profile.first_name} ${doctor.profile.last_name},</h4> <h5>${doctor.profile.title}</h5>

                            </div>`
                          );

          }
        });
  }, function(error) {
      Error(`There was an error processing your request: ${error.message}`);
    });
    $('#medical-condition-input').val("");
    $('#name-input').val("");
    $('.output').empty();
  });
});

// JSON Doctor Details
// <div class="details">
//   <span class="address"> Address: ${doctor['practices'][10]['visit_addresss'][5]}</span>
//   <span class="phone">Phone: ${doctor['practices'][8]['phones'][0]}</span>
//   <span class="new-patients">Accepting New Patients: ${doctor['practices'][0]}</span>
//   <span class="website">Website: ${doctor['practices'][11]}</span>
// </div>
