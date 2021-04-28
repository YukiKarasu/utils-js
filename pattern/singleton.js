// 单例模式
class Sample {
  static instance = null;
  constructor(...args) {
    if(Sample.instance) {
      return Sample.instance;
    }
    Sample.instance  = this;
    for(const property in args[0]) {
      this[property] = args[0][property];
    }
  }
}
console.dir(Sample)
// let name = 'chenjieyu';
// let gender = 'gender';
// let myevent = new Sample({name, gender});
// name = 'zhuwenjie'
// gender = 'male'
// let myevent2 = new Sample({name, gender});
// console.log(myevent)
// console.log(myevent2)
