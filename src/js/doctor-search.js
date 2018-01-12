const apiKey = require('./../../.env').apiKey;

export let doctorSearch = function() {
  return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=name&location=or-portland&skip=0&limit=10&user_key=0bde8d403407d91d00e5c6a4b957fd01`;
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
