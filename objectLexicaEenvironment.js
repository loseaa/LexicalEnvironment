const lexicalEnvironment = require('./LexicalEnvironment.js');
const environmentRecord = require('./environmentRecord.js');

function createObjectLexicalEnvironment(object,outer) {
    const env = new lexicalEnvironment(new environmentRecord(object),outer);
    return env;
}

module.exports = createObjectLexicalEnvironment;


