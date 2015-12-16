/**
 * List of bad words.
 */
var rageWords = [
    'fucking',
    'bullshit',
    'crap',
    'jesus',
    'christ',
    'holy',
    'fuck',
    'mother',
    'shit',
    'godverdomme',
    'damn'
];

var _addWordsToChai = function (chai, utils, words) {
    words.forEach(function (word) {
        utils.addChainableMethod(chai.Assertion.prototype, word);
        utils.addProperty(chai.Assertion.prototype, word, function () {});
    });
};

var _filterWords = function (words) {
    if (!Array.isArray(words)) {
        words = [ words ];
    }

    words = words.filter(function (word) {
        if (typeof word === 'string') {
            if (rageWords.indexOf(word) === -1) {
                return true;
            }
        }
        return false;
    });

    return words;
};

module.exports = function (chai, utils) {
    // check if module is initialized with params
    if (typeof chai !== 'string' && !Array.isArray(chai) && typeof utils !== 'undefined') {
        _addWordsToChai(chai, utils, rageWords);
    } else {
        var words = rageWords.concat(_filterWords(chai));

        return function (innerChai, innerUtils) {
            _addWordsToChai(innerChai, innerUtils, words);
        };
    }
};
