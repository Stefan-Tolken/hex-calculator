import { mul } from '../lib/hex';

describe('Hex Calculator - Multiply', () => {
  it('should correctly multiply two 2-digit hex values', () => {
    expect(mul('0A', '02')).toBe('14');
    expect(mul('10', '10')).toBe('100');
  });

  it('should cap results at 4-digit hex max', () => {
    expect(mul('FF', 'FF')).toBe('FE01');
    expect(mul('FF', '100')).toBe('Input values must not exceed 2 hex digits');
  });

  it('should return an error for invalid inputs or too long', () => {
    expect(mul('1G', '02')).toBe('Inputs must be valid hexadecimal numbers (00 to FF)');
    expect(mul('AAAA', '02')).toBe('Input values must not exceed 2 hex digits');
  });

  it('should accept lowercase hex inputs', () => {
    expect(mul('0a', '02')).toBe('14');
  });
});