function inheritSuperType(SubType, SuperType) {
  let prototype = Object(SuperType.prototype);
  SubType.prototype = prototype;
  SubType.constructor = SubType;
}
function SuperType(nage, age) {
  this.name = name;
  this.age = age;
}
SuperType.prototype.gretting = function () {
  console.log(`Hello, ${this.name}`);
};

function SubType(name, age) {
  SuperType.call(this, name, age);
}

inheritSuperType(SubType, SuperType);

let person = new SubType('Lily', 12);

person.name;
person.age;
person.gretting();

let person2 = new SubType('Lucy', 20);
