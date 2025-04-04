import { add } from '../lib/hex';

describe('Hex Calculator - Add', () => {
  it('should correctly add two 2-digit hex values', () => {
    expect(add('1A', '2B')).toBe('45');
    expect(add('FF', '01')).toBe('100');
  });
});