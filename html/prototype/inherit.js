// 原型链继承

function SuperClass() {
  this.name = 'Lily';
}
function SubClass() {}

SubClass.prototype = new SuperClass();
SubClass.prototype.gretting = function () {
  console.log(this.name);
};
let sub = new SubClass();
sub.gretting();

// 借用构造函数继承

function SuperClass(name) {
  this.name = name;
}

function SubClass(name) {
  SuperClass.call(this, name);
}

let sub = new SubClass('Lily');
console.log(sub.name);

// 组合继承

function SuperClass(name, age) {
  this.name = name;
  this.age = age;
}
SuperClass.prototype.gretting = function () {
  console.log(`Hello!, ${this.name}`);
};
function SubClass(name, age) {
  SuperClass.call(this, name, age);
  this.job = 'FEer';
}
SubClass.prototype = new SuperClass();
SubClass.prototype.sayJob = function () {
  console.log(`${this.job} is my job`);
};
let sub = new SubClass('Lily', '20');
sub.gretting();
sub.sayJob();

// 原型继承
var person = {
  name: 'Lily',
  gretting: function () {
    console.log(`Hello!, ${this.name}`);
  },
};
function creatObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let p = creatObject(person);
p.gretting();

// 寄生式继承

var person = {
  name: 'Lily',
  gretting: function () {
    console.log(`Hello!, ${this.name}`);
  },
};
function creatObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function creatInherit(o) {
  let clone = creatObject(o);
  clone.sayName = function () {
    console.log(this.name);
  };
  return clone;
}

var p = creatInherit(person);
p.sayName();
p.gretting();

// 寄生组合式继承
function SuperClass(name, age) {
  this.name = name;
  this.age = age;
}
SuperClass.prototype.gretting = function () {
  console.log(`Hello!, ${this.name}`);
};
function SubClass(name, age) {
  SuperClass.call(this, name, age);
  this.job = 'FEer';
}
function objectInhert(superType, subType) {
  var prototype = Object(superType.prototype);
  subType.prototype = prototype;
  subType.constructor = subType;
}

objectInhert(SuperClass, SubClass);

var instance = new SubClass('Lily', 21);
instance.gretting();
