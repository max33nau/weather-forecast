'use strict';
require('assert');
require('dotenv').config(); // Evaluates environment specific variables ini my .env file
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

// This is used for older web browsers that do not have native promise support
if (!global.Promise) { // Retrieved from https://github.com/chaijs/chai-http
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

describe('Weather Underground API ', function(){
  let chaiRequest;
  let zipcode = '97267';
  let language = 'EN';
  before(function(done){
    chaiRequest = chai.request('http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API);
    done();
  });

  it('should allow me to make a GET request to the weather underground API using my secret key',function(done){
    chaiRequest.get('/')
      .then(function(response){
        expect(response).to.have.status(200);
        done();
      })
      .catch(done);
  });

  it('should allow me to get location data and current conditions with a zipcode', function(done){
    chaiRequest.get('/conditions/lang:'+language+'/q/'+zipcode+'.json')
      .then(function(response){
        expect(response).to.have.status(200);
        expect(response.body.current_observation.display_location.city).to.deep.equal('Portland');
        expect(response.body.current_observation.display_location.state).to.deep.equal('OR');
        expect(response.body.current_observation.display_location.zip).to.deep.equal('97267');
        expect(response.body.current_observation.display_location.country).to.deep.equal('US');
        expect(response.body.current_observation).to.have.any.keys('temp_f', 'weather', 'feelslike_f','icon_url','forcast_url', 'temperature_string');
        expect(response.body.current_observation.image).have.any.keys('url', 'title', 'link');
        done();
      })
      .catch(done);
  });

  it('should allow me to get the forecast for the next three days', function(done){
    chaiRequest.get('/forecast/lang:'+language+'/q/'+zipcode+'.json')
      .then(function(response){
        expect(response).to.have.status(200);
        expect(response.body.forecast.simpleforecast.forecastday.length).to.deep.equal(4); // Today and then the next 3 days of forecast
        expect(response.body.forecast.simpleforecast.forecastday[0]).to.have.any.keys('conditions', 'icon_url', 'high', 'low', 'date');
        done();
      })
      .catch(done);
  });

  language = 'SP'; // Allow the user to view the weather data in SPANISH
  let monthsInSpanish = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre','dicembre'];
  it('should allow me to get the forecast for the next three days IN SPANISH', function(done){
    chaiRequest.get('/forecast/lang:'+language+'/q/'+zipcode+'.json')
      .then(function(response){
        expect(response).to.have.status(200);
        let monthExists = monthsInSpanish.indexOf(response.body.forecast.simpleforecast.forecastday[0].date.monthname.toLowerCase());
        expect(monthExists).to.not.equal(-1); // monthExists will be -1 if the month does not exist in the monthsInSpanish array
        done();
      })
      .catch(done);
  });

});
