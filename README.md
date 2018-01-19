# BetterDoctor API Lookup

#### Asynchrony and APIs in JavaScript, January 12, 2018

### _By Ginger Lee Kretschmer_

##  Description

**APIs in Action:** A website where users may enter a medical issue (e.g.: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city using the BetterDoctor API call..

## Installation

1. _`$ git clone` [https://github.com/gingerlee/better-doctor-lookup.git](https://github.com/gingerlee/better-doctor-lookup.git)_

2. _`$ cd better-doctor-lookup`_

3.  _`$ npm install`_

4. _`$ bower install`_

5. _`$ gulp serve`_

## API Authorization

1. Visit the [BetterDoctor API](https://developer.betterdoctor.com/) website.
2. Sign up for a free account.
3. Under "My Account" tab in the navigation bar  click the "Applications" link.
4. Click the "Create New App" button and get a new API authorization key.
5. Create a new file in the top level of the project with the name ".env".
6. Add the export statement below to the file with your new API key in the quotes.

`exports.apiKey = "INSERT YOUR API KEY HERE";`


## Technologies Used
* JavaScript (ES6)
* jQuery
* Node
* Gulp
* HTML
* CSS
* SASS
* Materialize
