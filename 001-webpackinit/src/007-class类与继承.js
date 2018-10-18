
// 声明一个类
class Animal {
    // 每一个类中，都有一个构造器，如果没有手动声明，内部会隐藏一个空构造器
    // 每当 new 一个实例的时候，会优先执行这个构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("阿花吃猫粮")
    }

    // 使用 static 关键字来声明静态属性和方法
    // 添加静态属性
    static info = "中华田园猫";

    // 添加静态方法
    static show() {
        console.log("喵喵喜欢睡觉");
    } 

}

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
console.log("-------------- ES6 语法 -------------------")
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")


// 创建一个猫的实例
let cat = new Animal();
console.log("阿花", 10);

// 调用实例方法 -- 注意： 实例方法只能 new 出来的实例调用
console.log(cat.eat);      // undfined
console.log(Animal.eat);   // is not a function

// 调用静态属性 -- 注意： 静态属性只能构造函数来调用
console.log(cat.info);      // undfined
console.log(Animal.info);   // 中华田园猫

// 调用静态方法 -- 注意： 静态方法只能构造函数来调用
console.log(cat.show);      // undfined
console.log(Animal.show());   // 中华田园猫


console.log("-------------- 继承 -------------------")

// 在 class 类中，可以使用 extends 关键字，实现子类继承父类
class Eagle extends Animal {
    constructor(name, age, say) {
        // 如果一个子类，通过 extends 关键字继承了父类，在子类的 constructor 构造函数中，必须优先调用一下 super()
        // super 是一个函数，是父类的构造器，类中的 super,其实就是父类中 constructor 构造器的一个引用
        super(name, age, say)

        this.say = say
    }
}

var eagle = new Eagle();
console.log("飞鹰", 8, "嗷嗷嗷嗷~~~~~")