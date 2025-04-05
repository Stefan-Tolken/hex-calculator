import { div } from '../lib/hex';

describe('Hex Calculator - Divide', () => {
  it('should correctly divide two 2-digit hex values, rounding down', () => {
    expect(div('14', '02')).toBe('A');        // 0x14 / 0x02 = 0x0A
    expect(div('FF', '10')).toBe('F');        // 0xFF / 0x10 = 0x0F
  });

  it('should return 0 when dividing by zero', () => {
    expect(div('10', '00')).toBe('0');
  });

  it('should return 0 for invalid inputs', () => {
    expect(div('1A', 'GG')).toBe('0');
  });

  it('should accept lowercase hex values', () => {
    expect(div('14', '02')).toBe('A');
    expect(div('ff', '10')).toBe('F');
  });

  it('should round down (floor) when result is not whole', () => {
    expect(div('1F', '03')).toBe('A');        // 0x1F / 0x03 = 10.3 → floor → 0x0A
  });
});