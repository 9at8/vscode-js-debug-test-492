// @ts-check

const { writeFileSync } = require('fs')
const { transformFileSync } = require('@babel/core')

const { code, map } = transformFileSync('./src/app.ts')

writeFileSync('./out/app.js', code)
writeFileSync('./out/app.js.map', JSON.stringify(map))

const { A } = require('./out/app');

console.log((new A()).getFoo())