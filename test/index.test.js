var expect = require('chai').expect;

var myEvery = require('../index').myEvery;


describe('Function myEvery in recursive', function() {

  it('Empty array should return true', function() {
    expect(myEvery([])).to.be.true;
  });

  it('Array with one element false should return false', function() {
    expect(myEvery([false])).to.be.false;
  });

  it('Array with one element true should return true', function() {
    expect(myEvery([true])).to.be.true;
  });

  it('Array with 2 elements true & false should return false', function() {
    expect(myEvery([true, false])).to.be.false;
  });

  it('Array with 3 elements true & false & true should return false', function() {
    expect(myEvery([true, false, true])).to.be.false;
  });

});