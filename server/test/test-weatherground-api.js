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
  var chaiRequest;

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

});
