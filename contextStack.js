
class ContextStack {
  constructor() {
    this.contextStack = [];
  }
  push(context) {
    this.contextStack.push(context);
  }
  pop() {
    this.contextStack.pop();
  }
  get getCurrentContext() {
    return this.contextStack[this.contextStack.length - 1];
  }
}

module.exports = ContextStack;
