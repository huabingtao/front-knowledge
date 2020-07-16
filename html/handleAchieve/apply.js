Object.prototype.hasApply = function (context = window, ...params) {
  //     debugger
  context.fnc = this;
  let res = context.fnc(...params);
  delete context.fnc;
  return res;
};

let person = {
  name: 'Lily',
  age: 12,
};

function foo(age) {
  this.age = age + 1;
}

foo.hasApply(person, 2);
