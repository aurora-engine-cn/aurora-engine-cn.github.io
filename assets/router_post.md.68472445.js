import{_ as s,c as n,o as a,a as p}from"./app.1b7764a5.js";const C=JSON.parse('{"title":"Post \u8BF7\u6C42","description":"","frontmatter":{},"headers":[{"level":2,"title":"struct\uFF0Cpointer \u4EE5\u53CA map","slug":"struct\uFF0Cpointer-\u4EE5\u53CA-map"}],"relativePath":"router/post.md"}'),l={name:"router/post.md"},o=p(`<h1 id="post-\u8BF7\u6C42" tabindex="-1">Post \u8BF7\u6C42 <a class="header-anchor" href="#post-\u8BF7\u6C42" aria-hidden="true">#</a></h1><p>Post \u8BF7\u6C42\u7684\u53C2\u6570\u89E3\u6790\u5BF9\u5E94\u66F4\u52A0\u7B80\u5355\uFF0C\u5927\u591A\u662F\u4EE5<code>struct</code>\u6216\u8005<code>map</code>\u7684\u65B9\u5F0F\u8FDB\u884C\u63A5\u6536\uFF0C\u6211\u4EEC\u5148\u51C6\u5907\u4E00\u4E2A\u8BF7\u6C42\u4F53\u4F5C\u4E3A\u6D4B\u8BD5\u7684\u4F8B\u5B50</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7537</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">report</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F00\u59CB\u5BF9\u5E94\u7684\u8FDB\u884C\u4E00\u4E2A\u7ED3\u6784\u4F53\u5C01\u88C5</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u5BF9\u5E94\u7ED3\u6784\u4F53</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Post</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Name    </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Age     </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    Gender  </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Address </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Report  </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]interface{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>Report</code> \u5E76\u4E0D\u662F\u4E00\u5B9A\u8981\u7528 <code>map</code> \u63A5\u6536\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u6362\u6210\u5BF9\u5E94\u7684\u7ED3\u6784\u4F53\u3002</p><h2 id="struct\uFF0Cpointer-\u4EE5\u53CA-map" tabindex="-1">struct\uFF0Cpointer \u4EE5\u53CA map <a class="header-anchor" href="#struct\uFF0Cpointer-\u4EE5\u53CA-map" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/post1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">post Post</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/post2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">post </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Post</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/post3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">post </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]interface{})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><b style="">\u6CE8\u610F</b> : \u5728\u5904\u7406\u5668\u7684\u51FD\u6570\u53C2\u4E3A\u7ED3\u6784\u4F53\u6216\u7ED3\u6784\u4F53\u6307\u9488\u89E3\u6790\u8BF7\u6C42\uFF0C\u5FC5\u987B\u4F7F\u7528\u53EF\u5BFC\u51FA\u7684\u5B57\u6BB5\uFF0C\u5426\u5219\u65E0\u6CD5\u89E3\u6790\u53C2\u6570 , <code>map[string]string</code> \u5728Get\u4E2D\u9002\u7528\u800C\u5728Post\u4E2D\u5E76\u4E0D\u9002\u7528\u4E8E\u590D\u6742\u7ED3\u6784\u4F53 \u3002</p></div>`,9),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}var u=s(l,[["render",t]]);export{C as __pageData,u as default};
