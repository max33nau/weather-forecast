'use strict';

describe('Weather Forcast end 2 end testing', function(){
  it('should have a title of Weather Forecast', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Weather Forecast');
  });

  it('should redirect you to the weather forecast if you enter the wrong extended URL', function(){
    browser.get('/#/not-correct-url');
    expect(browser.getTitle()).toEqual('Weather Forecast');
  });
});
