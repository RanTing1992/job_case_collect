//1、工厂模式，只提供接口，用户只负责需要传递的参数，不管里面的逻辑，最后返回一个实例

//如vue中异步组件的创建
class Man{
    constructor(name){
        this.name = name;
    }
    alertName(){
        alert(this.name)
    }
}
class Factoy{
    static create(name){
        return new Man(name)
    }
}

//单例模式，只需要用一个变量确保实例只创建一次
//如vue 中全局状态管理，全局缓存

let Vue

export function install(_Vue){
    if(Vue && Vue === _Vue){
        return;
    }
    Vue = _Vue;
    applyMixin(Vue);
}

//适配器模式：适配器用来解决两个接口不兼容的情况，
//不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。

// 装饰模式
//不需要改变已有的接口，给对象增加新的功能
//react 中，装饰模式
// @connect(({ verifyRealName,common }) => ({
//     ...verifyRealName,
//    ...common
// }))
function readonly(target,key,descriptor){
    descriptor.writable = false;
    return descriptor
}
class Test{
    @readonly
    name = 'rt'
}
let r = new Test();
r.name = '1111'   //只读，不可以修改

//代理模式
JQurey的事件代理

//观察者模式
//Vue中响应式的实现








