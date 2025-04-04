function isValidHex(input) {
    return /^[0-9a-fA-F]{1,2}$/.test(input);
}

export function add(hex1, hex2) {
    if (!isValidHex(hex1) || !isValidHex(hex2)) {
        return '0';
    }

    const dec1 = parseInt(hex1, 16);
    const dec2 = parseInt(hex2, 16);
    const sum = dec1 + dec2;

    if (sum > 0xFFFF) {
        return '0';
    }

    return sum.toString(16).toUpperCase();
}

export function sub(hex1, hex2) {
    if (!isValidHex(hex1) || !isValidHex(hex2)) {
        return '0';
    }

    const dec1 = parseInt(hex1, 16);
    const dec2 = parseInt(hex2, 16);
    const diff = dec1 - dec2;

    if (diff < 0) {
        return '0';
    }

    return diff.toString(16).toUpperCase();
}

export function mul(hex1, hex2) {
    if (!isValidHex(hex1) || !isValidHex(hex2)) {
        return '0';
    }

    const dec1 = parseInt(hex1, 16);
    const dec2 = parseInt(hex2, 16);
    const product = dec1 * dec2;

    if (product > 0xFFFF) {
        return '0';
    }

    return product.toString(16).toUpperCase();
}

export function div(hex1, hex2) {
    if (!isValidHex(hex1) || !isValidHex(hex2)) {
        return '0';
    }

    const dec1 = parseInt(hex1, 16);
    const dec2 = parseInt(hex2, 16);

    if (dec2 === 0) {
        return '0';
    }

    const quotient = Math.floor(dec1 / dec2);

    return quotient.toString(16).toUpperCase();
}