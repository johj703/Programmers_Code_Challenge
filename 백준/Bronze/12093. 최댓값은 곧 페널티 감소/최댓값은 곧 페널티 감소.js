const MAX_LENGTH = 10000;
const ALLOWED_CHARS =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function solve() {
    let output = '';
    for (let i = 0; i < MAX_LENGTH; i += 1) {
        output += ALLOWED_CHARS[i % ALLOWED_CHARS.length];
    }
    console.log(output);
    return output;
}

const actualOutput = solve();