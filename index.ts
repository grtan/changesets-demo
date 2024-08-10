/**
 * vscode会使用root目录的tsconfig.json作为该文件的tsconfig
 * 因为root目录的tscofnig.json没有指定include/files，所以默认包含了所有ts文件，
 * 会将package a,b,c,d中的global.d.ts都包含进来
 */

/**
 * interface会自动合并，所以这里的GlobalObject同时包含了b,c,d三个属性
 */
const globalObject: GlobalObject = {
  b: "xxx",
  c: "yyyy",
  d: "zzzzz",
};

/**
 * type不会自动合并，只会取第一次声明的类型，所以这里只包含了b属性，并不包含c,d属性
 */
const go: GO = {
  b: "xxx",
  // c: "yyyy",
  // d: "zzzzz",
};
