const apiKey = require('./../../.env').apiKey;

export class DoctorList {
  constructor() {
  }

  doctorSearch(apiKey, name, condition) {
  return new Promise(function(resolve, reject) {
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
};
