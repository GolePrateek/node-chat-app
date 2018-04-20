const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var text = 'Hi, how are you?';
    var from = 'Bishop Kane';
    var result = generateMessage(from,text);

    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from,text});
  })
});
