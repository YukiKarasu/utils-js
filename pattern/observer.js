// 观察者模式
/**
 * eventName: 事件名
 * fn: 方法名
 * addEvent: 添加事件,监听、观察
 * trigger: 触发事件
 * removeEvent: 移除事件
 */
class Event{
	constructor(){
		// 保存事件
		this.handles = {};
	}
	addEvent(eventName /** 事件名称 */,fn /** 方法名称 */){
		// {'myevent':[fn1,fn2....],'myevent2':[fn1,fn2..]}
		if(typeof this.handles[eventName] ===  "undefined"){
				this.handles[eventName] = [];   
		}
		this.handles[eventName].push(fn);
	}
	trigger(eventName){
		this.handles[eventName].forEach(v=>{
				v();
		})
	}
	removeEvent(eventName,fn){
		if(!(eventName in this.handles)){
			return ;
		}
		for(let i=0;i<this.handles[eventName].length;i++){
			if(this.handles[eventName][i]===fn){
				this.handles[eventName].splice(i,1);
				break;
			}
		}
	}
}
let obj1 = {
	fn(){
		console.log("fn111");
	}
}
let obj2 = {
	fn(){
		console.log("fn222");
	}
}
let myevent = new Event();
// 添加事件(没有执行)
myevent.addEvent("myevent",obj1.fn);
myevent.addEvent("myevent",obj2.fn);
// myevent.removeEvent("myevent",obj1.fn);  //移除obj2.fn
setTimeout(()=>{
	myevent.trigger("myevent");
},1000)