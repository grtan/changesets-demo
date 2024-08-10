import { print as aPrint } from "@greenhand/changeset-demo-a";
import { print as bPrint } from "@greenhand/changeset-demo-b";

export function print() {
  aPrint();
  bPrint();
  console.log("module c");
}

/**
 * 每个package都有自己的tsconfig.json
 * vscode的也能智能识别，这里的__DEV__类型是string，不会跟package d中的__DEV__类型混淆
 */
const dev = __DEV__;
const test = __TEST__;
// const version = __VERSION__;

/**
 * GlobalObject和GO为package c中声明的全局类型
 */
const globalObject: GlobalObject = {
  c: "c",
};
const go: GO = {
  c: "c",
};
