
#### 初始化项目
- 就是创建 package.json 文件

```shell
yarn init -y // 在终端中使用 yarn 初始化项目
npm init -y // 在终端中使用 npm 初始化项目
```


#### 安装项目依赖
- react(核心库) react-dom(dom 库) react-scripts(其他工具)

```shell
yarn add react react-dom react-scripts
npm i react react-dom react-scripts -S
```

#### 打包编译
```shell
npx react-scripts build // 对代码进行打包编译. 
```
注意: 
打包编译后的文件, 在主页中的路径, 是基于服务器根目录的, 所以如果要在本地打开, 需要将根目录改成当前目录.

#### 测试服务器实时编译启动

```shell
npx react-scripts start // 在测试的时候, 实时的测试. 
```

#### 在 packag.json 文件中添加字段, 来创建命令行的快捷方式

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```