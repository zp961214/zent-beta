(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{909:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return M});var t=s(10),p=s.n(t),o=s(4),e=s.n(o),c=s(8),l=s.n(c),u=s(5),k=s.n(u),i=s(6),r=s.n(i),d=s(7),g=s.n(d),m=s(2),b=s.n(m),f=s(3),h=s.n(f),v=s(0),y=s.n(v),T=s(138),E=s(139),C=function(){return y.a.createElement("div",null,y.a.createElement(E.cb,null,"标签内容"),y.a.createElement(E.cb,null,y.a.createElement("a",{href:"#"},"链接")))},w=function(){return y.a.createElement("div",null,y.a.createElement(E.cb,{color:"grey"},"灰色"),y.a.createElement(E.cb,{color:"red"},"红色"),y.a.createElement(E.cb,{color:"green"},"绿色"),y.a.createElement(E.cb,{color:"yellow"},"黄色"),y.a.createElement(E.cb,{color:"blue"},"蓝色"),y.a.createElement(E.cb,{color:"darkgreen"},"深绿"),y.a.createElement(E.cb,{color:"grey",outline:!0},"灰色"),y.a.createElement(E.cb,{color:"red",outline:!0},"红色"),y.a.createElement(E.cb,{color:"green",outline:!0},"绿色"),y.a.createElement(E.cb,{color:"yellow",outline:!0},"黄色"),y.a.createElement(E.cb,{color:"blue",outline:!0},"蓝色"),y.a.createElement(E.cb,{color:"darkgreen",outline:!0},"深绿"))},z=function(){return y.a.createElement("div",null,y.a.createElement(E.cb,{color:"#9370db"},"#9370db"),y.a.createElement(E.cb,{color:"#9370db",outline:!0},"#9370db"),y.a.createElement(E.cb,{borderColor:"#87d068",bgColor:"#cfefdf",fontColor:"#00a854"},"自定义色彩"),y.a.createElement(E.cb,{color:"#778899",rounded:!1},"非圆角"),y.a.createElement(E.cb,{color:"#48d1cc",style:{fontSize:14}},"大标签"))},N=function(){return y.a.createElement("div",null,y.a.createElement(E.cb,{closable:!0,onClose:function(n){E.F.success("Close tag")},outline:!0},"自定义色彩"),y.a.createElement(E.cb,{closable:!0,onClose:function(n){E.F.success("Close tag2")}},"非圆角"),y.a.createElement(E.cb,{color:"grey",closable:!0,closeButtonFontColor:"#969799"},"自定义关闭按钮颜色"))},_=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),h()(b()(b()(s)),"state",{visible:!0}),h()(b()(b()(s)),"onVisibleChange",function(n){s.setState({visible:n})}),s}return g()(a,n),l()(a,[{key:"onClose",value:function(){E.F.success("Tag closed")}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(E.cb,{closable:!0,visible:this.state.visible,onVisibleChange:this.onVisibleChange,onClose:this.onClose},"标签内容"))}}]),a}(y.a.Component);return y.a.createElement(n,null)};function D(n){return y.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return y.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function S(n){return y.a.createElement(D,{tag:"style",html:n.style})}var V=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),h()(b()(b()(s)),"state",{showCode:!1}),h()(b()(b()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},p),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),M=function(n){function a(){return e()(this,a),k()(this,r()(a).apply(this,arguments))}return g()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(T.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(S,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),y.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#tag-biao-qian">¶</a><a href="javascript:void(0)" id="tag-biao-qian" class="anchor-point"></a>Tag 标签</h2>\n<p>标签用于进行标记和分类。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于添加特殊标记或者分类记号。</li>\n<li>可添加多个标签。</li>\n<li>标签内字数建议不超过四个字。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(V,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>标签内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(C)),y.a.createElement(V,{title:"两种风格和六种预定样式：`red`，`green`，`yellow`，`blue`，`darkgreen`，`grey`",id:"Demostyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>darkgreen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>深绿<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>darkgreen<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>深绿<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(w)),y.a.createElement(V,{title:"支持自定义色彩，非圆角，标签大小",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#9370db<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>#9370db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#9370db<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>#9370db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">borderColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#87d068<span class="token punctuation">"</span></span> <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cfefdf<span class="token punctuation">"</span></span> <span class="token attr-name">fontColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#00a854<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>自定义色彩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#778899<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>非圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag color<span class="token operator">=</span><span class="token string">"#48d1cc"</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">14</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>大标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(V,{title:"关闭标签，支持添加关闭事件",id:"Demoonclose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"Close tag"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"Close tag2"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>自定义色彩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>非圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">closeButtonFontColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#969799<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>自定义关闭按钮颜色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(V,{title:"受控形式",id:"Democontrolled",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onVisibleChange</span> <span class="token operator">=</span> visible <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      visible\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Tag closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span>\n          <span class="token attr-name">closable</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onVisibleChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClose<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          标签内容\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(_)),y.a.createElement(j,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>标签颜色</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'darkgreen'</code>\n \n|\n \n<code>'grey'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>边框有颜色，无底色</td>\n<td>bool</td>\n<td><code>'false'</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>是否有圆角</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>外部控制隐藏显示</td>\n<td>bool</td>\n<td></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>外部控制时关闭的回调函数</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>borderColor</td>\n<td>边框颜色</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bgColor</td>\n<td>背景颜色</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>fontColor</td>\n<td>文字颜色</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>closeButtonFontColor</td>\n<td>关闭按钮颜色</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>所有参数都是可选，搭配 <code>visible</code> 和 <code>onVisibleChange</code> 可以由外部控制显示隐藏</p>\n</blockquote>"}))}}]),a}(v.Component)}}]);