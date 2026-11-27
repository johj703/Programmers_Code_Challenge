const fs = require('fs');

function solve(input) {
    const normalized = input.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = normalized.split('\n');
    const count = Number(lines[0].trim());
    const result = [];

    for (let index = 1; index <= count; index += 1) {
        result.push(lines[index].toLowerCase());
    }

    return `${result.join('\n')}\n`;
}

const inputPath = fs.existsSync('/dev/stdin') ? '/dev/stdin' : 'input.txt';
const stdin = fs.readFileSync(inputPath, 'utf8');
process.stdout.write(solve(stdin));