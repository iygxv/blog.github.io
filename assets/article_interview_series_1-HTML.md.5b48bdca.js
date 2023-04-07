import{_ as s,c as l,o as a,N as o}from"./chunks/framework.5b6ea098.js";const n="/blog/assets/1621600195788-acab59b1-a654-4ec4-b9c2-0a491a660671.51ef18bb.png",e="/blog/assets/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.5599742d.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/interview/series/1-HTML.md"}'),p={name:"article/interview/series/1-HTML.md"},t=o('<img src="'+n+`" alt="HTML面试题.png" style="zoom:50%;"><h2 id="_1-src-和-href-的区别" tabindex="-1">1. src 和 href 的区别 <a class="header-anchor" href="#_1-src-和-href-的区别" aria-label="Permalink to &quot;1. src 和 href 的区别&quot;">​</a></h2><p>src 和 href 都是<strong>用来引用外部的资源</strong>，它们的区别如下：</p><ul><li><strong>src</strong>： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src 会将其指向的资源下载并应⽤到⽂档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般 js 脚本会放在页面底部。</li><li><strong>href</strong>： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在 a、link 等标签上。</li></ul><h2 id="_2-对-html-语义化的理解" tabindex="-1">2. 对 HTML 语义化的理解 <a class="header-anchor" href="#_2-对-html-语义化的理解" aria-label="Permalink to &quot;2. 对 HTML 语义化的理解&quot;">​</a></h2><p><strong>语义化是指</strong> 根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。</p><p>语义化的优点如下：</p><ul><li>对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；</li><li>对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。</li></ul><p>常见的语义化标签：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  头部</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  导航栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  区块（有语义化的div）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  主要区域</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  主要内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  侧边栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  底部</span></span></code></pre></div><h2 id="_3-doctype-文档类型-的作用" tabindex="-1">3. DOCTYPE(⽂档类型) 的作⽤ <a class="header-anchor" href="#_3-doctype-文档类型-的作用" aria-label="Permalink to &quot;3. DOCTYPE(⽂档类型) 的作⽤&quot;">​</a></h2><p>DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是<strong>告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义</strong>来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在 HTML ⽂档的第⼀⾏。</p><p>浏览器渲染页面的两种模式（可通过 document.compatMode 获取，比如，语雀官网的文档类型是<strong>CSS1Compat</strong>）：</p><ul><li><strong>CSS1Compat：标准模式（Strick mode）</strong>，默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</li><li><strong>BackCompat：怪异模式(混杂模式)(Quick mode)</strong>，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。</li></ul><h2 id="_4-script-标签中-defer-和-async-的区别" tabindex="-1">4. script 标签中 defer 和 async 的区别 <a class="header-anchor" href="#_4-script-标签中-defer-和-async-的区别" aria-label="Permalink to &quot;4. script 标签中 defer 和 async 的区别&quot;">​</a></h2><p>如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。</p><p>下图可以直观的看出三者之间的区别:</p><p><img src="`+e+`" alt="image.png"></p><p>其中蓝色代表 js 脚本网络加载时间，红色代表 js 脚本执行时间，绿色代表 html 解析。</p><p><strong>defer 和 async 属性都是去异步加载外部的 JS 脚本文件，它们都不会阻塞页面的解析</strong>，其区别如下：</p><ul><li><strong>执行顺序</strong>： <ul><li>多个带 async 属性的标签，不能保证加载的顺序</li><li>多个带 defer 属性的标签，按照加载顺序执行</li></ul></li><li><strong>脚本是否并行执行</strong>： <ul><li>async 属性，表示<strong>后续文档的加载和执行与 js 脚本的加载和执行是并行进行的</strong>，即异步执行</li><li>defer 属性，加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。</li></ul></li></ul><p><code>defer是延迟, async 是异步执行</code></p><h2 id="_5-常用的-meta-标签有哪些" tabindex="-1">5. 常⽤的 meta 标签有哪些 <a class="header-anchor" href="#_5-常用的-meta-标签有哪些" aria-label="Permalink to &quot;5. 常⽤的 meta 标签有哪些&quot;">​</a></h2><p><code>meta</code> 标签由 <code>name</code> 和 <code>content</code> 属性定义，<strong>用来描述网页文档的属性</strong>，比如网页的作者，网页描述，关键词等，除了 HTTP 标准固定了一些<code>name</code>作为大家使用的共识，开发者还可以自定义 name。</p><p>常用的 meta 标签：</p><p>（1）<code>charset</code>，用来描述 HTML 文档的编码类型：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span></code></pre></div><p>（2） <code>keywords</code>，页面关键词：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">关键词</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>（3）<code>description</code>，页面描述：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">页面描述内容</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>（4）<code>refresh</code>，页面重定向和刷新：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0;url=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>（5）<code>viewport</code>，适配移动端，可以控制视口的大小和比例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1, maximum-scale=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>其中，<code>content</code> 参数有以下几种：</p><ul><li><code>width viewport</code> ：宽度(数值/device-width)</li><li><code>height viewport</code> ：高度(数值/device-height)</li><li><code>initial-scale</code> ：初始缩放比例</li><li><code>maximum-scale</code> ：最大缩放比例</li><li><code>minimum-scale</code> ：最小缩放比例</li><li><code>user-scalable</code> ：是否允许用户缩放(yes/no）</li></ul><p>（6）搜索引擎索引方式：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">robots</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index,follow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>其中，<code>content</code> 参数有以下几种：</p><ul><li><code>all</code>：文件将被检索，且页面上的链接可以被查询；</li><li><code>none</code>：文件将不被检索，且页面上的链接不可以被查询；</li><li><code>index</code>：文件将被检索；</li><li><code>follow</code>：页面上的链接可以被查询；</li><li><code>noindex</code>：文件将不被检索；</li><li><code>nofollow</code>：页面上的链接不可以被查询。</li></ul><h2 id="_6-html5-有哪些更新" tabindex="-1">6. HTML5 有哪些更新 <a class="header-anchor" href="#_6-html5-有哪些更新" aria-label="Permalink to &quot;6. HTML5 有哪些更新&quot;">​</a></h2><h4 id="_1-语义化标签" tabindex="-1">1. 语义化标签 <a class="header-anchor" href="#_1-语义化标签" aria-label="Permalink to &quot;1. 语义化标签&quot;">​</a></h4><ul><li>header：定义文档的页眉（头部）；</li><li>nav：定义导航链接的部分；</li><li>footer：定义文档或节的页脚（底部）；</li><li>article：定义文章内容；</li><li>section：定义文档中的节（section、区段）；</li><li>aside：定义其所处内容之外的内容（侧边）；</li></ul><h4 id="_2-媒体标签" tabindex="-1">2. 媒体标签 <a class="header-anchor" href="#_2-媒体标签" aria-label="Permalink to &quot;2. 媒体标签&quot;">​</a></h4><p>（1） audio：音频</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autoplay</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">loop</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>属性：</p><ul><li>controls 控制面板</li><li>autoplay 自动播放</li><li>loop=‘true’ 循环播放</li></ul><p>（2）video 视频</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">poster</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">imgs/aa.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>属性：</p><ul><li>poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过 poster 也可以自己指定。</li><li>controls 控制面板</li><li>width</li><li>height</li></ul><p>（3）source 标签</p><p>因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过 source 来指定视频源。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa.flv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">video/flv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa.mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">video/mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_3-表单" tabindex="-1">3. 表单 <a class="header-anchor" href="#_3-表单" aria-label="Permalink to &quot;3. 表单&quot;">​</a></h4><p><strong>表单类型</strong>：</p><ul><li>email ：能够验证当前输入的邮箱地址是否合法</li><li>url ： 验证 URL</li><li>number ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max 属性可以设置为最大值，min 可以设置为最小值，value 为默认值。</li><li>search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。</li><li>range ： 可以提供给一个范围，其中可以设置 max 和 min 以及 value，其中 value 属性可以设置为默认值</li><li>color ： 提供了一个颜色拾取器</li><li>time ： 时分秒</li><li>data ： 日期选择年月日</li><li>datatime ： 时间和日期(目前只有 Safari 支持)</li><li>datatime-local ：日期时间控件</li><li>week ：周控件</li><li>month：月控件</li></ul><p><strong>表单属性</strong>：</p><ul><li><p>placeholder ：提示信息</p></li><li><p>autofocus ：自动获取焦点</p></li><li><p>autocomplete=on 或者 autocomplete=off 使用这个属性需要有两个前提：</p></li><li><ul><li>表单必须提交过</li><li>必须有 name 属性。</li></ul></li><li><p>required：要求输入框不能为空，必须有值才能够提交。</p></li><li><p>pattern=&quot; &quot; 里面写入想要的正则模式，例如手机号 patte=&quot;^(+86)?\\d{10}$&quot;</p></li><li><p>multiple：可以选择多个文件或者多个邮箱</p></li><li><p>form=&quot; form 表单的 ID&quot;</p></li></ul><p><strong>表单事件</strong>：</p><ul><li>oninput 每当 input 里的输入框内容发生变化都会触发此事件。</li><li>oninvalid 当验证不通过时触发此事件。</li></ul><h4 id="_4-进度条、度量器" tabindex="-1">4. 进度条、度量器 <a class="header-anchor" href="#_4-进度条、度量器" aria-label="Permalink to &quot;4. 进度条、度量器&quot;">​</a></h4><ul><li><p>progress 标签：用来表示任务的进度（IE、Safari 不支持），max 用来表示任务的进度，value 表示已完成多少</p></li><li><p>meter 属性：用来显示剩余容量或剩余库存（IE、Safari 不支持）</p></li><li><ul><li>high/low：规定被视作高/低的范围</li><li>max/min：规定最大/小值</li><li>value：规定当前度量值</li></ul></li></ul><p>设置规则：min &lt; low &lt; high &lt; max</p><h4 id="_5-dom-查询操作" tabindex="-1">5.DOM 查询操作 <a class="header-anchor" href="#_5-dom-查询操作" aria-label="Permalink to &quot;5.DOM 查询操作&quot;">​</a></h4><ul><li>document.querySelector()</li><li>document.querySelectorAll()</li></ul><p>它们选择的对象可以是标签，可以是类(需要加点)，可以是 ID(需要加#)</p><h4 id="_6-web-存储" tabindex="-1">6. Web 存储 <a class="header-anchor" href="#_6-web-存储" aria-label="Permalink to &quot;6. Web 存储&quot;">​</a></h4><p>HTML5 提供了两种在客户端存储数据的新方法：</p><ul><li>localStorage - 没有时间限制的数据存储</li><li>sessionStorage - 针对一个 session 的数据存储</li></ul><h4 id="_7-其他" tabindex="-1">7. 其他 <a class="header-anchor" href="#_7-其他" aria-label="Permalink to &quot;7. 其他&quot;">​</a></h4><ul><li>拖放：拖放是一种常见的特性，即抓取对象以后拖到另一个位置。设置元素可拖放：</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">draggable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><ul><li>画布（canvas ）： canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>SVG：SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图像在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准</li><li>地理定位：Geolocation（地理定位）用于定位用户的位置。‘</li></ul><p><strong>总结</strong>：</p><p>（1）新增语义化标签：nav、header、footer、aside、section、article</p><p>（2）音频、视频标签：audio、video</p><p>（3）数据存储：localStorage、sessionStorage</p><p>（4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议）</p><p>（5）input 标签新增属性：placeholder、autocomplete、autofocus、required</p><p>（6）history API：go、forward、back、pushstate</p><p><strong>移除的元素有</strong>：</p><ul><li>纯表现的元素：basefont，big，center，font, s，strike，tt，u;</li><li>对可用性产生负面影响的元素：frame，frameset，noframes；</li></ul><h3 id="_7-img-的-srcset-属性的作用" tabindex="-1">7. img 的 srcset 属性的作⽤？ <a class="header-anchor" href="#_7-img-的-srcset-属性的作用" aria-label="Permalink to &quot;7. img 的 srcset 属性的作⽤？&quot;">​</a></h3><p>响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。srcset 属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">srcset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-256.png 2x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>使用上面的代码，就能实现在屏幕密度为 1x 的情况下加载 image-128.png, 屏幕密度为 2x 时加载 image-256.png。</p><p>按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有 1x,2x,3x,4x 四种，如果每一个图片都设置 4 张图片，加载就会很慢。所以就有了新的 srcset 标准。代码如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#C792EA;">srcset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png 128w, image-256.png 256w, image-512.png 512w</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#C792EA;">sizes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(max-width: 360px) 340px, 128px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>其中 srcset 指定图片的地址和对应的图片质量。sizes 用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。</p><p>sizes 语法如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sizes=&quot;[media query] [length], [media query] [length] ... &quot;</span></span></code></pre></div><p>sizes 就是指默认显示 128px, 如果视区宽度大于 360px, 则显示 340px。</p><h2 id="_8-行内元素有哪些-块级元素有哪些-空-void-元素有那些" tabindex="-1">8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？ <a class="header-anchor" href="#_8-行内元素有哪些-块级元素有哪些-空-void-元素有那些" aria-label="Permalink to &quot;8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？&quot;">​</a></h2><ul><li>行内元素有：<code>a b span img input select strong</code>；</li><li>块级元素有：<code>div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p</code>；</li></ul><p>空元素，即没有内容的 HTML 元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：</p><ul><li>常见的有：<code>&lt;br&gt;</code>、<code>&lt;hr&gt;</code>、<code>&lt;img&gt;</code>、<code>&lt;input&gt;</code>、<code>&lt;link&gt;</code>、<code>&lt;meta&gt;</code>；</li><li>鲜见的有：<code>&lt;area&gt;</code>、<code>&lt;base&gt;</code>、<code>&lt;col&gt;</code>、<code>&lt;colgroup&gt;</code>、<code>&lt;command&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;keygen&gt;</code>、<code>&lt;param&gt;</code>、<code>&lt;source&gt;</code>、<code>&lt;track&gt;</code>、<code>&lt;wbr&gt;</code>。</li></ul><h2 id="_9-说一下-web-worker" tabindex="-1">9. 说一下 web worker <a class="header-anchor" href="#_9-说一下-web-worker" aria-label="Permalink to &quot;9. 说一下 web worker&quot;">​</a></h2><p>在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。</p><p>如何创建 web worker：</p><ol><li>检测浏览器对于 web worker 的支持性</li><li>创建 web worker 文件（js，回传函数等）</li><li>创建 web worker 对象</li></ol><h2 id="_10-html5-的离线储存怎么使用-它的工作原理是什么-了解即可" tabindex="-1">10. HTML5 的离线储存怎么使用，它的工作原理是什么--了解即可 <a class="header-anchor" href="#_10-html5-的离线储存怎么使用-它的工作原理是什么-了解即可" aria-label="Permalink to &quot;10. HTML5 的离线储存怎么使用，它的工作原理是什么--了解即可&quot;">​</a></h2><p>离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。</p><p><strong>原理</strong>：HTML5 的离线存储是基于一个新建的 <code>.appcache</code> 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示</p><p><strong>使用方法</strong>：</p><p>（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">manifest</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.manifest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>（2）在 <code>cache.manifest</code> 文件中编写需要离线存储的资源：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CACHE MANIFEST</span></span>
<span class="line"><span style="color:#A6ACCD;">    #v0.11</span></span>
<span class="line"><span style="color:#A6ACCD;">    CACHE:</span></span>
<span class="line"><span style="color:#A6ACCD;">    js/app.js</span></span>
<span class="line"><span style="color:#A6ACCD;">    css/style.css</span></span>
<span class="line"><span style="color:#A6ACCD;">    NETWORK:</span></span>
<span class="line"><span style="color:#A6ACCD;">    resourse/logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;">    FALLBACK:</span></span>
<span class="line"><span style="color:#A6ACCD;">    / /offline.html</span></span></code></pre></div><ul><li><strong>CACHE</strong>: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。</li><li><strong>NETWORK</strong>: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。</li><li><strong>FALLBACK</strong>: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。</li></ul><p>（3）在离线状态时，操作 <code>window.applicationCache</code> 进行离线缓存的操作。</p><p><strong>如何更新缓存</strong>：</p><p>（1）更新 manifest 文件</p><p>（2）通过 javascript 操作</p><p>（3）清除浏览器缓存</p><p><strong>注意事项</strong>：</p><p>（1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。</p><p>（2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。</p><p>（3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。</p><p>（4）FALLBACK 中的资源必须和 manifest 文件同源。</p><p>（5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。</p><p>（6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。</p><p>（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。</p><h2 id="_11-浏览器是如何对-html5-的离线储存资源进行管理和加载" tabindex="-1">11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？ <a class="header-anchor" href="#_11-浏览器是如何对-html5-的离线储存资源进行管理和加载" aria-label="Permalink to &quot;11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？&quot;">​</a></h2><ul><li><strong>在线的情况下</strong>，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。</li><li><strong>离线的情况下</strong>，浏览器会直接使用离线存储的资源。</li></ul><h2 id="_12-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别-了解即可" tabindex="-1">12. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？---了解即可 <a class="header-anchor" href="#_12-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别-了解即可" aria-label="Permalink to &quot;12. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？---了解即可&quot;">​</a></h2><ul><li>strong 标签有语义，是起到加重语气的效果，而 b 标签是没有的，b 标签只是一个简单加粗标签。b 标签之间的字符都设为粗体，strong 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 strong 标签。</li><li>title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取有很大的影响</li><li><strong>i 内容展示为斜体，em 表示强调的文本</strong></li></ul><h2 id="_13-iframe-有那些优点和缺点" tabindex="-1">13. <strong>iframe 有那些优点和缺点？</strong> <a class="header-anchor" href="#_13-iframe-有那些优点和缺点" aria-label="Permalink to &quot;13. **iframe 有那些优点和缺点？**&quot;">​</a></h2><p>iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。</p><p><strong>优点</strong>：</p><ul><li>用来加载速度较慢的内容（如广告）</li><li>可以使脚本可以并行下载</li><li>可以实现跨子域通信</li></ul><p><strong>缺点</strong>：</p><ul><li>iframe 会阻塞主页面的 onload 事件</li><li>无法被一些搜索引擎索识别</li><li>会产生很多页面，不容易管理</li></ul><h2 id="_14-label-的作用是什么-如何使用-了解即可" tabindex="-1">14. label 的作用是什么？如何使用？---了解即可 <a class="header-anchor" href="#_14-label-的作用是什么-如何使用-了解即可" aria-label="Permalink to &quot;14. label 的作用是什么？如何使用？---了解即可&quot;">​</a></h2><p>label 标签来定义表单控件的关系：当用户选择 label 标签时，浏览器会自动将焦点转到和 label 标签相关的表单控件上。</p><ul><li>使用方法 1：</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mobile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Number:</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mobile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><ul><li>使用方法 2：</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Date:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_15-canvas-和-svg-的区别" tabindex="-1">15. Canvas 和 SVG 的区别 <a class="header-anchor" href="#_15-canvas-和-svg-的区别" aria-label="Permalink to &quot;15. Canvas 和 SVG 的区别&quot;">​</a></h2><p><strong>（1）SVG</strong>：</p><p>SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言 XML 描述的 2D 图形的语言，SVG 基于 XML 就意味着 SVG DOM 中的每个元素都是可用的，可以为某个元素附加 Javascript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。</p><p>其特点如下：</p><ul><li>不依赖分辨率</li><li>支持事件处理器</li><li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li><li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</li><li>不适合游戏应用</li></ul><p><strong>（2）Canvas</strong>：</p><p>Canvas 是画布，通过 Javascript 来绘制 2D 图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。</p><p>其特点如下：</p><ul><li>依赖分辨率</li><li>不支持事件处理器</li><li>弱的文本渲染能力</li><li>能够以 .png 或 .jpg 格式保存结果图像</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</li></ul><p>注：矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。</p><h2 id="_16-head-标签有什么作用-其中什么标签必不可少" tabindex="-1">16. head 标签有什么作用，其中什么标签必不可少？ <a class="header-anchor" href="#_16-head-标签有什么作用-其中什么标签必不可少" aria-label="Permalink to &quot;16. head 标签有什么作用，其中什么标签必不可少？&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 标签用于定义文档的头部，它是所有头部元素的容器。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">下面这些标签可用在 head 部分：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">其中 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 定义文档的标题，它是 head 部分中唯一必需的元素</span></span></code></pre></div><h2 id="_17-文档声明-doctype-和-doctype-html-有何作用-严格模式与混杂模式如何区分-它们有何意义" tabindex="-1">17. 文档声明（Doctype）和（!Doctype html）有何作用? 严格模式与混杂模式如何区分？它们有何意义? <a class="header-anchor" href="#_17-文档声明-doctype-和-doctype-html-有何作用-严格模式与混杂模式如何区分-它们有何意义" aria-label="Permalink to &quot;17. 文档声明（Doctype）和（!Doctype html）有何作用? 严格模式与混杂模式如何区分？它们有何意义?&quot;">​</a></h2><p><strong>文档声明的作用</strong>：文档声明是为了告诉浏览器，当前<code>HTML</code>文档使用什么版本的<code>HTML</code>来写的，这样浏览器才能按照声明的版本来正确的解析。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">Doctype</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">的作用：</span><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">doctype</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 的作用就是让浏览器进入标准模式，使用最新的 HTML5 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。</span></span></code></pre></div><p><strong>严格模式与混杂模式的区分</strong>：</p><ul><li><strong>严格模式</strong>： 又称为标准模式，指浏览器按照<code>W3C</code>标准解析代码；</li><li><strong>混杂模式</strong>： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；</li></ul><p><strong>区分</strong>：网页中的<code>DTD</code>，直接影响到使用的是严格模式还是浏览模式，可以说<code>DTD</code>的使用与这两种方式的区别息息相关。</p><ul><li>如果文档包含严格的<code>DOCTYPE</code> ，那么它一般以严格模式呈现（<strong>严格 DTD ——严格模式</strong>）；</li><li>包含过渡 <code>DTD</code> 和 <code>URI</code> 的 <code>DOCTYPE</code> ，也以严格模式呈现，但有过渡 <code>DTD</code> 而没有 <code>URI</code> （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（<strong>有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式</strong>）；</li><li><code>DOCTYPE</code> 不存在或形式不正确会导致文档以混杂模式呈现（<strong>DTD 不存在或者格式不正确——混杂模式</strong>）；</li><li><code>HTML5</code> 没有 <code>DTD</code> ，因此也就没有严格模式与混杂模式的区别，<code>HTML5</code> 有相对宽松的 法，实现时，已经尽可能大的实现了向后兼容(<strong>HTML5 没有严格和混杂之分</strong>)。</li></ul><p>总之，<strong>严格模式让各个浏览器统一执行一套规范兼容模式保证了旧网站的正常运行。</strong></p><h2 id="_18-浏览器乱码的原因是什么-如何解决-了解即可" tabindex="-1">18. 浏览器乱码的原因是什么？如何解决？---了解即可 <a class="header-anchor" href="#_18-浏览器乱码的原因是什么-如何解决-了解即可" aria-label="Permalink to &quot;18. 浏览器乱码的原因是什么？如何解决？---了解即可&quot;">​</a></h2><p><strong>产生乱码的原因</strong>：</p><ul><li>网页源代码是<code>gbk</code>的编码，而内容中的中文字是<code>utf-8</code>编码的，这样浏览器打开即会出现<code>html</code>乱码，反之也会出现乱码；</li><li><code>html</code>网页编码是<code>gbk</code>，而程序从数据库中调出呈现是<code>utf-8</code>编码的内容也会造成编码乱码；</li><li>浏览器不能自动检测网页编码，造成网页乱码。</li></ul><p><strong>解决办法</strong>：</p><ul><li>使用软件编辑 HTML 网页内容；</li><li>如果网页设置编码是<code>gbk</code>，而数据库储存数据编码格式是<code>UTF-8</code>，此时需要程序查询数据库数据显示数据前进程序转码；</li><li>如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。</li></ul><h3 id="_19-渐进增强和优雅降级之间的区别" tabindex="-1">19. 渐进增强和优雅降级之间的区别 <a class="header-anchor" href="#_19-渐进增强和优雅降级之间的区别" aria-label="Permalink to &quot;19. 渐进增强和优雅降级之间的区别&quot;">​</a></h3><p><strong>（1）渐进增强（progressive enhancement）</strong>：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。</p><p><strong>（2）优雅降级 graceful degradation</strong>： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。</p><p><strong>两者区别</strong>：</p><ul><li>优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；</li><li>降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。</li></ul><p>优雅降级观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为过时或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 在这种设计范例下，旧版的浏览器被认为仅能提供简陋却无妨 (poor, but passable) 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。</p><p>渐进增强观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得渐进增强成为一种更为合理的设计范例。这也是它立即被 Yahoo 所采纳并用以构建其分级式浏览器支持 (Graded Browser Support)策略的原因所在。</p><h2 id="_20-说一下-html5-drag-api-了解即可" tabindex="-1">20. 说一下 HTML5 drag API---了解即可 <a class="header-anchor" href="#_20-说一下-html5-drag-api-了解即可" aria-label="Permalink to &quot;20. 说一下 HTML5 drag API---了解即可&quot;">​</a></h2><ul><li>dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。</li><li>darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。</li><li>dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。</li><li>dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。</li><li>dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。</li><li>drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。</li><li>dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。</li></ul>`,177),c=[t];function r(i,D,F,y,d,g){return a(),l("div",null,c)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
