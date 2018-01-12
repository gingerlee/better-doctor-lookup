(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0bde8d403407d91d00e5c6a4b957fd01";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doctorSearch = doctorSearch;
var apiKey = require('./../../.env').apiKey;

function doctorSearch(apiKey) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    var url = "https://api.betterdoctor.com/2016-03-01/doctors?name=name&location=or-portland&skip=0&limit=10&user_key=" + apiKey;

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
};

},{"./../../.env":1}],3:[function(require,module,exports){
'use strict';

var _doctorSearch = require('./../src/js/doctor-search.js');

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  //Testing set input
  // $('#medical-condition-input').val('acne');
  $('#name-input').val('name');

  $('#doctor-finder').submit(function (event) {
    event.preventDefault();
    var searchType = $('#medical-condition-input').val();
    var condition = $('#medical-condition-input').val();
    var name = $('#name-input').val();
    //Clear forms
    // $('#medical-condition-input').val("");
    // $('#name-input').val("");
    var searchResults = (0, _doctorSearch.doctorSearch)(apiKey);
    console.log(searchResults);

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

},{"./../.env":1,"./../src/js/doctor-search.js":2}]},{},[3]);
