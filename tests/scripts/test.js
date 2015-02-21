var assert = require("assert");

var Hello = require('../../src/assets/scripts/components/Hello');
var hello = new Hello();

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  }),
  describe('#indexOf2()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  }),
  describe('#hello()', function(){
    it('should return Hello when we call hello.message', function(){
      assert.equal('Hello!!', hello.message);
    });
  });
});

