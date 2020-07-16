function isUrl(url) {
  // https://developer.mozilla.org/
  let pattern = /[a-zA-Z]+:\/\/[a-zA-Z0-9_]+\.\w+/;
  if (pattern.test(url)) {
    return true;
  }
  return false;
}

function isPhone(num) {
  // 1--以1为开头；
  // 2--第二位可为3,4,5,6,7,8,9中的任意一位；
  // 3--最后以0-9的9个整数结尾。
  let pattern = /1[3|4|5|6|7|8|9]\d{9}/;
  if (pattern.test(num)) {
    return true;
  }
  return false;
}

function isEmail(email) {
  // hbt123@123we.com
  let pattern = /[a-zA-Z_\-\.]+@[a-zA-Z_\-\.]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}
