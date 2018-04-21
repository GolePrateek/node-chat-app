const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var text = 'Hi, how are you?';
    var from = 'Bishop Kane';
    var result = generateMessage(from,text);

    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from,text});
  })
});

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Pope';
    var lat = 12.2323;
    var long = 78.24423;
    var url = `https://www.google.com/maps?q=${lat},${long}`
    var result = generateLocationMessage(from,lat,long);

    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from,url});
  });
});
