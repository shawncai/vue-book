[![vue js book](https://img14.360buyimg.com/n1/jfs/t9508/97/2285719018/62961/99c5b1b7/59f299b4Nc9e78adb.jpg)](https://item.jd.com/12215519.html)

vue book study

#### 知识点总结：

##### 1. vue 指令

* v-if 与 v-show 区别 : 
    > 
    > v-if dom 内无内容
    >
    > v-show 只是隐藏了数据，实际上是会渲染的

* v-html 与 v-pre 的使用：
    > 担心 `xss` 攻击的话，就使用 v-pre 否则就使用 v-html

* 常用指令

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

* class 的使用 [如果表达式过长或者逻辑相对复杂。尽量使用计算属性来完成相应功能]
    ```javascript
    /*方式1 : 根据后面的值的布尔型决定是否显示前面的class, 可传入多个属性来动态切换 class*/
    :class="{'active': isActive, 'error': isError}" 

    /*方式2: 调用 data | computed 中的值操作 class*/
    :class="[activeClass, errorClass]" /*直接显示值*/ 
    :class="[isActive ? activeClass : '', errorClass]" /*三元运算符*/
    :class="[{'active':isActive}, errorClass]" /*嵌套使用*/
    :class="classes" /*可查看 27.html 查看详解*/
    ```

* style 的使用和 class 的一毛一样。。[不常用]

##### 4. 
