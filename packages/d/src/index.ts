export function print() {
  console.log("module d xx");
}

const dev = __DEV__;
const test = __TEST__;
const version = __VERSION__;

/**
 * GlobalObject和GO为package d中声明的全局类型
 */
const globalObject: GlobalObject = {
  d: "d",
};
const go: GO = {
  d: "d",
};
