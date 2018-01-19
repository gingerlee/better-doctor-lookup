(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0bde8d403407d91d00e5c6a4b957fd01";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiKey = require('./../../.env').apiKey;

var DoctorList = exports.DoctorList = function () {
  function DoctorList() {
    _classCallCheck(this, DoctorList);
  }

  _createClass(DoctorList, [{
    key: 'doctorSearch',
    value: function doctorSearch(apiKey, name, condition) {
      var promise = new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&query=' + condition + '&location=or-portland&skip=0&limit=10&user_key=' + apiKey;

        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });

      promise.then(function (response) {
        var doctors = JSON.parse(response);
        console.log(doctors);

        if (doctors.meta.count > 0) {
          doctors.data.map(function (doctor) {
            $('.output').append('<div class="doctor-name">\n                              <h4>' + doctor.profile.first_name + ' ' + doctor.profile.last_name + ',</h4> <h5>' + doctor.profile.title + '</h5>\n                            </div>');
            doctor.practices.map(function (details) {
              $('.output').append('<ul class="doctor-details">\n                              <li><p>' + details.visit_address.street + '</p></li>\n                              <li><p>' + details.visit_address.city + ', ' + details.visit_address.state + ' ' + details.visit_address.zip + '</p></li>\n                              <li><p>Phone: ' + details.phones[0].number + '</p></li>\n                            </ul>');
              if (details.webiste) {
                $('.output').append('<div class="doctor-details">\n                                 <p><strong>Website: ' + details.webiste + '</strong></p>\n                                 <br>\n                               </div>');
              } else {
                $('.output').append('<p><strong>No website available.</strong></p>\n          <br>');
              }
            });
          });
        } else {
          $('.output').append('There are no search results for your query.');
        }
      }, function (error) {
        Error('There was an error processing your request: ' + error.message);
      });
    }
  }]);

  return DoctorList;
}();

},{"./../../.env":1}],3:[function(require,module,exports){
'use strict';

var _doctorSearch = require('./../src/js/doctor-search.js');

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  //Testing set input
  $('#medical-condition-input').val('acne');
  $('#name-input').val('name');

  $('#doctor-finder').submit(function (event) {
    event.preventDefault();
    var name = $('#name-input').val();
    var condition = $('#medical-condition-input').val();

    var searchResults = new _doctorSearch.DoctorList();
    searchResults.doctorSearch(apiKey, name, condition);

    //clear form input and doctor list output
    $('#medical-condition-input').val("");
    $('#name-input').val("");
    $('.output').empty();
  });
});

},{"./../.env":1,"./../src/js/doctor-search.js":2}]},{},[3]);
