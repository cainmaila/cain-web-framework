# Cain的Web專案框架
----
v 1.0.0



## 概述
---

開發Web專案的基本架構與工具包，服務器使用node.js，客戶端使用 js es6,css less，自動化 gulp + webpack。

**原則上盡量使用小巧快速的工具包組成架構**

### 使用工具

#### Server技術

* Nodejs 4.4
* Express 4

#### 客戶端技術

* **vue.js** 處理View與綁定
* **Lazy.js** 處理Data
* **Normalize.css** CSS基本框架
* **Fetch Api** 處理API呼叫


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
npm i --save-dev gulp gulp-util gulp-concat gulp-minify-css gulp-ejs gulp-flatten gulp-less gulp-livereload gulp-nodemon gulp-uglify gulp-rev gulp-rev-collector del ejs less should vue
```

webpack + babal es6
```
npm i --save-dev webpack webpack-stream babel-core babel-loader babel-preset-es2015 css-loader file-loader less-loader raw-loader style-loader url-loader babel-preset-stage-0 vue-loader
```