var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var result = generateMessage('Narcis', 'Hello World!');
    var from = 'Narcis';
    var text = 'Hello World!';
    // expect(result.from).toBe('Narcis');
    // expect(result.text).toBe('Hello World!');
    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({from, text});
  });
});
