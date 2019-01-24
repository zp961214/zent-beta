(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{914:function(n,t,a){"use strict";a.r(t),a.d(t,"default",function(){return D});var s=a(4),e=a.n(s),d=a(8),c=a.n(d),o=a(5),p=a.n(o),l=a(6),r=a.n(l),i=a(7),u=a.n(i),h=a(2),k=a.n(h),m=a(3),g=a.n(m),f=a(10),b=a.n(f),v=a(0),y=a.n(v),w=a(138),x=a(139),E=function(){return y.a.createElement(x.I.TextBlock,{rows:8})},z=function(){return y.a.createElement(x.I.TextBlock,{rows:5,dashed:!1})},j=function(){return y.a.createElement(x.I.RichTextBlock,{rows:4})},T=function(){return y.a.createElement(x.I.RichTextBlock,{rows:7,shape:"rect",size:160,dashed:!1})},N=function(){return y.a.createElement("div",{style:{display:"flex",alignItems:"center"}},y.a.createElement(x.I.Circle,{diameter:160}),y.a.createElement(x.I.TextBlock,{rows:6,style:{margin:"0 10px"}}),y.a.createElement(x.I.Rectangle,{width:160,height:160}))};function R(n){return y.a.createElement(n.tag,b()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return y.a.createElement(R,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function B(n){return y.a.createElement(R,{tag:"style",html:n.style})}var P=function(n){function t(){var n,a;e()(this,t);for(var s=arguments.length,d=new Array(s),c=0;c<s;c++)d[c]=arguments[c];return a=p()(this,(n=r()(t)).call.apply(n,[this].concat(d))),g()(k()(k()(a)),"state",{showCode:!1}),g()(k()(k()(a)),"toggle",function(){a.setState({showCode:!a.state.showCode})}),a}return u()(t,n),c()(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,a||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(R,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(v.Component),D=function(n){function t(){return e()(this,t),p()(this,r()(t).apply(this,arguments))}return u()(t,n),c()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(w.a)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(B,{style:""}),y.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#placeholder-zhan-wei-kuai">¶</a><a href="javascript:void(0)" id="placeholder-zhan-wei-kuai" class="anchor-point"></a>Placeholder 占位块</h2>\n<p>占位块，用于区块等待状态时的占位展示。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>当区块处于渲染中或者加载异步数据时，可以使用此组件减少用户等待时的焦虑感。</li>\n<li>提供了可以组合的基础组件，以及常用预设组合。</li>\n<li>预设组合不满足需求时可以使用提供的基础组件自定义。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(P,{title:"文本块",id:"Demotext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.TextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(E)),y.a.createElement(P,{title:"实线文本块",id:"Demotextnodashed",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.TextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(P,{title:"富文本块",id:"Demorichtext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.RichTextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(j)),y.a.createElement(P,{title:"富文本块(矩形)",id:"Demorichtextrect",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.RichTextBlock</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(T)),y.a.createElement(P,{title:"自定义占位块",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Placeholder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.Circle</span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token operator">&lt;</span>Placeholder<span class="token punctuation">.</span>TextBlock rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0 10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placeholder.Rectangle</span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(_,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>预设组合组件包括：<code>TextBlock</code> 文本块，以及 <code>RichTextBlock</code> 富文本块。</p>\n<p>基础组件包括：<code>TextRow</code>, <code>TextRowDashed</code>, <code>Circle</code> 以及 <code>Rectangle</code>，当预设组合组件不满足需求时可以使用这些基础组件自定义新的占位块。</p>\n<h3 class="anchor-heading"><a href="#textblock">¶</a><a href="javascript:void(0)" id="textblock" class="anchor-point"></a>TextBlock</h3>\n<p>文本块，可以控制行内是否分段。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>文本块行数</td>\n<td><code>number</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>widths</td>\n<td>文本块宽度池，文本行宽度是从这个数组里循环取的。每个宽度都是百分比</td>\n<td><code>number[]</code></td>\n<td>否</td>\n<td>略</td>\n<td></td>\n</tr>\n<tr>\n<td>dashed</td>\n<td>文本行是否分段</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dashSegments</td>\n<td>文本行分段配置池，每段都是百分比或者固定宽度</td>\n<td><code>(number | string)[][]</code></td>\n<td>否</td>\n<td>略</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#richtextblock">¶</a><a href="javascript:void(0)" id="richtextblock" class="anchor-point"></a>RichTextBlock</h3>\n<p>支持所有 <code>TextBlock</code> 的参数，以及如下额外参数。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>图形形状，支持圆形和正方形</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'rect\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>图形大小</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrow">¶</a><a href="javascript:void(0)" id="textrow" class="anchor-point"></a>TextRow</h3>\n<p>文本行，整行显示，无分段。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrowdashed">¶</a><a href="javascript:void(0)" id="textrowdashed" class="anchor-point"></a>TextRowDashed</h3>\n<p>分段文本行。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>segments</td>\n<td>分段配置</td>\n<td><code>(number | string)[]</code></td>\n<td>否</td>\n<td>随机生成</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#circle">¶</a><a href="javascript:void(0)" id="circle" class="anchor-point"></a>Circle</h3>\n<p>圆形，可以指定半径。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>diameter</td>\n<td>圆直径</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#rectangle">¶</a><a href="javascript:void(0)" id="rectangle" class="anchor-point"></a>Rectangle</h3>\n<p>矩形，可以指定长宽。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>height</td>\n<td>高度</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类名前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(v.Component)}}]);