function isValidHex(input) {
  return /^[0-9a-fA-F]{1,2}$/.test(input);
}

function validateHexInputs(hex1, hex2) {
  if (hex1.length > 2 || hex2.length > 2) {
    return 'Input values must not exceed 2 hex digits';
  }

  if (!isValidHex(hex1) || !isValidHex(hex2)) {
    return 'Inputs must be valid hexadecimal numbers (00 to FF)';
  }

  return null;
}

export function add(hex1, hex2) {
  const error = validateHexInputs(hex1, hex2);
  if (error) return error;

  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  const sum = dec1 + dec2;

  if (sum > 0xFFFF) {
    return 'Result exceeds 4 hex digits';
  }

  return sum.toString(16).toUpperCase();
}

export function sub(hex1, hex2) {
  const error = validateHexInputs(hex1, hex2);
  if (error) return error;

  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  const diff = dec1 - dec2;

  if (diff < 0) {
    return 'Subtraction cannot result in a negative value';
  }

  return diff.toString(16).toUpperCase();
}

export function mul(hex1, hex2) {
  const error = validateHexInputs(hex1, hex2);
  if (error) return error;

  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);
  const product = dec1 * dec2;

  if (product > 0xFFFF) {
    return 'Result exceeds 4 hex digits';
  }

  return product.toString(16).toUpperCase();
}

export function div(hex1, hex2) {
  const error = validateHexInputs(hex1, hex2);
  if (error) return error;

  const dec1 = parseInt(hex1, 16);
  const dec2 = parseInt(hex2, 16);

  if (dec2 === 0) {
    return 'Division by zero is not allowed';
  }

  const quotient = Math.floor(dec1 / dec2);

  return quotient.toString(16).toUpperCase();
}