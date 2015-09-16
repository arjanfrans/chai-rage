# chai-rage

[![NPM](https://nodei.co/npm/chai-rage.png?compact=true)](https://www.npmjs.com/package/chai-rage)

[![Build Status](https://travis-ci.org/arjanfrans/chai-rage.svg)](https://travis-ci.org/arjanfrans/chai-rage)
[![Coverage Status](https://coveralls.io/repos/arjanfrans/chai-rage/badge.svg?branch=master&service=github)](https://coveralls.io/github/arjanfrans/chai-rage?branch=master)
[![devDependency Status](https://david-dm.org/arjanfrans/chai-rage/dev-status.svg)](https://david-dm.org/arjanfrans/chai-rage#info=devDependencies)

A plugin for [Chai Assertion Library](http://chaijs.com/) that allows you to rage in your test code.

It basically allows you to use custom words in an assertion chain. The added words do not do anything.

**WARNING:** Source code contains bad words!

*In case you didn't get it yet; do not use this plugin for anything serious.*

## Installation

```
npm install --save-dev chai-rage
```

## Example

```Javascript
var chai = require('chai');
var expect = chai.expect;

// Initialize with custom rage words. Look in the source code for built in words.
var rage = require('chai-rage')(['anarray', 'ofof', 'badword', 'ssss']);

chai.use(rage);

describe('some test', function () {

    it('allows use of custom words', function () {
        expect(['test', 'test2']).to.have.badword.length(2);
        expect(['test', 'test2']).to.not.be.a.badword('integer');
    });

});
```

See [examples](https://github.com/arjanfrans/chai-rage/tree/master/example).
