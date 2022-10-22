# Snippet 代码片段 vscode

1.  https://snippet-generator.app/ 写入代码片段
2. code-preferences- User Snippets
3. 输入快捷键，生成代码片段

# 模版语法
Mustche {{}}

# this

this 指向 vue 实例的 proxy

# 指令
v-once
v-text
v-html
v-pre 
v-cloak
v-bind 属性 :
v-on 事件  @
    touchstart
    touchmove
    touchend
    mousemove

v-model
## 条件渲染
v-if
v-else
v-else-if
v-show

## 列表渲染
v-for

# template 
```<template v-if="***"> *****  </template>```

```<template v-for="***"> *****  </template>```


# key

如果有 key 执行 patchKeyedChildren
如果没有 key 执行 patchUnkeyedChildren 


# computed 有缓存


```js
//  没有缓存,每次调用都会重新计算
    methods:{
        getFullName(){
            console.log('methods-getFullName');
            return this.firstName+' '+ this.lastName;
        }
    }

// 有缓存，多次调用的时候,计算属性中的运算只会执行一次
// 计算属性会随着依赖的属性改变而重新计算 (默认是 getter 方法)
computed:{
    fullName(){
         console.log('computed-fullName');
        return this.firstName+' '+ this.lastName;
    }
}

// 计算属性的 getter 和 setter
// 没写 set 方法，默认不能修改计算属性
computed:{
    fullName:{ 
        get:function(){
                console.log('computed-fullName');
                return this.firstName+' '+ this.lastName;
        },
        //  newValue === Coder Why
        set:function(newValue){
            console.log(newValue);
            const names = newValue.split(' ');
            this.firstName = names[0];
            this.lastName  = names[1];
        }
    }
}

this.fullName = 'Coder Why';
```

# watch 
```js
watch:{
    // 监听 data 中的属性的名称
    question(newValue,oldValue){
        //  js 逻辑 & 网络请求
        this.answer = newValue + '';
    }
}



watch:{
    // 监听对象里面的属性改变
    question:{
        handler:function(newQ,oldQ){
            console.log(newQ,oldQ)
        },
        deep:true  //深度监听
        immediate: true // 立即执行，默认不立即执行
    }
}

watch:{
    'info.name':function(newName,oldName){
        console.log(newName,oldName);
    }
}

created(){
    const unwatch = this.$watch('info',function(newV,oldV){
        console.log(newV,oldV)
    },{
        deep:true,
        immediate:true
    })

    // unwatch()  此时侦听器可以取消
}
    //  防抖
watch:{
    // 防抖
        question:_.debounce(function(newValue,oldValue){
        //  js 逻辑 & 网络请求
        this.answer = newValue + '';
    })
}
```

