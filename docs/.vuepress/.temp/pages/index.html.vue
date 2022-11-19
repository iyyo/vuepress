<template><div><p>'# Hello VuePress'</p>
<h1>启动命令： yarn docs:dev</h1>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>危险区域，禁止通行</p>
</div>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个详情块，在 IE / Edge 中不生效</p>
</details>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">'VuePress is awesome'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">'ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/" target="_blank" rel="noopener noreferrer">Home<ExternalLinkIcon/></a> <!-- 跳转到根部的 README.md -->
<a href="/foo/" target="_blank" rel="noopener noreferrer">foo<ExternalLinkIcon/></a> <!-- 跳转到 foo 文件夹的 index.html -->
<RouterLink to="/#heading">foo heading</RouterLink> <!-- 跳转到 foo/index.html 的特定标题位置 -->
<RouterLink to="/three.html">bar - three</RouterLink> <!-- 具体文件可以使用 .md 结尾（推荐） -->
<RouterLink to="/four.html">bar - four</RouterLink> <!-- 也可以用 .html -->🎉 💯</p>
<nav class="table-of-contents"><ul><li><router-link to="#二级标题">二级标题</router-link><ul><li><router-link to="#三级标题">三级标题</router-link></li></ul></li></ul></nav>
<h2>二级标题</h2>
<h3>三级标题</h3>
<p>&lt;&lt;&lt; @/../@vuepress/markdown/<strong>tests</strong>/fragments/snippet.js{2}</p>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<hr>
<p><img src="'./../MyBlog/images/update-1.png'" alt="来自依赖包的图片"></p>
</div></template>


