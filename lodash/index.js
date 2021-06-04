var _ = require('lodash');
const obj = {
  red: {
    red: '#ff4444',
    blue: '#3b5998',
    yellow: '#fff68f',
  },
  blue: '#3b5998',
  yellow: '#fff68f',
}
const findColor = (name, nextName) => obj[name][nextName]
console.log(findColor('red', 'blue'))