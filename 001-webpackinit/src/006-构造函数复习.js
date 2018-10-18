/**
 * 什么是静态属性、静态方法
 * 被构造函数或类直接访问到的属性和方法
 */

// 声明一个 Person 构造函数
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

// 声明一个实例方法
Animal.prototype.eat = function() {
    console.log("大黄吃狗粮");
}

// 给 Animal 添加静态属性，直接挂在到 Animal 上面
Animal.info = "来自西藏";

// 给 Animal 添加静态方法，直接挂在到 Animal 上面
Animal.show = function() {
    console.log("狗狗喜欢捡球")
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log("-------------- ES5 语法 -------------------")
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// 创建一个 dog 实例
var dog = new Animal();
console.log("大黄", 1);

// 调用实例方法 -- 注意： 实例方法只能 new 出来的实例调用
console.log(dog.eat);      // 大黄吃狗粮
console.log(Animal.eat);   // is not a function

// 调用静态属性 -- 注意： 静态属性只能构造函数来调用
console.log(dog.info);      // undefined
console.log(Animal.info);   // 来自西藏

// 调用静态方法 -- 注意： 静态方法只能构造函数来调用
console.log(dog.show);      // undefined
console.log(Animal.show()); // 狗狗喜欢捡球

