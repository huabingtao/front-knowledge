var a = {
  name: 'Lucy',
  proterty: {
    car: ['Toyota', 'BWM', 'Audi'],
  },
};

function getTypeIsObject(obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true;
  }
  return false;
}

function deepClone(obj) {
  // 判断是否为Object
  //     debugger
  let res = Array.isArray(obj) ? [] : {};
  if (!getTypeIsObject(obj)) {
    res = obj;
  } else {
    for (let k in obj) {
      let value = obj[k];
      if (getTypeIsObject(obj)) {
        res[k] = deepClone(value);
      } else {
        res[k] = value;
      }
    }
  }
  return res;
}

var b = deepClone(a);
b.name = 'Lily';
