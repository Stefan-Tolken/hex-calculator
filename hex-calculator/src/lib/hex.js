export function add(hex1, hex2) {
    const dec1 = parseInt(hex1, 16);
    const dec2 = parseInt(hex2, 16);

    const sum = dec1 + dec2;
    
    return sum.toString(16).toUpperCase();
}