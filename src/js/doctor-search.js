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
                              <h4>${doctor.profile.first_name} ${doctor.profile.last_name},</h4> <h5>${doctor.profile.title}</h5>
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
          $('.output').append(`<ul class="doctor-details">
                                 <li><p>Website: ${details.webiste}</p></li>
                               </ul>`
                              );
        } else {
          $('.output').append(`No website available.`);
        }
      })
    })
  } else {
    $('.output').append(`There are no search results for your query.`);
    }

  }, function(error) {
      Error(`There was an error processing your request: ${error.message}`);
    });
  }
}
