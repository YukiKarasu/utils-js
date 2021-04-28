import FormItem from './formItem.js';
export default class Cascader extends FormItem {
  constructor(config) {
    let single = {
      [config.type]: 'cascader',
      label: 'label',
      prop: 'key',
      placeholder: '',
      placeholderKey: '请选择',
      options: [],
      disabled: false,
      clearable: false,
      slot: false,
      recordList: [],
    }
    super(single, config);
  }
}