<template lang="html">

  <div>

    <section class="markdown">
      <h1>InputNumber 数字输入框</h1>
      <p>
        通过鼠标或键盘，输入范围内的数值。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          当需要获取标准数值时。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="数字输入框。"
          code="<v-input-number min='1'' max='10'' default-value='3'' :on-change='_handleChange'></v-input-number>"
        >
        <v-input-number min="1" max="10" default-value="3" :on-change="_handleChange"></v-input-number>
        </code-box>

        <code-box
          title="不可用"
          describe="点击按钮切换可用状态。"
          code="<v-input-number min='1' max='10'' :disabled='disabled'' default-value='3'></v-input-number>
<v-button @click='_toggle'' type='primary'>Toggle disabled</v-button>"
        >
          <v-input-number min="1" max="10" :disabled="disabled" default-value="3"></v-input-number>
          <br><br>
          <v-button @click="_toggle" type="primary">Toggle disabled</v-button>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="三种大小"
          describe="三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px"
          code="<v-input-number size='large' min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>
<v-input-number min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>
<v-input-number size='small' min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>"
        >
          <v-input-number size="large" min="1" max="100000" default-value="3" :on-change="_handleChange"></v-input-number>
          <v-input-number min="1" max="100000" default-value="3" :on-change="_handleChange"></v-input-number>
          <v-input-number size="small" min="1" max="100000" default-value="3" :on-change="_handleChange"></v-input-number>
        </code-box>

        <code-box
          title="小数"
          describe="和原生的数字输入框一样，value 的精度由 step 的小数位数决定。"
          code="<v-button type='primary'>Primary</v-button>
<v-button type='primary' disabled>Primary</v-button>"
        >
          <v-input-number min="1" max="10" step="0.1"></v-input-number>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vInputNumber from '../../components/input-number'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'type',
          explain: '设置按钮类型，可选值为 primary ghost 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'icon',
          explain: '设置按钮的图标类型',
          type: 'string',
          default: '无'
        },{
          parameter: 'shape',
          explain: '设置按钮形状，可选值为 circle circle-outline 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'size',
          explain: '设置按钮大小，可选值为 small large 或者不设',
          type: 'String',
          default: 'default'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'loading',
          explain: '设置按钮载入状态',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onClick',
          explain: 'click 事件的 handler',
          type: 'function',
          default: ''
        }
      ],
      disabled: true
    }
  },
  components: {
    vInputNumber,
    vButton,
    codeBox,
    apiTable
  },
  methods: {
    _handleChange (value) {
      console.log('changed ', value)
    },
    _toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>

<style lang="less">
</style>
