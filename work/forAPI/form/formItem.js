// 基类
export default class FormItem {
  constructor(...args) {
    if(new.target===FormItem){
      throw new Error("FormItem不能被实例化");
    }
    const propList = [
      'type', 'label', 'prop', 'placeholder', 'placeholderKey', 'disabled', 'clearable', 'slot', 'recordList', 'options'
    ]
    const propObject = args[1];
    const arr = args[0];
    for(let key in arr) {
      if(propList.includes(key)) {
        if(propObject[key]) {
          this[propObject[key]] = arr[key];
        } else {
          this[key] = arr[key];
        }
      }
    }
    console.log(this)
    // this.type = type; // 类型
    // this.label = label; // 文本
    // this.prop = prop; // 文本
    // this.placeholder = placeholder; // 提示
    // this.placeholderKey = placeholderKey; // 提示关键字
    // this.disabled = disabled; // 可用
    // this.clearable = clearable; // 可清除
    // this.slot = slot; // 是否开放slot
    // this.recordList = recordList;
    // this.options = options;
    // debugger
  }
  init(){
    console.log("初始化")
  }
}