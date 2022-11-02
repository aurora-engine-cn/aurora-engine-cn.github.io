import{_ as s,c as a,o as n,a as o}from"./app.1b7764a5.js";const d=JSON.parse('{"title":"\u8DEF\u7531\u5206\u7EC4","description":"","frontmatter":{},"headers":[],"relativePath":"router/group.md"}'),p={name:"router/group.md"},l=o(`<h1 id="\u8DEF\u7531\u5206\u7EC4" tabindex="-1">\u8DEF\u7531\u5206\u7EC4 <a class="header-anchor" href="#\u8DEF\u7531\u5206\u7EC4" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u8C03\u7528 <code>Group(url string, middleware ...Middleware)</code> \u65B9\u6CD5\u6765\u8FDB\u884C\u63A5\u53E3\u5206\u7EC4\uFF0C\u5728\u5206\u7EC4\u4E2D\u4F7F\u7528\u4E2D\u95F4\u4EF6\u548C\u5168\u5C40\u4F7F\u7528\u4E2D\u95F4\u4EF6\u662F\u9694\u79BB\u5F00\u7684\uFF0C\u5206\u7EC4\u4F1A\u89E6\u53D1\u5168\u5C40\u4E2D\u95F4\u4EF6\u5230\u6BCF\u4E2A\u7528\u5206\u7EC4\u521B\u5EFA\u7684\u63A5\u53E3\u4E2D\u3002 <code>Group</code> \u7684 <code>Use()</code> \u65B9\u6CD5\u4EC5\u4EC5\u7528\u4E8E\u5F53\u524D\u5206\u7EC4\u7684\u5168\u5C40\u4E2D\u95F4\u4EF6</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Aurora</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Group</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> middleware </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Middleware</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Group</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">g </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Group</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Group</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> middleware </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Middleware</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Group</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),e=[l];function r(t,c,D,A,y,C){return n(),a("div",null,e)}var i=s(p,[["render",r]]);export{d as __pageData,i as default};
