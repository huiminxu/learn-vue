# v-model 的原理
```js
<input v-model='msg'/>
// 等价于
<input :value='msg' @input="XXX"/>
```


## v-model 绑定表单其它元素
