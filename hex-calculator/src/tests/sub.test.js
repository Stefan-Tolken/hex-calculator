import { sub } from '../lib/hex';

describe('Hex Calculator - Subtract', () => {
  it('should correctly subtract two 2-digit hex values', () => {
    expect(sub('2B', '1A')).toBe('11');     // 0x2B - 0x1A = 0x11
    expect(sub('FF', '0F')).toBe('F0');     // 0xFF - 0x0F = 0xF0
  });

  it('should return 0 if result is negative', () => {
    expect(sub('1A', '2B')).toBe('0');      // 0x1A - 0x2B < 0
  });

  it('should accept lowercase hex inputs', () => {
    expect(sub('ff', '0f')).toBe('F0');
  });

  it('should return 0 for invalid hex inputs or too long', () => {
    expect(sub('GG', '1A')).toBe('0');
    expect(sub('123', '01')).toBe('0');
  });
});