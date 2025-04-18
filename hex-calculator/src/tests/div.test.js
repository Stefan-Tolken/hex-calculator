import { div } from '../lib/hex';

describe('Hex Calculator - Divide', () => {
  it('should correctly divide two 2-digit hex values, rounding down', () => {
    expect(div('14', '02')).toBe('A');
    expect(div('FF', '10')).toBe('F');
  });

  it('should return an error when dividing by zero', () => {
    expect(div('10', '00')).toBe('Division by zero is not allowed');
  });

  it('should return an error for invalid inputs', () => {
    expect(div('1A', 'GG')).toBe('Inputs must be valid hexadecimal numbers (00 to FF)');
  });

  it('should accept lowercase hex values', () => {
    expect(div('14', '02')).toBe('A');
    expect(div('ff', '10')).toBe('F');
  });

  it('should round down (floor) when result is not whole', () => {
    expect(div('1F', '03')).toBe('A');
  });
});