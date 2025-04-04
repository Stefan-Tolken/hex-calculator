import { mul } from '../lib/hex';

describe('Hex Calculator - Multiply', () => {
  it('should correctly multiply two 2-digit hex values', () => {
    expect(mul('0A', '02')).toBe('14');     // 0x0A * 0x02 = 0x14
    expect(mul('10', '10')).toBe('100');    // 0x10 * 0x10 = 0x100
  });

  it('should cap results at 4-digit hex max', () => {
    expect(mul('FF', 'FF')).toBe('FE01');   // 0xFF * 0xFF = 0xFE01
    expect(mul('FF', '100')).toBe('0');     // Invalid input (too long)
  });

  it('should return 0 for invalid inputs or too long', () => {
    expect(mul('1G', '02')).toBe('0');
    expect(mul('AAAA', '02')).toBe('0');
  });

  it('should accept lowercase hex inputs', () => {
    expect(mul('0a', '02')).toBe('14');
  });
});