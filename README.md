# Cain的Web專案框架
----
v 1.0.2



## 概述
---

開發Web專案的基本架構與工具包，服務器使用node.js，客戶端使用 js es6,css less，自動化 gulp + webpack。

**原則上盡量使用小巧快速的工具包組成架構**

### 使用工具

#### Server技術

* Nodejs 4.4.*
* Express 4

#### 客戶端技術

* **es2015 + babel** use gulp + webpack
* **bootstrap 3** CSS基本框架
* **vue.js** 處理View與綁定
* **vuestrap** 抽掉bootstrap的jq
* **vue router** 處理路由
* **vuex** store框架

## 專案建構
---

**全域**
```
npm i -g bower nodemon mocha
```

**web**
```
npm i --save express method-override body-parser cors compression cookie-parser express-ipv4 express-session request-promise
```

**web dev**

gulp + test tools
```
npm i --save-dev gulp gulp-util gulp-concat gulp-clean-css gulp-ejs gulp-flatten gulp-less gulp-livereload gulp-nodemon gulp-uglify gulp-rev gulp-rev-collector del ejs less should vue
```

webpack + babal es6
```
npm i --save-dev webpack webpack-stream babel-core babel-loader babel-preset-es2015 css-loader file-loader less-loader raw-loader style-loader url-loader babel-preset-stage-0 vue-loader
```