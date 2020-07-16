Object.prototype.hasBind = function (context, ...params) {
  thatFnc = this;

  let resFn = function () {
    let arg = [...params].concat(...arguments);
    return thatFnc.apply(thatFnc instanceof resFn ? thatFnc : context, arg);
  };
  resFn.prototype = this.prototype;
  return resFn;
};
var name = 'Lucy';

var person = {
  name: 'Lily',
  greeting: function () {
    console.log(`hello, ${this.name}`);
  },
  age: 12,
};
var gretting = person.greeting;
gretting(); // hello, Lucy
var bindGre = gretting.hasBind(person);
bindGre(); // hello, Lily
