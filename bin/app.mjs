#!/usr/bin/env node

import fs from 'node:fs/promises';

// console.log(process.argv);

const file = await fs.readFile(`${process.argv[2]}`, 'utf8');

const obj = {}

for (const line of file.split('\n')) {
    let regex = /[\W]+/;
    for (const word of line.toLocaleLowerCase().split(regex).filter((w) => w !== '')) {
        obj[word] = obj[word] ? obj[word] + 1 : 1
    }
}

console.log(obj[process.argv[3]] ? obj[process.argv[3]] : obj);
