var chai = require('chai');
var expect = chai.expect;

describe('test rage without init', function () {
    var rage = require('../');
    chai.use(rage);

    before(function () {
        this.someVar = 'helloworld';
    });

    it('should have length', function () {
        expect(this.someVar).to.fucking.have.length(10);
    });

    it('should be an string', function () {
        expect(this.someVar).to.jesus.not.be.a.mother.fucking('object');
        expect(this.someVar).to.not.be.a('object');
        expect(this.someVar).to.fucking.equal('helloworld');
        expect(this.someVar).to.equal('helloworld');
        expect(this.someVar).fucking.to.crap.equal('helloworld');
        expect(this.someVar).not.to.be.a.fucking('integer');
        expect(this.someVar).not.to.be.a('integer');
        expect(this.someVar).fucking.to.be.mother.fucking.a.bullshit('string');
    });
});

describe('test rage with custom word', function () {
    var rage = require('../')('badword1');
    chai.use(rage);

    before(function () {
        this.someObj = {
            hello: 'world'
        };
    });

    it('should have property "hello"', function () {
        expect(this.someObj).to.fucking.have.property('hello');
    });

    it('should be an object', function () {
        expect(this.someObj).to.be.badword1.a.mother.fucking.object;
        expect(this.someObj).not.to.fucking.be.a.badword1('float');
        expect(this.someObj).not.to.a('float');
    });
});

describe('test rage with custom word array and word already built in', function () {
    var rage = require('../')(['badword2', 'badword3', 'fucking', {}]);
    chai.use(rage);

    before(function () {
        this.someArr = ['p1', 23, 'p2'];
    });

    it('should have length', function () {
        expect(this.someArr).to.fucking.have.length(3);
    });

    it('should be an array', function () {
        expect(this.someArr).to.badword3.not.be.a.mother.fucking('object');
        expect(this.someArr).not.to.badword1.badword2.be.a.fucking('integer');
    });
});


