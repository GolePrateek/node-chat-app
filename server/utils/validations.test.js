const expect = require('expect');

var {isRealString} = require('./validations');

describe('isRealString',()=>{
  it('should reject non-string values',()=>{
    var result = isRealString(2344);
    expect(result).toBe(false);
  });

  it('should reject strings with only spaces',()=>{
    var result = isRealString("    ");
    expect(result).toBe(false);
  });

  it('should allow valid strings for username',()=>{
    var result = isRealString(' Adams ');
    expect(result).toBe(true);
  });
});
