function New(fnc, ...params) {
  let obj = {};
  obj.__proto__ = New.prototype;
  let ret = fnc.apply(obj, params);
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret;
  }
  return obj;
}
