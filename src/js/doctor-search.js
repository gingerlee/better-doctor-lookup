const apiKey = require('./../../.env').apiKey;

export function doctorSearch(apiKey, name, condition) {
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
};
