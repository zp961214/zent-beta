(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{895:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return Z});var t=s(10),e=s.n(t),p=s(4),c=s.n(p),o=s(8),l=s.n(o),u=s(5),i=s.n(u),k=s(6),r=s.n(k),d=s(7),h=s.n(d),m=s(2),g=s.n(m),f=s(3),b=s.n(f),v=s(0),y=s.n(v),w=s(138),E=s(139),S=function(){var n=function(n){function a(){var n,s;c()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(e))),b()(g()(g()(s)),"state",{checkedLarge:!0,checkedSmall:!0}),b()(g()(g()(s)),"handleChangeLarge",function(n){s.setState({checkedLarge:n})}),b()(g()(g()(s)),"handleChangeSmall",function(n){s.setState({checkedSmall:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(E.Z,{checked:this.state.checkedLarge,onChange:this.handleChangeLarge}),"  ",y.a.createElement(E.Z,{size:"small",checked:this.state.checkedSmall,onChange:this.handleChangeSmall}))}}]),a}(y.a.Component);return y.a.createElement(n,null)},z=function(){return y.a.createElement("div",null,y.a.createElement(E.Z,{checked:!0,disabled:!0}),"  ",y.a.createElement(E.Z,{checked:!1,disabled:!0}))},C=function(){return y.a.createElement("div",null,y.a.createElement(E.Z,{checked:!0,loading:!0}),"  ",y.a.createElement(E.Z,{loading:!0}),"  ",y.a.createElement(E.Z,{checked:!0,size:"small",loading:!0}),"  ",y.a.createElement(E.Z,{size:"small",loading:!0}))};function _(n){return y.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return y.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return y.a.createElement(_,{tag:"style",html:n.style})}var L=function(n){function a(){var n,s;c()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(e))),b()(g()(g()(s)),"state",{showCode:!1}),b()(g()(g()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(_,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),Z=function(n){function a(){return c()(this,a),i()(this,r()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(j,{style:""}),y.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#switch-kai-guan">¶</a><a href="javascript:void(0)" id="switch-kai-guan" class="anchor-point"></a>Switch 开关</h2>\n<p>开关选择器。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>需要表示开关状态/两种状态之间的切换时。</li>\n<li>切换 <code>Switch</code> 会直接触发状态改变。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(L,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedLarge<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    checkedSmall<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeLarge</span> <span class="token operator">=</span> checked <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedLarge<span class="token punctuation">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeSmall</span> <span class="token operator">=</span> checked <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedSmall<span class="token punctuation">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkedLarge<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeLarge<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkedSmall<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeSmall<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(S)),y.a.createElement(L,{title:"失效状态",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(L,{title:"开关loading",id:"Demoloading",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(C)),y.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前状态</td>\n<td>bool</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数, 参数是改变后的 \n<code>checked</code>\n 值</td>\n<td>func(checked: bool)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>状态控制</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>开关大小</td>\n<td>string</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>加载中状态</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component)}}]);