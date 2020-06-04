// @ts-check

const { writeFileSync } = require('fs')
const { transformFileSync } = require('@babel/core')

const { code, map } = transformFileSync('./src/app.ts', { sourceRoot: '../src' })

writeFileSync('./out/app.js', code + '\n\n//# sourceMappingURL=app.js.map')
writeFileSync('./out/app.js.map', JSON.stringify(map))

const { A } = require('./out/app');

console.log((new A()).getFoo())
