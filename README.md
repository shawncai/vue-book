[![vue js book](https://img14.360buyimg.com/n1/jfs/t9508/97/2285719018/62961/99c5b1b7/59f299b4Nc9e78adb.jpg)](https://item.jd.com/12215519.html)

vue book study

#### 知识点总结：

##### 1. vue 指令

1. v-if 与 v-show 区别 : 
    > 
    > v-if dom 内无内容
    >
    > v-show 只是隐藏了数据，实际上是会渲染的

2. v-html 与 v-pre 的使用：
    > 担心 `xss` 攻击的话，就使用 v-pre 否则就使用 v-html

3. 常用指令

    ```javascript 
        // 常用指令详解
        v-cloak // 闪动数据的处理，常和css 搭配使用 [v-cloak]{display: none}
        v-on // 用来绑定事件监听器 语法糖: @
        v-once // 渲染一次就不在修改，应该是缓存起来了
        v-show // 显示 | 隐藏   
        v-if v-else-if v-else // if 判断
        v-html // 解析html 并显示
        v-for // for 循环  v-for="(list, key, index) in lists"
        v-pre // 显示原内容
        v-bind // 基本用途用来更新 HTML 上元素的属性  语法糖: :
        v-model // todo
    ```

##### 2. 计算属性

> computed ：计算属性除了简单的文本差值外，还经常动态的设置元素的样式名称 class 和内联样式 style
> 
> 使用小技巧 [可查看 [22.html](./22.html) 查看详解]： 
    > 
    > * 计算属性可以依赖其他的计算属性 
    > * 不仅可以依赖当前的 Vue 实例的数据，还可以依赖其他实例的数据
>
> 注意： 计算属性基于依赖的缓存的，一个计算属性的数据发生变化时才会变化，它才会重新取值。。这个就是跟 function 实现的区别 [可查看 [23.html](./23.html) 查看详解]


##### 3. v-bind 和 style & class

> 主要根据v-bind 来展示class | style

1. class 的使用 [如果表达式过长或者逻辑相对复杂。尽量使用计算属性来完成相应功能]
    ```javascript
    /*方式1 : 根据后面的值的布尔型决定是否显示前面的class, 可传入多个属性来动态切换 class*/
    :class="{'active': isActive, 'error': isError}" 

    /*方式2: 调用 data | computed 中的值操作 class*/
    :class="[activeClass, errorClass]" /*直接显示值*/ 
    :class="[isActive ? activeClass : '', errorClass]" /*三元运算符*/
    :class="[{'active':isActive}, errorClass]" /*嵌套使用*/
    :class="classes" /*可查看 27.html 查看详解*/
    ```

2. style 的使用和 class 的一毛一样。。[不常用]

##### 4. 方法事件与修饰符 

> 事件交给 v-on 来处理。
>
> 例如： v-on:click [也可以写成 @click ，这样比较常用] :绑定点击事件; @keyup.13='submit' 绑定enter键来提交
> 

1. @click 的方法不传参数的时候不需要写 () , 默认传入的是 `event`对象 例如：

    ```
    <button @click="handleAdd">+1</button>
    <button @click="handleAdd(10)">+10</button>
    ```
2. v-on 修饰符

    常用修饰符：
    * .stop
    * .prevent
    * .capture
    * .self
    * once

    还可以绑定按键 | 组合按键
    * .enter 回车
    * .tab
    * delete
    * .esc 
    * .space 空格
    * .up 上
    * .down 下
    * .left 左
    * .right 右

    组合键：
    * .ctrl
    * .alt
    * .shift
    * .meta (win键 | Command键)

3. v-model 修饰符
    * .lazy 在change事件中同步
    * .number 将输入的内容转化为 Number 类型
    * .trim 过滤首尾的空格
    * 自定义组件

4. 数组更新详解

    改变数组
    * push() html
    * pop()
    * shift()
    * unshift()
    * splice()
    * sort()
    * reverse()

     不改变数组
     * filter() 
     * concat()
     * slice()

##### 5. 组件知识点

> 组件的作用：提高重用性，让代码可以复用
>
> props 传递数据，events 触发事件和 slot 内容分发就构成了 Vue 组件3个 API 来源。再复杂的组件也是由这3个部分组成

1. props
    * `DOM` 模板中使用短横线 '`-`', `props` 中使用驼峰法
    * `props` 可以添加类型 [`String`、`Number`、`Boolean`、`Object`、`Array`、`Function`、自定义]、默认值
    * `props` 验证类型失败后只会在控制台中抛出一个警告而已
    * `v-bind` 可以动态的绑定数据，当父级数据修改，来传递子组件
    * 如果你要直接传递数字、布尔值、数组、对象，而且不使用 `v-bind` , 传递的仅仅是字符串
    * 根据单项数据流的特性，最好是在 `props` 后,初始化一条数据。当需要修改数据时使用计算属性

2. 组件间的通信 [ref]

    > 组件通信分为：父子组件通信、兄弟组件通信、跨级组件通信三种

    * 子组件传给父组件 this.$emit('name', value)
    * 子组件尽量避免直接操作父组件的数据，更不应该直接修改它的数据，避免数据的耦合
    * 使用 `ref` 来为子组件制定一个索引名称，使用 `this.$refs`
    * $refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案，应当避免在模板或计算属性中使用 `$refs`

3. 分发内容 [slot]

    * slot 分发的内容，作用域是在父组件上的
    * 子组件 `<slot>` 内的备用内容，它的作用域是子组件本身。
    * 作用域插槽的使用场景就是既可以复用子组件的 `slot`, 又可以使 `slot` 内容不一致 详解 [88.html](./88.html)
    * $slots 在业务中几乎用不到，在用 `render` 函数创建组件时比较有用。主要还是用于独立组件中

4. 组件的高级用法 [暂不了解]
    * 递归组件
    * 内联模板
    * 动态组件
    * 异步组件
    * 其他： `$nextTick` `X-Templates` `$mount` [手动挂载实例]

5. 组件示例：
    * [106 练习1的页面](./number-input/index.html)
    * [106 练习2的页面](./number-input/index2.html)
    * [117 基础]()
    * [117 练习1]()
    * [117 练习2]()