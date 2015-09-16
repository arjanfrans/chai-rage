var chai = require('chai');
var expect = chai.expect;

// Initialize with an array of custom words.
var rage = require('../lib/index.js')(['badword1', 'anotherbadword']);

// Or just one extra word
// var rage = require('../lib/index.js')('badword1');

// With no call and parameters, use built in rage words.
var rage = require('../lib/index.js');
chai.use(rage);

console.log(expect([]).to.have.length(0));
console.log(expect(true).to.be.fucking.true);
console.log(expect(true).to.be.fucking.true);
// console.log(expect(true).not.badword1.anotherbadword.equal(false));
// console.log(expect(true).to.be.shitty.true);
console.log(expect([]).to.have.fucking.length(0));
console.log(expect([]).to.fucking.not.have.fucking.length(1));
console.log(expect({ t: true }).fucking.to.have.property('t'));
// console.log(expect({ t: true }).to.mother.bullshit.fucking.to.have.mother.fucking.property('t'));
