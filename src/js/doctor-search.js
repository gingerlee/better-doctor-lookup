const apiKey = require('./../../.env').apiKey;

export class DoctorList {
  constructor() {
  }

  doctorSearch(apiKey, name, condition) {
    const promise = new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
  const doctors = JSON.parse(response);
  console.log(doctors);

  if (doctors.meta.count > 0) {
    doctors.data.map(function(doctor) {
      $('.output').append(`<div class="doctor-name">
                              <h4>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h4>
                            </div>`
                          );
    doctor.practices.map(function(details) {
      $('.output').append(`<ul class="doctor-details">
                              <li><p>${details.visit_address.street}</p></li>
                              <li><p>${details.visit_address.city}, ${details.visit_address.state} ${details.visit_address.zip}</p></li>
                              <li><p>Phone: ${details.phones[0].number}</p></li>
                            </ul>`
                          );
        if (details.webiste){
          $('.output').append(`<div class="doctor-details">
                                 <p><strong>Website: ${details.webiste}</strong></p>
                                 <br>
                               </div>`
                              );
        } else {
          $('.output').append(`<p><strong>No website available.</strong></p>
          <br>`);
        }
      })
      if (doctor.practices[0].accepts_new_patients === true) {
              $('.output').append(`<p>Accepting New Patients: <strong>Yes</strong></p>`);
            } else {
              $('.output').append(`<p>Accepting New Patients: <strong>No</strong></p>`);
            }
    })
  } else {
    $('.output').append(`There are no search results for your query.`);
    }

  }, function(error) {
      Error(`There was an error processing your request: ${error.message}`);
    });
  }
}
