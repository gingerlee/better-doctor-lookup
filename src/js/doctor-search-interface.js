import { doctorSearch } from './../js/doctor-search.js';
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
    const searchResults = doctorSerach(name, apiKey);
    console.log(doctorSearch);

  //   searchResults.then(function(response) {
  //   const doctors = JSON.parse(response);
  //   doctors.data.map(function(doctor) {
  //   if (doctors.data) {
  //         $('.output').append(`<div class="doctor-list-item">
  //                               <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, MD</h3>
  //                               <div class="address">
  //                                 <span class="location"> Address: ${doctor.practices.visit_addresss}</span>
  //                               </div>
  //                               <span class="phone">Phone: ${doctor.practices.phones.number}</span>
  //                               <span class="website">Website: ${doctor.practices.phones.number}</span>
  //                               <span class="new-patients">Accepting New Patients: ${doctor.practices.accepts_new_patients}</span>
  //                             </div>`
  //                           );
  //       } else {
  //           $('.output').append(`There are search results for your query.`
  //                             );
  //         }
  //       });
  // }, function(error) {
  //     Error(`There was an error processing your request: ${error.message}`);
  //   });
  });
});
