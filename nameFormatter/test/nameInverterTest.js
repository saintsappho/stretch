const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("should return an empty string if passed an empty string", function(){
    assert.strictEqual(nameInverter(''), '');
  });
  it("should return a single name if passed a single name", function(){
    assert.strictEqual(nameInverter('Jerry'), 'Jerry');
  });
  it("should return lastName, firstName if passed firstName, LastName", function(){
    assert.strictEqual(nameInverter('Jerry Gibbons'), 'Gibbons, Jerry');
  });
  it("should return Honorific lastName, firstName if passed firstName, LastName", function(){
    assert.strictEqual(nameInverter('Dr. Jerry Gibbons'), 'Dr. Gibbons, Jerry');
  });
  it("should return an empty string if passed only an Honorific", function(){
    assert.strictEqual(nameInverter('Mr.'), '');
  });
  it("should return an empty string if passed only an Honorific", function(){
    assert.strictEqual(nameInverter('Mrs.'), '');
  });
  it("should return an Honorific and one name if passed an Honorific and one name", function(){
    assert.strictEqual(nameInverter('Mrs. Jennifer'), 'Mrs. Jennifer');
  });
  it("should ignore extra spaces in a single name", function(){
    assert.strictEqual(nameInverter('Jerry  '), 'Jerry');
  });
  it("should ignore extra spaces in a firstName and lastName", function(){
    assert.strictEqual(nameInverter('  Jennifer  Eggerton '), 'Eggerton, Jennifer');
  });
  it("should ignore extra spaces in a firstName and lastName with an Honorific", function(){
    assert.strictEqual(nameInverter(' Mrs.  Jennifer  Eggerton '), 'Mrs. Eggerton, Jennifer');
  });
  it("should return an Error if name is undefined", function(){
    assert.strictEqual(nameInverter(undefined), 'Error');
  });
});
