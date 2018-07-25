webpackJsonp([5],{869:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," \u811a\u624b\u67b6\u4e3a ant design \u63d0\u4f9b\u7684\u57fa\u4e8e redux\u3001redux-saga \u548c react-router \u6bd4\u8f83\u5b8c\u5584\u7684\u8f7b\u91cf\u7ea7\u524d\u7aef\u6846\u67b6\uff0c\u5177\u4f53\u6559\u7a0b",["a",{title:null,href:"https://github.com/sorrycc/blog/issues/18"},"\u8bf7\u67e5\u770b"],"\u3002"],["p","\u5982\u4f55\u4f7f\u7528 demo \u5730\u5740\u8bf7\u67e5\u770b ",["a",{title:null,href:"https://github.com/ant-motion/ant-motion-dva-cli-example"},"dva-cli-example"],";"],["p","\u57fa\u672c\u914d\u7f6e\u8bf7\u67e5\u770b ",["a",{title:null,href:"docs/getting-started"},"\u5f00\u59cb\u4f7f\u7528"],";"],["h2","\u6587\u4ef6\u8def\u5f84"],["p",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," \u811a\u624b\u67b6\u7684\u6587\u4ef6\u76ee\u5f55\u4e3a ",["code","src/routes"],", \u9996\u5148\u6211\u4eec\u9700\u8981\u5c06\u4e0b\u8f7d\u7684 Home \u6587\u4ef6\u5305\u76f4\u63a5\u590d\u5236\u5230 routes \u6587\u4ef6\u5939\u4e0b\u3002"],["h2","\u4fee\u6539\u8def\u7531"],["p","\u590d\u5236\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c06\u4e3b\u9875\u5165\u53e3\u4fee\u6539\u6210\u4ee5\u4e0a\u590d\u5236\u7684\u6587\u4ef6\u76ee\u5f55\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> IndexPage <span class="token keyword">from</span> <span class="token string">\'./routes/Home\'</span><span class="token punctuation">;</span>'},["code","import IndexPage from './routes/Home';"]],["h2","CSS Modules"],["p","dva \u9ed8\u8ba4\u4f7f\u7528\u4e86 ",["code","css-modules"],"\uff0c\u540c\u6837\u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u5957\u89e3\u51b3\u65b9\u6848\u3002"],["h3","\u5173\u95ed css-modules"],["p","\u5982\u679c\u4f60\u5f53\u524d\u9879\u76ee\u4e3a\u65b0\u9879\u76ee\uff0c\u4e14\u5bf9 ",["code","css-modules"]," \u5e76\u4e0d\u662f\u592a\u4e86\u89e3\uff0c\u53ef\u4ee5\u9009\u62e9\u5173\u95ed ",["code","css-modules"],"\uff0c\u53ea\u9700\u8981\u5728 ",["code",".roadhogrc"]," \u6587\u4ef6\u91cc\u52a0\u4e0a ",["code",'"disableCSSModules": true']," \u5373\u53ef\u3002"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token string">"src/index.js"</span><span class="token punctuation">,</span>\n+  <span class="token property">"disableCSSModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> // \u52a0\u5728\u6b64\u5904\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n        <span class="token string">"transform-runtime"</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"production"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"transform-runtime"</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "entry": "src/index.js",\n+  "disableCSSModules": true, // \u52a0\u5728\u6b64\u5904\n  "env": {\n    "development": {\n      "extraBabelPlugins": [\n        "dva-hmr",\n        "transform-runtime"\n      ]\n    },\n    "production": {\n      "extraBabelPlugins": [\n        "transform-runtime"\n      ]\n    }\n  },\n}']],["h3","\u4f7f\u7528 global"],["p","\u4f7f\u7528 ",["code","css-modules"]," \u7684 ",["code","global"],", \u5728 ",["code","index.less"]," \u91cc\u6dfb\u52a0 ",["code",":global"],", \u5c06\u6837\u5f0f\u4e0d\u4f5c\u8f6c\u6362, ",["code","global"]," \u5177\u4f53\u4f7f\u7528",["a",{title:null,href:"/docs/getting-started#\u6837\u5f0f"},"\u8bf7\u67e5\u770b\u5f00\u59cb\u4f7f\u7528"],"\u3002"],["h2","\u6309\u9700\u52a0\u8f7d"],["p","dva \u91cc\u4f7f\u7528 ",["code","babel-plugin-import"]," \u6211\u4eec\u53ea\u9700\u8981 ",["code",".roadhogrc"]," \u6587\u4ef6\u91cc\u6dfb\u52a0 ",["code",'["import", { "libraryName": "antd", "style": true }]']," \u5373\u53ef\u3002"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token string">"src/index.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n        <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"production"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "entry": "src/index.js",\n  "env": {\n    "development": {\n      "extraBabelPlugins": [\n        "dva-hmr",\n        "transform-runtime",\n        ["import", { "libraryName": "antd", "style": true }]\n      ]\n    },\n    "production": {\n      "extraBabelPlugins": [\n        "transform-runtime",\n        ["import", { "libraryName": "antd", "style": true }]\n      ]\n    }\n  },\n}']]],meta:{order:1,category:{"zh-CN":"\u5982\u4f55\u4f7f\u7528","en-US":"getting-started"},title:{"zh-CN":"dva-cli \u91cc\u4f7f\u7528","en-US":"use witch dva"},filename:"docs/dva-cli.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6587\u4ef6\u8def\u5f84",title:"\u6587\u4ef6\u8def\u5f84"},"\u6587\u4ef6\u8def\u5f84"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4fee\u6539\u8def\u7531",title:"\u4fee\u6539\u8def\u7531"},"\u4fee\u6539\u8def\u7531"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6309\u9700\u52a0\u8f7d",title:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"]]]}}});