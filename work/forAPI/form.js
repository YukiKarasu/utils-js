import Input from "./form/input.js";
import Cascader from "./form/cascader.js";
import FormItem from "./form/formItem.js";
/**
 * 表单基础设置

 * iconStyle: suffix|prefix
 * iconName: String
 ** el-icon-${iconName}
 * slotName: String
 * slotContent: html
 */
/**
 * type: String
 ** input-输入框
 ** text-纯文本
 ** password-密码框
 ** textarea-文本框
 ** cascader-选择框
 ** number-数字框
 ** autocomplete-提示框
 ** dateTime-时间框
 */
class elForm {
  #config = {
    type: 'type',
    key: 'ref',
    label: 'label',
    prop: 'prop',
    placeholder: 'placeholder',
    placeholderKey: 'placeholderKey',
    disabled: 'disabled',
    clearable: 'clearable',
    slot: 'slot',
    recordList: 'recordList',
  };
  static key = 'key';
  // 表单基础设置
  // 表单样式
  labelPosition = 'top';
  labelWidth = '80px';
  // 表单数据
  static formList = [];
  static fileList = [];
  formModel = {};
  setting = [];
  static rules = {};
  #arrTypeList = [
    'cascader',
  ];
  #arrKeyList = [];
  // 表单id
  refName = 'form' + new Date();
  constructor() {
    this.formList = [
      new Input(this.#config),
      new Cascader(this.#config),
    ]
  }
  init(setting) {
    this.setSetting(setting)
  }
  // 获取form基础信息
  setSetting(setting) {
    const {type} = this.#config;
    this.setting = setting
      .filter((item) => this.formList.some((el) => el[type]===item[type]))
      .map((item) => {
        // 获取单条完整数据
        let tempItem = this.formList.find((el) => el[type]===item[type]);
        Object.preventExtensions(tempItem);
        if(item.label=='认定时间') {
        }
        for(let key in item) {
          if(tempItem[key]) {
            tempItem[key] = item[key];
          }
        }
        if(this.#arrTypeList.includes(item[type])) {
          this.#arrKeyList.push(item[type]);
        }
        // 过滤多余参数
        for(let key in tempItem) {
          if(!tempItem[key]&&key) {
            delete tempItem[key]
          }
        }
        return tempItem;
      })
  }
  get setting() {
    return this.setting;
  }
  
}
class Modules {
  constructor() {
  }
}
const setting = [
  {
    label: '企业名称',
    ref: 'unitName',
    
    type: 'input',
    style: 'double',
    disabled: false,
    required: true,
    index: 1,
  },
  {
    label: '企业类型',
    type: 'cascader',
    ref: 'organizationType',
    options: [],
    style: 'double',
    
    disabled: false,
    required: true,
    index: 4,
  },
  {
    label: '注册地址',
    ref: 'registeredAddress',
    style: 'double',
    type: 'input',
    disabled: false,
    
    required: true,
    index: 8,
  },
  {
    label: '所属行业',
    ref: 'theirIndustry',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: true,
    required: true,
    index: 5,
  },
  {
    label: '详细地址',
    ref: 'detailedAddress',
    style: 'double',
    type: 'input',
    disabled: true,
    
    required: true,
    index: 7,
  },
  {
    label: '经营地址',
    ref: 'dusinessAddress',
    style: 'double',
    type: 'input',
    disabled: false,
    
    required: true,
    index: 7,
  },
  {
    label: '办公面积',
    ref: 'workArea',
    style: 'double',
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '月租金',
    ref: 'monthlyRent',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '企业人数',
    ref: 'numberCompanies',
    style: 'double',
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '本科以上学历人数',
    ref: 'undergraduateNumber',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '发明专利',
    ref: 'patentNumber',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '新型发明专利',
    ref: 'newInventionPatent',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '软件著作权',
    ref: 'softwareCopyright',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '办公楼属性(选框不明)',
    ref: 'officeBuildingProperties',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '年营业额',
    ref: 'annualTurnover',
    style: 'double',
    options: [],
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '研发费用',
    ref: 'rdexpenses',
    style: 'double',
    options: [],
    
    type: 'input',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '产学研活动',
    ref: 'iurActivities',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: true,
    index: 5,
  },
  {
    label: '注册资本',
    ref: 'registeredCapital',
    style: 'double',
    disabled: false,
    type: 'input',
    
    required: false,
    index: 9,
  },
  {
    label: '注册资金以及外资(包含港澳台)占比',
    ref: 'foreignCapitalPercentage',
    style: 'double',
    type: 'input',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '是否融资',
    ref: 'whetherFinance',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '企业归属(可复选)',
    ref: 'enterpriseOwnershi',
    style: 'double',
    options: [],
    props: {multiple: true},
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '产品(服务)所属产业方向(可复选)',
    ref: 'industryDirection',
    style: 'double',
    options: [],
    props: {multiple: true},
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '产品名称',
    ref: 'productName',
    style: 'double',
    type: 'input',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '产品介绍',
    ref: 'productDescription',
    style: 'double',
    type: 'input',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '国家高新技术企业',
    ref: 'highTechIndustry',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '认定时间',
    ref: 'recognitionTime',
    style: 'double',
    type: 'time',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '编号',
    ref: 'serialNumber',
    style: 'double',
    options: [],
    type: 'input',
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '自治区科技型中小企业认定',
    ref: 'smeCertification',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '市级科技小巨人认定',
    ref: 'littleCertification',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '市级科技型小微企业认定',
    ref: 'smallMicroCertification',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '通过ISO9000质量体系认证',
    ref: 'iso9000Certification',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '通过ISO14000质量体系认证',
    ref: 'iso14000Certification',
    style: 'double',
    options: [],
    
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '通过OHSAS18000职业健康安全体系认证',
    ref: 'ohsas18000Certification',
    style: 'double',
    options: [],
    
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
  {
    label: '其他认证',
    ref: 'otherCertifications',
    style: 'double',
    options: [],
    type: 'cascader',
    
    disabled: false,
    required: false,
    index: 5,
  },
]
const user = new elForm();
user.init(setting)
console.log(user.setting);