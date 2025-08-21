// 词法环境的意义： 登记查找变量
class LexicalEnvironment {
  constructor(environmentRecord, outer) {
    // 词法环境里的两个要素： 环境记录项  outer外层词法环境
    this.environmentRecord = environmentRecord;
    this.outerEnvironment = outer;
  }
  // 词法环境的作用： 查找变量
  getIdentifier(identifier) {
    // 词法环境的查找变量的规则： 先在当前环境记录项查找， 如果没有找到， 就去外层环境记录项查找， 直到找到或者外层环境记录项为null
    let env = this;
    while (env) {
      if (env.hasIdentifier(identifier)) {
        return env.environmentRecord.getIdentifier(identifier);

      }
      env = env.outerEnvironment;
    }
    return null;
    // 词法环境的查找变量的规则： 先在当前环境记录项查找， 如果没有找到， 就去外层环境记录项查找， 直到找到或者外层环境记录项为null
  }

  // 词法环境的作用： 绑定变量
  setIdentifier(identifier, value) {
    this.environmentRecord.setIdentifier(identifier, value);
  }

  // 词法环境的作用： 查找变量是否存在
  hasIdentifier(identifier) {
    return this.environmentRecord.hasIdentifier(identifier);
  }


}

module.exports = LexicalEnvironment;
