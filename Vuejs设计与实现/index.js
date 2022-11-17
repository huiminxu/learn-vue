
let activeEffect; //副作用函数
function effect(fn){
    // activeEffect = fn;
    // fn();
    const effectFn=()=>{
        //调用 cleanup 函数完成清楚工作
        cleanup(effectFn); //新增
        activeEffect = effectFn; //新增
        fn();//新增
    }
    //副作用所有的依赖集合
    effectFn.deps =[]//新增
    //执行副作用函数
    effectFn();//新增
}
function cleanup(effectFn){
    for(let i=0;i<effectFn.deps.length;i++){
        //deps 是依赖集合
        const deps =effectFn.deps[i];
        //将 effectFn 从依赖集合中移除
        deps.delete(effectFn);
    }
    effectFn.deps.length =0
}
debugger;
const data={"ok":true,"text":'hello world'};
const obj = new Proxy(data,{
    get(target,key){
        track(target,key);
        return target[key]
    },
    set(target,key,newVal){
        target[key] = newVal;
        trigger(target,key);
    }
});
const bucket = new WeakMap();
function track(target,key){
    if(!activeEffect) return;
    let depsMap = bucket.get(target);
    if(!depsMap){
        bucket.set(target,(depsMap=new Map()))
    }
    let deps =depsMap.get(key);
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps) //新增
}
function trigger (target,key){
    const depsMap = bucket.get(target);
    if(!depsMap) return;
    const effects = depsMap.get(key);
    //set 遍历
    // effects && effects.forEach(fn=>fn())

    const effectsToRun = new Set(effects);
    effectsToRun.forEach(effectFn=>effectFn() )
}
let result;
debugger;
effect(function effectFn(){
    result = obj.ok?obj.text:'not'
})

//  ok 是 true
// data.ok -> effectMap
//data.text -> effectMap


// ok 是 false
// data.ok -->effectMap
//    但是此时修改 text 值会触发副作用函数继续执行，即使不需要变化

// 解决思路很简单，每次副作用函数执行时，我们先把它从所有与之关联的依赖集合中删除
