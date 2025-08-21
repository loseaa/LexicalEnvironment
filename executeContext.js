class ExecuteContext {
  constructor(LexicalEnvironment,thisArg) {
    this.LexicalEnvironment = LexicalEnvironment
    this.thisArg = thisArg;
    this.variableEnvironment = LexicalEnvironment;
  }
}

module.exports = ExecuteContext;
