webpackJsonp([1,3],{

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\mycomponent_2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-259a7d46/mycomponent_2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-259a7d46&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mycomponent_2.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-259a7d46&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mycomponent_2.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\nh2[_v-259a7d46]{\n\tcolor: #ff00ff;\n}\n", "", {"version":3,"sources":["/./src/components/mycomponent_2.vue?d6198664"],"names":[],"mappings":";;;;;AAKA;CACA,eAAA;CACA","file":"mycomponent_2.vue","sourcesContent":["/**\r\n * component 2 版型\r\n */\r\n\r\n<style lage=\"less\" scoped>\r\n\th2{\r\n\t\tcolor: #ff00ff;\r\n\t}\r\n</style>\r\n\r\n<template>\r\n\t<div :id=\"idName\">\r\n\t\tCain!!!\r\n\t\t<h2>{{idName}}!!</h2>\r\n\t\t<v-alert type=\"danger\" show=\"true\">this is <strong>vue-strap</strong> Alert!!</v-alert>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\texport default {\r\n\t\tdata: function () {\r\n\t\t\treturn {\r\n\t\t\t\tidName: 'mycomponent_2',\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 33:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				idName: 'mycomponent_2'
			};
		}
	};

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<div :id=\"idName\" _v-259a7d46=\"\">\n\tCain!!!\n\t<h2 _v-259a7d46=\"\">{{idName}}!!</h2>\n\t<v-alert type=\"danger\" show=\"true\" _v-259a7d46=\"\">this is <strong _v-259a7d46=\"\">vue-strap</strong> Alert!!</v-alert>\n</div>\n";

/***/ }

});
//# sourceMappingURL=1.1.js.map