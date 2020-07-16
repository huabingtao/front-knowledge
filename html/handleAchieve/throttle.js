function throttle(fn, wait) {
  let that = this;
  let diffTimer = 0;
  return function () {
    let now = Date.now();
    if (now - diffTimer > wait) {
      fn.apply(this, arguments);
      diffTimer = Date.now();
    }
  };
}
let name = 'Lily';
function gretting() {
  console.log(`Hello, ${name}`);
}
window.addEventListener('scroll', throttle(gretting, 1000, true));
