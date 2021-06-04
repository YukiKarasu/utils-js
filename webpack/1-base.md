# entry
```javascript
module.exports = {
  // multiple
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js',
    importApp: {
      dependOn: 'importApp',
      import: './src/app.js',
    }
  }
}
module.exports = {
  // single
  entry: './src/app.js',
}
```
|参数|介绍|
|---|---|
|dependOn|当前入口所依赖的入口.必须再该入口被加载前被加载(?不可以懒加载的意思)|
|filename|指定要输出的文件名称|
|import|启动时需加载的模块|
|library|指定library选项,为当前entry构建一个library|
|runtime|运行时chunk的名字.如果设置了,就会创建一个以该名字命名的运行时chunk,否则将使用现有入口作为运行时|
|publicPath|当该入口的输出文件再浏览器中被引用时,为他们指定一个公共的url地址|
# output
```javascript
const path = require('path');
module.exports = {
  // single
  entry: './path/to/my/entry/file.js',
  output:  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'myfirst-webpack.bundle.js',
  }
}
module.exports = {
  // multiple
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js',
    importApp: {
      dependOn: 'importApp',
      import: './src/app.js',
    }
  }
  output:  {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }
}
```
# 