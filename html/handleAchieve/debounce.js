function debounce(fn, wait, immediate) {
  let timeout;
  let n = 1;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate && n === 1) {
      fn.apply(context, args);
      n = 0;
    }
    timeout = setTimeout(function () {
      fn.apply(context, args);
      n = 1;
    }, wait);
  };
}
let name = 'Lily';
function gretting() {
  console.log(`Hello, ${name}`);
}
window.addEventListener('scroll', debounce(gretting, 500, true));
