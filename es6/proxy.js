/**
 * new Proxy(target, handler)
 * target: 拦截的目标对象
 * handler: 回调函数
 * propKey: 对象访问下标
 * reveiver: 接受器(get中不要读取)
 */
// let origin = {count: 20}
// let obj = new Proxy(origin, {
//   get: function(target, propKey, receiver) {
//     console.log(`getting ${propKey}`);
//     debugger
//     return Reflect.get(target, propKey, receiver);
//   },
//   set: function(target, propKey, receiver) {
//     console.log(`setting ${propKey},${receiver}`);
//     debugger
//     return Reflect.set(target, propKey, receiver);
//   },
// })
// obj.count = 1;
// console.log(obj.count)