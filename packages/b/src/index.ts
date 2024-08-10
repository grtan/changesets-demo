export function print() {
  console.log("module b");
}

/**
 * 每个package都有自己的tsconfig.json
 * vscode的也能智能识别，这里没有声明全局的__DEV__,__TEST__,__VERSION__
 */
// const dev = __DEV__;
// const test = __TEST__;
// const version = __VERSION__;

/**
 * GlobalObject和GO为package b中声明的全局类型
 */
const globalObject: GlobalObject = {
  b: "b",
};
const go: GO = {
  b: "b",
};
