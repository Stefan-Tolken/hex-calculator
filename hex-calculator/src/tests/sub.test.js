import { sub } from '../lib/hex';

describe('Hex Calculator - Subtract', () => {
  it('should correctly subtract two 2-digit hex values', () => {
    expect(sub('2B', '1A')).toBe('11');
    expect(sub('FF', '0F')).toBe('F0');
  });

  it('should return an error if result is negative', () => {
    expect(sub('1A', '2B')).toBe('Subtraction cannot result in a negative value');
  });

  it('should accept lowercase hex inputs', () => {
    expect(sub('ff', '0f')).toBe('F0');
  });

  it('should return an error for invalid hex inputs or too long', () => {
    expect(sub('GG', '1A')).toBe('Inputs must be valid hexadecimal numbers (00 to FF)');
    expect(sub('123', '01')).toBe('Input values must not exceed 2 hex digits');
  });
});