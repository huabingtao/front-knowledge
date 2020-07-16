var a = {
  name: 'Lucy',
  age: [1, 2, 3],
};
function jsonStringify(obj) {
  let type = typeof obj;
  if (type !== 'object') {
    if (/string|undefined|function/.test(type)) {
      obj = `"${String(obj)}"`;
    }
    return String(obj);
  } else {
    // 如果是 object 类型
    let res = [];
    let isArray = Array.isArray(obj);
    Object.keys(obj).forEach((key) => {
      let type = typeof obj[key];
      let value = obj[key];
      if (/string|undefined|function/.test(type)) {
        value = `"${String(value)}"`;
      } else {
        // 递归
        value = jsonStringify(value);
      }
      // 如果是迭代的对象是数组就直接Push 否则push xx:xxx的形式
      res.push(isArray ? `${String(value)}` : `"${key}":${String(value)}`);
    });
    return isArray ? `[${String(res)}]` : `{${String(res)}}`;
  }
}
jsonStringify(a);
