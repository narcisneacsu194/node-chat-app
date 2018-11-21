const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const boolVal = isRealString(123);
    expect(boolVal).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const boolVal = isRealString(' ');
    expect(boolVal).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const boolVal = isRealString('str');
    expect(boolVal).toBe(true);
  });
});
