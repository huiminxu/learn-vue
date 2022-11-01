# 注册组件的方式

## 全局组件，可以在任何其他的组件模版中使用
```html
<template id="my-app">
<h2>我是标题</h2>
<component-a></component-a>
</template>
```
```js
const App= {
    template:'#my-app',
    
}
const app = Vue.createApp(App);
app.component('component-a',{
    template:`<h2>{{ title}}我是component-a 组件</h2>`,
    data(){
        return{
            title:'我是标题'
        }
    }
})
app.mount("#app");
```

## 局部组件
 ```html
<template id="my-app">
<h2>我是标题</h2>
<component-a></component-a>
</template>
```
```js
const componentA={
    template:'<div></div>',

}
const App= {
    template:'#my-app',
    components:{
      componentA: componentA 
    }
    
}
const app = Vue.createApp(App);
app.mount("#app");
```


# 使用 SFC 单文件组件的方式
1. Vue CLI 创建项目 （项目）
2. 如何使用 Webpack 或 rollup 或 vite 打包工具，对其进行打包处理




