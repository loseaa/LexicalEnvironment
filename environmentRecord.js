class environmentRecord{
    constructor(object) {
        this.bindings = object;
    }
    getIdentifier(identifier) {
        return this.bindings[identifier];
    }
    setIdentifier(identifier, value) {
        this.bindings[identifier] = value;
    }
    hasIdentifier(identifier) {
        return identifier in this.bindings;
    }

}
module.exports = environmentRecord;
