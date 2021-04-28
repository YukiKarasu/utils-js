import FormItem from './formItem.js';
export default class Input extends FormItem {
  constructor(config) {
    let single = {
      [config.type]: 'input',
      [config.label]: 'label',
      [config.prop]: 'key',
      [config.placeholder]: '',
      [config.placeholderKey]: '请输入',
      [config.disabled]: false,
      [config.clearable]: false,
      [config.slot]: false,
      [config.recordList]: [],
    }
    super(single, config);
  }
}