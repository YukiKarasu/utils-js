<template>
  <el-form
    :ref="formName_"
    :model="formModel"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :rules="rules">
    <el-form-item
      v-for="(item, index) in formModel.setting"
      :key="index"
      :required="item.required||false"
      :label="item.label||null"
      :prop="item.ref||null"
      :class="[item.style ? item.style : 'single', item.ref]"
      >
      <div v-if="item.type==='text'">{{formModel[item.ref]}}</div>
      <el-input @keyup.enter.native="submit" v-if="item.type==='input'" :disabled="item.disabled||null" v-model="formModel[item.ref]" :placeholder="item.placeholder||null" clearable></el-input>
      <el-cascader @keyup.enter.native="submit" v-else-if="item.type==='cascader'" :options="item.options||[]" :props="item.props||{}" :disabled="item.disabled||null" v-model="formModel[item.ref]" :placeholder="item.placeholder||null" clearable/>
      <el-input @keyup.enter.native="submit" v-else-if="item.type==='password'" type="password" :disabled="item.disabled||null" v-model="formModel[item.ref]" :placeholder="item.placeholder||null" clearable></el-input>
      <div v-else-if="item.type==='button'">
        <el-button  v-for="(itm, inex) in item.item" :key="inex" :type="itm.primary" @click="handleClickBtn(itm.type)">{{itm.label}}</el-button>
      </div>
      <el-radio-group v-else-if="item.type==='radio'" v-model="formModel[item.ref]">
        <el-radio :label="itm.label" v-for="(itm, inx) in item.options" :key="inx"></el-radio>
      </el-radio-group>
      <el-date-picker @keyup.enter.native="submit()" v-else-if="item.type==='time'" type="datetime" :value-format="item.valueFormat||'yyyy-MM-dd HH:mm:ss'" :picker-options="item.pickerOptions" v-model="formModel[item.ref]" :disabled="item.disabled||null" :placeholder="item.placeholder||null"/>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
</script>
<style scoped lang="scss"></style>
