import{_ as s,c as n,o as a,a as l}from"./app.2a950bd0.js";const C=JSON.parse('{"title":"\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C","slug":"\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C"}],"relativePath":"component/controller.md"}'),p={name:"component/controller.md"},e=l(`<p>q# \u7ED3\u6784\u4F53\u63A7\u5236\u5668 \u7ED3\u6784\u4F53\u63A7\u5236\u5668\uFF0C\u5728\u6709\u9879\u76EE\u4F9D\u8D56\u7684\u60C5\u51B5\u4E0B\u4E3B\u8981\u914D\u5408Ioc\u6765\u4F7F\u7528\u4F1A\u975E\u5E38\u4FBF\u6377\uFF0C\u7ED3\u6784\u4F53\u63A7\u5236\u5668\u9700\u8981\u5C06\u6307\u5B9A\u7684\u7ED3\u6784\u4F53\u7C7B\u578B\u63D0\u524D\u521D\u59CB\u5316\u5230 Ioc\u4E2D\u3002</p><h2 id="\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C" tabindex="-1">\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C <a class="header-anchor" href="#\u7ED3\u6784\u4F53\u65B9\u6CD5\u6CE8\u518C" aria-hidden="true">#</a></h2><p>\u5F53\u524D\u7684\u7ED3\u6784\u4F53\u6CE8\u518C\u65B9\u5F0F\uFF0C\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u7ED3\u6784\u4F53\u6784\u9020\u5668\uFF0C\u6784\u9020\u5668\u7C7B\u578B\u5982\u4E0B\u6240\u793A\uFF0C\u4E00\u4E2A\u8FD4\u56DE \u63A5\u53E3\u7684\u51FD\u6570</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Constructors</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B9A\u4E49\u7ED3\u6784\u4F53</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Index</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49\u4E00\u4E2A \u6784\u9020\u5668</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">NewIndex</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Constructors </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Index</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Home</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6211\u4EEC\u5728\u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u5668\u5B9E\u4F8B\u4E2D\u628A \u51C6\u5907\u597D\u7684\u7ED3\u6784\u4F53\u5D4C\u5957\u8FDB\u53BB \uFF0C\u4FEE\u6539\u4E0A\u9762\u7684 <code>Server</code> \u4E3A\u4EE5\u4E0B</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Server \u5D4C\u5957Aurora\u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1 \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Server</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">aurora</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Engine</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Index</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4FEE\u6539\u4EE3\u7801\uFF0C\u901A\u8FC7 <code>Server()</code> \u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u8FDB\u884C\u4E00\u4E0B\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u6BD4\u5982 \u63A7\u5236\u5668\u5B9E\u4F8B\uFF0C\u5168\u5C40\u4E2D\u95F4\u4EF6\uFF0C\u5168\u5C40\u53D8\u91CF\uFF0C\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93\u7B49\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u5C06 Index \u7ED3\u6784\u4F53\u7684\u6784\u9020\u5668 \u6DFB\u52A0\u5230\u914D\u7F6E\u9879\u4E2D\uFF0C\u6700\u540E\u4F1A\u88AB\u52A0\u8F7D\u5230ioc\u5BB9\u5668\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Use</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">NewIndex</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Router</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u6DFB\u52A0 web \u8DEF\u7531</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// \u5F00\u59CB\u6CE8\u518C *Index \u7684\u8DEF\u7531 </span></span>
<span class="line"><span style="color:#A6ACCD;">	server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Home</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10),o=[e];function r(c,t,D,y,F,i){return a(),n("div",null,o)}var b=s(p,[["render",r]]);export{C as __pageData,b as default};
