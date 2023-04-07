import{_ as e,c as t,o as a,N as o}from"./chunks/framework.5b6ea098.js";const l="/blog/assets/image-20220905104949854.74f7e795.png",r="/blog/assets/image-20220905105135946.1c3e2bfa.png",s="/blog/assets/image-20220905111849356.3b71c39b.png",m=JSON.parse('{"title":"9.6-学习http(四)","description":"","frontmatter":{},"headers":[],"relativePath":"article/daily-study/2022/september/9.6-学习http(四).md"}'),i={name:"article/daily-study/2022/september/9.6-学习http(四).md"},n=o('<h1 id="_9-6-学习http-四" tabindex="-1">9.6-学习http(四) <a class="header-anchor" href="#_9-6-学习http-四" aria-label="Permalink to &quot;9.6-学习http(四)&quot;">​</a></h1><h2 id="http报文" tabindex="-1">HTTP报文 <a class="header-anchor" href="#http报文" aria-label="Permalink to &quot;HTTP报文&quot;">​</a></h2><h3 id="http-协议的核心部分是什么呢" tabindex="-1"><strong>HTTP 协议的核心部分是什么呢?</strong> <a class="header-anchor" href="#http-协议的核心部分是什么呢" aria-label="Permalink to &quot;**HTTP 协议的核心部分是什么呢?**&quot;">​</a></h3><p>答案就是它传输的报文内容</p><p>HTTP 协议在规范文档里详细定义了报文的格式，规定了组成部分，解析规则，还有处理策略，所以可以在 TCP/IP 层之上实现更灵活丰富的功能，例如<code>连接控制，缓存管理、数据编码、内容协商</code>等等</p><h3 id="报文结构" tabindex="-1"><strong>报文结构</strong> <a class="header-anchor" href="#报文结构" aria-label="Permalink to &quot;**报文结构**&quot;">​</a></h3><p>HTTP 协议的请求报文和响应报文的结构基本相同，由三大部分组成:</p><ul><li>起始行(start line):描述请求或响应的基本信息</li><li>头部字段集合(header):使用 key-value 形式更详细地说明报文</li><li>消息正文(entity):实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据</li></ul><p>这其中前两部分起始行和头部字段经常又合称为<strong>请求头</strong>或<strong>响应头</strong>，消息正文又称为<strong>实体</strong>，但与<strong>header</strong>对应，很多时候就直接称为<strong>body</strong></p><p>HTTP 协议规定报文<code>必须有 header</code>，但<code>可以没有 body</code>，而且在<code> header 之后必须要有一个空行</code>，也就 是CRLF，十六进制的0D0A。</p><img src="'+l+'" alt="image-20220905104949854" style="zoom:50%;"><h3 id="示例" tabindex="-1"><strong>示例</strong> <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;**示例**&quot;">​</a></h3><img src="'+r+'" alt="image-20220905105135946" style="zoom:50%;"><p>在这个浏览器发出的请求报文里，第一行GET / HTTP/1.1就是请求行，而后面的HostConnection等等都属于header，报文的 最后是一个空白行结束，没有body。</p><h3 id="请求行" tabindex="-1"><strong>请求行</strong> <a class="header-anchor" href="#请求行" aria-label="Permalink to &quot;**请求行**&quot;">​</a></h3><p>起始行也就是<strong>请求行</strong>(request line)，它简要地描述了<strong>客户端想要如何操作服务器端的资源</strong>。</p><p>请求行由三部分构成:</p><ul><li><code>请求方法</code>:是一个动词，如 GET/POST，表示对资源的操作</li><li><code>请求目标</code>:通常是一个 URI，标记了请求方法要操作的资源</li><li><code>版本号</code>:表示报文使用的 HTTP 协议版本</li></ul><p>这三个部分通常使用空格(space)来分隔，最后要用 CRLF 换行表示结束</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET / HTTP/1.1</span></span></code></pre></div><p>在这个请求行里，<code>GET是请求方法</code>，<code>/是请求目标</code>，<code>HTTP/1.1是版本号</code>，把这三部分连起来，意思就 是服务器你好，我想获取网站根目录下的默认文件，我用 的协议版本号是 1.1，请不要用 1.0 或者 2.0 回复我。</p><h3 id="状态行" tabindex="-1"><strong>状态行</strong> <a class="header-anchor" href="#状态行" aria-label="Permalink to &quot;**状态行**&quot;">​</a></h3><p>看完了请求行，我们再看响应报文里的起始行，在这里它不叫响应行，而是叫<strong>状态行</strong>(status line)，意思是 <strong>服务器响应的状态</strong>。</p><p>比起请求行来说，状态行要简单一些，同样也是由三部分构成:</p><ul><li>版本号:表示报文使用的 HTTP 协议版本</li><li>状态码:一个三位数，用代码的形式表示处理的结果，例如 200 是成功，500 是服务器错误</li><li>原因:作为数字状态码补充，是更详细的解释文字，帮助人理解原因</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">HTTP/1.1 200 OK</span></span></code></pre></div><p>意思就是:浏览器你好，我已经处理完了你的请求，这个 报文使用的协议版本号是 1.1，状态码是 200，一切 OK。</p><h3 id="头部字段" tabindex="-1"><strong>头部字段</strong> <a class="header-anchor" href="#头部字段" aria-label="Permalink to &quot;**头部字段**&quot;">​</a></h3><p>请求行或状态行再加上头部字段集合就构成了 HTTP 报文里完整的请求头或响应头</p><p>请求头和响应头的结构是基本一样的，唯一的区别是起始行，所以我把请求头和响应头里的字段放在一起介绍</p><p>头部字段是 key-value 的形式，key 和 value 之间 用:分隔，<code>最后用 CRLF 换行表示字段结束</code>。比如 在Host: 127.0.0.1这一行里 key 就是Host，value 就是127.0.0.1。</p><p>HTTP 头字段非常灵活，不仅可以使用标准里的 Host、 Connection 等已有头，也可以任意添加自定义头，这就给 HTTP 协议带来了无限的扩展可能。</p><p>不过使用头字段需要注意下面几点:</p><ul><li>字段名不区分大小写，例如Host也可以写 成host，但首字母大写的可读性更好</li><li>字段名里不允许出现空格，可以使用连字符-，但不 能使用下划线_。例如，test-name是合法的字 段名，而test name、test_name是不正确的字段名</li><li>字段名后面必须紧接着:，不能有空格，而:后的字段值前可以有多个空格</li><li>字段的顺序是没有意义的，可以任意排列不影响语义</li><li>字段原则上不能重复，除非这个字段本身的语义允许，例如 Set-Cookie</li></ul><h3 id="小结" tabindex="-1"><strong>小结</strong> <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;**小结**&quot;">​</a></h3><ul><li><p>HTTP 报文结构由<code>起始行 + 头部 + 空行 + 实体</code>组成，简单地说就是<code>header+body</code></p></li><li><p>HTTP 报文<code>可以没有 body，但必须要有 header，而且header 后也必须要有空行</code></p></li><li><p><code>请求头由请求行 + 头部字段构成，响应头由状态行 + 头部字段构成</code></p></li><li><p><code>请求行有三部分:请求方法，请求目标和版本号</code></p></li><li><p><code>状态行也有三部分:版本号，状态码和原因字符串</code></p></li><li><p><code>头部字段是 key-value 的形式，用:分隔，不区分大小写</code>，顺序任意，除了规定的标准头，也可以任意添加自定义字段，实现功能扩展</p></li><li><p><code>HTTP/1.1 里唯一要求必须提供的头字段是 Host</code>，它必须出现在请求头里，标记虚拟主机名</p></li></ul><h2 id="请求方法" tabindex="-1">请求方法 <a class="header-anchor" href="#请求方法" aria-label="Permalink to &quot;请求方法&quot;">​</a></h2><p>上面介绍了 HTTP 的报文结构，它是由 header+body 构成，请求头里有请求方法和请求目标，响应头里有状态码 和原因短语，现在要说的就是请求头里的请求方法</p><h3 id="标准请求方法" tabindex="-1"><strong>标准请求方法</strong> <a class="header-anchor" href="#标准请求方法" aria-label="Permalink to &quot;**标准请求方法**&quot;">​</a></h3><p>目前 HTTP/1.1 规定了八种方法，单词<strong>都必须是大写的形式</strong></p><ul><li>GET:获取资源，可以理解为读取或者下载数据</li><li>HEAD:获取资源的元信息</li><li>POST:向资源提交数据，相当于写入或上传数据</li><li>PUT:类似 POST</li><li>DELETE:删除资源</li><li>CONNECT:建立特殊的连接隧道</li><li>OPTIONS:列出可对资源实行的方法</li><li>TRACE:追踪请求 - 响应的传输路径</li></ul><img src="'+s+'" alt="image-20220905111849356" style="zoom:50%;"><h3 id="get-head" tabindex="-1"><strong>GET/HEAD</strong> <a class="header-anchor" href="#get-head" aria-label="Permalink to &quot;**GET/HEAD**&quot;">​</a></h3><p>虽然 HTTP/1.1 里规定了八种请求方法，但只有前四个是比较常用的，所以我们先来看一下这四个方法。</p><p><strong>GET方法</strong></p><p><strong>GET</strong>方法应该是 HTTP 协议里最知名的请求方法了，也应该是用的最多的，自 0.9 版出现并一直被保留至今，是名副其 实的“元老”。</p><p>它的含义是请求<strong>从服务器获取资源</strong>，这个资源既可以是静态 的文本、页面、图片、视频，也可以是由 PHP、Java 动态生成的页面或者其他格式的数据。</p><p>GET 方法虽然基本动作比较简单，但搭配 URI 和其他头字 段就能实现对资源更精细的操作。</p><p><strong>HEAD方法</strong></p><p><strong>HEAD</strong>方法与 GET 方法类似，也是请求从服务器获取资源，服务器的处理机制也是一样的，<code>但服务器不会返回请求的实体数据</code>，只会传回响应头，也就是资源的“元信息”。</p><p>HEAD 方法可以看做是 GET 方法的一个“简化版”或 者“轻量版”。因为它的响应头与 GET 完全相同，所以可以用在很多并不真正需要资源的场合，避免传输 body 数据 的浪费。</p><p>比如，想要检查一个文件是否存在，只要发个 HEAD 请求就可以了，没有必要用 GET 把整个文件都取下来。再比如，要检查文件是否有最新版本，同样也应该用 HEAD，服务器会在响应头里把文件的修改时间传回来。</p><h3 id="post-put" tabindex="-1"><strong>POST/PUT</strong> <a class="header-anchor" href="#post-put" aria-label="Permalink to &quot;**POST/PUT**&quot;">​</a></h3><p><strong>POST方法</strong></p><p>GET 和 HEAD 方法是从服务器获取数据，而 POST 和 PUT 方法则是相反操作，向 URI 指定的资源提交数据，数据就放在报文的 body 里。</p><p>POST 也是一个经常用到的请求方法，使用频率应该是仅次于 GET，应用的场景也非常多，只要向服务器发送数据，用的大多数都是 POST。</p><p><strong>PUT方法</strong></p><p>PUT 的作用与 POST 类似，也可以向服务器提交数据，但与 POST 存在微妙的不同，通常 POST 表示的是“新建”“create”的含义，而 PUT 则是“修改”“update”的含义。</p><p>在实际应用中，PUT 用到的比较少。而且，因为它与 POST 的语义、功能太过近似，有的服务器甚至就直接禁止使用 PUT 方法，只用 POST 方法上传数据</p><h3 id="其他方法" tabindex="-1"><strong>其他方法</strong> <a class="header-anchor" href="#其他方法" aria-label="Permalink to &quot;**其他方法**&quot;">​</a></h3><p>讲完了 GET/HEAD/POST/PUT，还剩下四个标准请求方 法，它们属于比较“冷僻”的方法，应用的不是很多</p><ul><li><strong>DELETE</strong>方法指示服务器删除资源，因为这个动作危险性太大，所以通常服务器不会执行真正的删除操作，而是对资源做一个删除标记。当然，更多的时候服务器就直接不处理 DELETE 请求。</li><li><strong>CONNECT</strong>是一个比较特殊的方法，要求服务器为客户端和另一台远程服务器建立一条特殊的连接隧道，这时 Web 服务器在中间充当了代理的角色。</li><li><strong>OPTIONS</strong>方法要求服务器列出可对资源实行的操作方法， 在响应头的 Allow 字段里返回。它的功能很有限，用处也不 大，有的服务器(例如 Nginx)干脆就没有实现对它的支持。</li><li><strong>TRACE</strong>方法多用于对 HTTP 链路的测试或诊断，可以显示出请求 - 响应的传输路径。它的本意是好的，但存在漏洞， 会泄漏网站的信息，所以 Web 服务器通常也是禁止使用。</li></ul><h3 id="扩展方法" tabindex="-1"><strong>扩展方法</strong> <a class="header-anchor" href="#扩展方法" aria-label="Permalink to &quot;**扩展方法**&quot;">​</a></h3><p>省略...</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://time.geekbang.org/column/intro/100029001" target="_blank" rel="noreferrer">透视HTTP协议(罗剑锋)</a></p>',66),p=[n];function d(c,h,T,g,P,u){return a(),t("div",null,p)}const _=e(i,[["render",d]]);export{m as __pageData,_ as default};
