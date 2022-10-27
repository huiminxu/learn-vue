# v-model 的原理
```js
<input v-model='msg'/>
// 等价于 onUpdate:modelValue
<input :value='msg' @input="XXX"/>
```

# v-model 绑定表单其它元素

## 绑定 textarea
```js
<label for="intro">
<textarea name="intro" id="intro" cols="30" rows="40" v-model="intro"></textarea>
</label>
``` 

## 绑定 checkbox  单选框
```js
<label for="agree">
<input type="checkbox" id="agree" v-model="isAgree"/> 同意协议
</label>

// isAgree：false
```

## 绑定 checkbox  多选框
```js
<span>你的爱好：</span> 
<label for="basketball">
<input type="checkbox" id="basketball" v-model="hobbies" value="basketball"/> 篮球 
</label>
<label for="tennnis">
<input type="checkbox" id="tennnis" v-model="hobbies" value="tennnis"/> 网球 
</label>
// hobbies:[]
```

## 绑定 radio
```js
<span>你的性别</span> 
<label for="male">
<input type="radio" id="male" v-model="gender" value="male"/> 男 
</label>
<label for="female">
<input type="radio" id="female" v-model="gender" value="female"/> 女
</label>
// gender:''
```


## 绑定 select
```js
<span>喜欢的水果</span> 
<select v-model="fruit" multiple size="2">
<option value="apple">苹果</option>
<option value="banana">香蕉</option>
<option value="orange">橘子</option>
</select>
// fruit:[]
```



# v-model 修饰符
v-model.number
v-model.lazy  
<!-- 默认触发 @change 事件，没有 .lazy 触发 @input 事件 -->

v-model.trim

