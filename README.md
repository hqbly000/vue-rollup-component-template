# vue-rollup-component

下载即可开始组件开发

## 组件开发

#### 运行

根目录下

```js
npm i
npm run dev
npm run build
npm run build:es
npm run build:browser
npm run build:umd
npm run build:es5
```

> dev运行的是 rollup watch，监听src文件夹的变化，实时打包插件

#### 开发

只需要关注src目录，.babelrc文件设置了src目录为root

src目录下的模块引入，不需要'../../'

```js
import Component from 'components/component'
import util from 'utils/util'
import mixins from 'mixins/mixin'
...
```

scss文件在入口文件index.js引入

#### 打包

dist 输出文件

- vue-rollup-component.css
- vue-rollup-component.esm.js
- vue-rollup-component.min.js
- vue-rollup-component.umd.js

## github pages

#### 运行

> docs-src目录下

```js
npm i
npm run dev // 默认端口 7777
npm run devp
npm run build
```
> 入口文件是组件打包后的js，运行时自动监听入口文件的变化，实时响应

## why

这样开发组件的好处是，专注组件开发，开发完成直接打包发布