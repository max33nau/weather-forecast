# weather-forecast
An app designed to show you the forecast of weather based on your location.


## User Stories
 - As a user when I first go to the website I want to see my current location,
 date, weather and at least a three day forecast.

 - As a user I want to ability to change the location and get the weather for
 different locations based on the zip code I enter.

 - As a developer I want to use Weather Underground's API to get my weather data
 for my application.

 - As a developer I want to give credit Weather Underground by having a sticky
 footer that displays 'Powered by Weather Underground' along with their logo.

 - As a developer I want to follow Weather Underground's terms of service for
 using their API by linking to their site.

 - As a user I want the page to be responsive so it is easy to use on mobile.

 - As a developer I want the site to meet accessibility and usability requirements,
 so anyone can use my site with ease.

 - As a developer I want to make sure my site is well tested both on the front end and the
 back end.

 - As a user I want the form to have validation so I don't risk entering information that
 is not sufficient.

## Front End is located in the app folder.
 - Main functionality is in the providers/state-provider/
weather-forecast-state folder

 - If you want to preview it quickly you can run npm start in the app folder to run webpack-dev-server

- or you can go here to see it deployed live:
weather-forecast.surge.sh

## Tests
mainly focused on writing back end tests but front end tests are set up and passing

###Weather Underground API tests Steps
  1. To run the tests cd into the server folder and then run npm install in your terminal
  2. Afer npm install has ran, simply run 'npm test' in your terminal and you should pass all your tests

###Front End Protractor
cd into the app folder and run npm install

Protractor
  1. If you do not have webdriver updated, run the command npm run update-webdriver.
  2. After that enter the commands
    - npm run webdriver
    - npm start
    - Make sure both the commands are running in separate terminals.
    - npm run e2e
    - this will run tests on protractor

Karma
 - npm run unit in the app folder


## Stretch Goals

1. Allow users to switch between Farenheit or Celsius,
data is there. Just need to add the functionality.

2. Add drop down menus that give more details about what the future tasks are going to be like.
