// let a=1;
// function foo()
// {
//     let b=2;
//     console.log(a+b);
// }
// foo()


const ContextStack = require('./contextStack.js');
const ExecuteContext = require('./executeContext.js');

const LexicalEnvironment = require('./LexicalEnvironment.js');


const createObjectLexicalEnvironment = require('./objectLexicaEenvironment.js');
let stack = new ContextStack();
new ContextStack();

// 生成全局执行上下文，指定词法环境和this指向
const globalEnv =new ExecuteContext(createObjectLexicalEnvironment(globalThis, null),globalThis)
// 全局环境变量入栈
stack.push(globalEnv);

console.log(stack.getCurrentContext.LexicalEnvironment.getIdentifier("setTimeout"));





