let obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getting ${propKey}`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function(target, propKey, receiver) {
    console.log(`setting ${propKey}`);
    debugger
    return Reflect.set(target, propKey, receiver);
  },
})
obj.count = 1;