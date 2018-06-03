function isNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0(1)$)/).test(value + '')
}


Vue.component('number-input', {
    props: {
        min: {
            type: Number,
            default: -Infinity
        },
        max: {
            type: Number,
            default: Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    template: '<div class="number-input">\
        <p>{{ currentValue }}</p>\
        <input type="text" :value="currentValue" @change="handleChange" @keyup.up="handleUp" @keyup.down="handleDown">\
        <button class="btn btn-info" @click="handleDown" :disable="currentValue <= this.min">-</button>\
        <button class="btn btn-info" @click="handleUp" :disable="currentValue >= this.max">+</button>\
    </div>',
    data: function () {
        return {
            currentValue: this.value
        }
    },
    watch: {
        // 当前值修改时，更新父组件的值
        currentValue: function (val) {
            this.$emit('input', val)
            this.$emit('on-change', val)
        },
        // 父组件的 value 更改时，限制currentValue 的值
        value: function (val) {
            this.updateValue(val)
        }
    },
    methods: {
        handleChange(event) {
            let input = event.target.value.trim()
            let min = this.min
            let max = this.max
            if (isNumber(input)) {
                input = Number(input)
                if (input >= max) {
                    // 现有值是最大值 输入值比最大值还大，导致 currentValue未更新，就不会修改输入框的数据
                    if (this.currentValue == max) {
                        event.target.value = this.currentValue
                        return
                    }
                    this.currentValue = max
                }
                if (input <= min) {
                    // 现有值是最小值 输入值比最小值还大，导致 currentValue未更新，就不会修改输入框的数据
                    if (this.currentValue == min) {
                        event.target.value = this.currentValue
                        return
                    }
                    this.currentValue = min
                }
            } else {
                event.target.value = this.currentValue
            }
        },
        handleDown() {
            if (this.currentValue <= this.min) return
            this.currentValue--
        },
        handleUp() {
            if (this.currentValue >= this.max) return
            this.currentValue++
        },
        updateValue(val) {
            if (val >= this.max) val = this.max
            if (val <= this.min) val = this.min
            this.currentValue = val
        }
    },
    mounted: function () {
        this.updateValue(this.value)
    }
})