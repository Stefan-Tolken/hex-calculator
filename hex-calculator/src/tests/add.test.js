import { add } from '../lib/hex';

describe('Hex Calculator - Add', () => {
  it('should correctly add two 2-digit hex values', () => {
    expect(add('1A', '2B')).toBe('45');
    expect(add('FF', '01')).toBe('100');
  });

  it('should accept lowercase hex inputs', () => {
    expect(add('1a', '2b')).toBe('45');
    expect(add('ff', '01')).toBe('100');
  });

  it('should return 0 for invalid hex inputs', () => {
    expect(add('G1', '2B')).toBe('0');
    expect(add('1A', '@$')).toBe('0');
  });

  it('should restrict inputs to two characters max', () => {
    expect(add('1A3', '2B')).toBe('0');
    expect(add('1A', '2B7')).toBe('0');
  });

  it('should not exceed four-digit hex result', () => {
    expect(add('FFFF', '1')).toBe('0');
    expect(add('FF', 'FF')).toBe('1FE');
  });
});