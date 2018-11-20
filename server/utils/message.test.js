var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var result = generateMessage('Narcis', 'Hello World!');
    var from = 'Narcis';
    var text = 'Hello World!';

    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var result = generateLocationMessage('Narcis', 1, 1);
    var from = 'Narcis';
    var url = 'https://www.google.com/maps?q=1,1';

    expect(typeof result.createdAt).toBe('number');
    expect(result).toInclude({from, url});
  });
})
