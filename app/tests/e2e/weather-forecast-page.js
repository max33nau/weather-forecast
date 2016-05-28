'use strict';

describe('Weather Forcast end 2 end testing', function(){
  it('should have a title of Weather Forecast', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Weather Forecast');
  });
});
