import{_ as s,c as a,o as n,a as e}from"./app.2a950bd0.js";const u=JSON.parse('{"title":"\u9759\u6001\u8D44\u6E90","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89C6\u56FE\u8D44\u6E90","slug":"\u89C6\u56FE\u8D44\u6E90"},{"level":2,"title":"\u6587\u4EF6\u8D44\u6E90","slug":"\u6587\u4EF6\u8D44\u6E90"}],"relativePath":"static/static.md"}'),l={name:"static/static.md"},p=e(`<h1 id="\u9759\u6001\u8D44\u6E90" tabindex="-1">\u9759\u6001\u8D44\u6E90 <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a></h1><h2 id="\u89C6\u56FE\u8D44\u6E90" tabindex="-1">\u89C6\u56FE\u8D44\u6E90 <a class="header-anchor" href="#\u89C6\u56FE\u8D44\u6E90" aria-hidden="true">#</a></h2><p><code>aurora</code> \u9ED8\u8BA4\u9759\u6001\u8D44\u6E90\u89E3\u6790\u76EE\u5F55\u662F\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u63A8\u8350\u5355\u72EC\u521B\u5EFA\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u5B58\u653E html , js ,css \u7B49\u9759\u6001\u8D44\u6E90\uFF0C \u5728 <code>aurora</code> \u9879\u76EE\u4E2D\u6240\u6709\u7684html\u4E2D\u5F15\u5165\u7684\u9759\u6001\u8D44\u6E90\u90FD\u5FC5\u987B\u4EE5\u9759\u6001\u8D44\u6E90\u6839\u8DEF\u5F84\u4E3A\u57FA\u7840\u3002\u901A\u8FC7<code>application.yaml</code>\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E:</p><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">aurora</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">static</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E <code>aurora.resource</code> \u7684\u503C\u662F\u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u9762\u7684\u4E00\u4E2A\u76EE\u5F55 static \uFF0C\u6B64\u523B static \u76EE\u5F55\u4E3A \u6240\u6709\u9759\u6001\u8D44\u6E90\u7684\u6839\u8DEF\u5F84\u3002</p><h2 id="\u6587\u4EF6\u8D44\u6E90" tabindex="-1">\u6587\u4EF6\u8D44\u6E90 <a class="header-anchor" href="#\u6587\u4EF6\u8D44\u6E90" aria-hidden="true">#</a></h2><p><code>aurora</code> \u57FA\u4E8Ego\u539F\u751F\u7684api\u63D0\u4F9B\u670D\u52A1\u5668\u6587\u4EF6\u7CFB\u7EDF\u652F\u6301\uFF0C\u9700\u8981\u505A\u51FA\u4EE5\u4E0B\u914D\u7F6E\u3002</p><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">aurora</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># \u6587\u4EF6\u670D\u52A1\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/resource</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u914D\u7F6E\u4E2D\u7684 <code>aurora.server.file</code> \u9009\u9879\u914D\u7F6E\u7684\u662F\u5F53\u524Dweb \u670D\u52A1\u4E2D\u63D0\u4F9B\u6587\u4EF6\u8BBF\u95EE\u7684\u63A5\u53E3\u540D\uFF0C\u968F\u540E\u5728\u7A0B\u5E8F\u4E2D\u6DFB\u52A0\u76F8\u5173\u5904\u7406\u63A5\u53E3\u5982\u4E0B\uFF1A</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">StripPrefix</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/resource/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FileServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Dir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">W:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u518C\u4E00\u4E2A\u5904\u7406\u6587\u4EF6\u8BBF\u95EE\u7684\u63A5\u53E3 <code>/resource</code> , <code>http.StripPrefix</code> \u4E2D\u7684\u524D\u7F00\u8BBE\u7F6E\u4E00\u5B9A\u8981\u548C \u670D\u52A1\u63A5\u53E3\u4FDD\u6301\u4E00\u81F4\u3002</p>`,11),o=[p];function r(c,t,i,D,d,y){return n(),a("div",null,o)}var A=s(l,[["render",r]]);export{u as __pageData,A as default};
