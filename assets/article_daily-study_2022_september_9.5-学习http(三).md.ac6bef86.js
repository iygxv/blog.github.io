import{_ as e,c as t,o,N as a}from"./chunks/framework.5b6ea098.js";const l="/blog/assets/image-20220904220338523.f1340903.png",i="/blog/assets/image-20220904220425619.497167d5.png",r="/blog/assets/image-20220904220812519.7619d3a6.png",s="/blog/assets/image-20220904214204109.28d615e3.png",T=JSON.parse('{"title":"9.5-学习http(三)","description":"","frontmatter":{},"headers":[],"relativePath":"article/daily-study/2022/september/9.5-学习http(三).md"}'),n={name:"article/daily-study/2022/september/9.5-学习http(三).md"},c=a('<h1 id="_9-5-学习http-三" tabindex="-1">9.5-学习http(三) <a class="header-anchor" href="#_9-5-学习http-三" aria-label="Permalink to &quot;9.5-学习http(三)&quot;">​</a></h1><h2 id="四层和七层网络分层模型" tabindex="-1">四层和七层<strong>网络分层模型</strong> <a class="header-anchor" href="#四层和七层网络分层模型" aria-label="Permalink to &quot;四层和七层**网络分层模型**&quot;">​</a></h2><h3 id="tcp-ip-网络分层模型" tabindex="-1"><strong>TCP/IP</strong> <strong>网络分层模型</strong> <a class="header-anchor" href="#tcp-ip-网络分层模型" aria-label="Permalink to &quot;**TCP/IP** **网络分层模型**&quot;">​</a></h3><p>TCP/IP 协议总共有四层，就像搭积木一样，每一层需要下层的支撑，同时又支撑着上层， 任何一层被抽掉都可能会导致整个协议栈坍塌</p><p>第一层叫<strong>链接层</strong>(link layer)，负责在以太网、WiFi 这样的底层网络上发送原始数据 包，工作在网卡这个层次，使用 MAC 地址来标记网络上的设备，所以有时候也叫 MAC 层。</p><p>第二层叫<strong>网际层</strong>或者<strong>网络互连层</strong>(internet layer)，IP 协议就处在这一层。因为 IP 协议定义了IP 地址的概念，所以就可以在链接层的基础上，用 IP 地址取代 MAC 地址，把许许多多的局域网、广域网连接成一个虚拟的巨大网络，在这个网络里找设 备时只要把 IP 地址再翻译成 MAC 地址就可以了。</p><p>第三层叫<strong>传输层</strong>(transport layer)，这个层次协议的职责是保证数据在IP地址标记 的两点之间可靠地传输，是 TCP 协议工作的层次，另外还有它的一个小伙伴UDP。</p><p>TCP 是一个有状态的协议，需要先与对方建立连接然后才能发送数据，而且保证数据不丢 失不重复。而 UDP 则比较简单，它无状态，不用事先建立连接就可以任意发送数据，但不 保证数据一定会发到对方。两个协议的另一个重要区别在于数据的形式。TCP 的数据是连 续的字节流，有先后顺序，而 UDP 则是分散的小数据包，是顺序发，乱序收。</p><p>协议栈的第四层叫<strong>应用层</strong>(application layer)，由于下面的三层把基础打得非常好， 所以在这一层就百花齐放了，有各种面向具体应用的协议。例如 Telnet、SSH、FTP、 SMTP 等等，当然还有我们的 HTTP。</p><p>MAC 层的传输单位是帧(frame)，IP 层的传输单位是包(packet)，TCP 层的传输单位 是段(segment)，HTTP 的传输单位则是消息或报文(message)。但这些名词并没有 什么本质的区分，可以统称为数据包。</p><img src="'+l+'" alt="image-20220904220338523" style="zoom:67%;"><h3 id="osi-网络分层模型" tabindex="-1"><strong>OSI</strong> <strong>网络分层模型</strong> <a class="header-anchor" href="#osi-网络分层模型" aria-label="Permalink to &quot;**OSI** **网络分层模型**&quot;">​</a></h3><p><strong>OSI</strong>，全称是<strong>开放式系统互联通信参考 模型</strong>(Open System Interconnection Reference Model)</p><p>OSI 模型分成了七层，部分层次与 TCP/IP 很像，从下到上分别是:</p><ul><li>第一层:物理层，网络的物理形式，例如电缆、光纤、网卡、集线器等等</li><li>第二层:数据链路层，它基本相当于 TCP/IP 的链接层</li><li>第三层:网络层，相当于 TCP/IP 里的网际层</li><li>第四层:传输层，相当于 TCP/IP 里的传输层</li><li>第五层:会话层，维护网络中的连接状态，即保持会话和同步</li><li>第六层:表示层，把数据转换为合适、可理解的语法和语义</li><li>第七层:应用层，面向具体的应用传输数据</li></ul><img src="'+i+'" alt="image-20220904220425619" style="zoom:67%;"><h3 id="两个分层模型的映射关系" tabindex="-1"><strong>两个分层模型的映射关系</strong> <a class="header-anchor" href="#两个分层模型的映射关系" aria-label="Permalink to &quot;**两个分层模型的映射关系**&quot;">​</a></h3><ul><li>第一层:物理层，TCP/IP 里无对应</li><li>第二层:数据链路层，对应 TCP/IP 的链接层</li><li>第三层:网络层，对应 TCP/IP 的网际层</li><li>第四层:传输层，对应 TCP/IP 的传输层</li><li>第五、六、七层:统一对应到 TCP/IP 的应用层。</li></ul><img src="'+r+'" alt="image-20220904220812519" style="zoom:67%;"><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><ul><li>TCP/IP 分为四层，核心是二层的 IP 和三层的 TCP，HTTP 在第四层</li><li>OSI 分为七层，基本对应 TCP/IP，TCP 在第四层，HTTP 在第七层</li><li>OSI 可以映射到 TCP/IP，但这期间一、五、六层消失了</li><li>日常交流的时候我们通常使用 OSI 模型，用四层、七层等术语</li><li>HTTP 利用 TCP/IP 协议栈逐层打包再拆包，实现了数据传输，但下面的细节并不可见</li></ul><p>有一个辨别四层和七层比较好的(但不是绝对的)小窍门，<strong>两个凡是</strong>:凡是由操作系统负责处理的就是四层或四层以下，否则，凡是需要由应用程序(也就是你自己写代码)负责处理的就是七层。</p><h2 id="域名系统-dns" tabindex="-1">域名系统(DNS) <a class="header-anchor" href="#域名系统-dns" aria-label="Permalink to &quot;域名系统(DNS)&quot;">​</a></h2><h3 id="为什么会出现dns" tabindex="-1"><strong>为什么会出现DNS?</strong> <a class="header-anchor" href="#为什么会出现dns" aria-label="Permalink to &quot;**为什么会出现DNS?**&quot;">​</a></h3><p>因为在TCP/IP 协议中使用 IP 地址来标识计算机,难以记忆与输入, 于是<strong>域名系统</strong>(<strong>Domain Name System</strong>)出现了</p><h3 id="域名的形式" tabindex="-1"><strong>域名的形式</strong> <a class="header-anchor" href="#域名的形式" aria-label="Permalink to &quot;**域名的形式**&quot;">​</a></h3><p>域名是一个有层次的结构，是一串用.分隔的多个单词，最右边的 被称为顶级域名，然后是二级域名，层级关系向左依次降低。</p><p>最左边的是主机名，通常用来表明主机的用途，比如www表示提供万维网服 务、mail表示提供邮件服务，不过这也不是绝对的，名字的关键是要让我们容易记忆。</p><p>例如: www.codevity.top，</p><ul><li>top就是顶级域名，</li><li>codevity是二级域名</li><li>www则是主机名。</li><li>使用这个域名，DNS 就会把它转换成相应的 IP 地址，你就我的网站了。</li></ul><h3 id="域名的解析" tabindex="-1"><strong>域名的解析</strong> <a class="header-anchor" href="#域名的解析" aria-label="Permalink to &quot;**域名的解析**&quot;">​</a></h3><p>就像 IP 地址必须转换成 MAC 地址才能访问主机一样，域名也必须要转换成 IP 地址，这个 过程就是<strong>域名解析</strong></p><p>DNS 的核心系统是一个三层的树状、分布式服务，基本对应域名的结构:</p><ul><li>根域名服务器(Root DNS Server): 管理顶级域名服务器，返 回com、net、cn等顶级域名服务器的 IP 地址</li><li>顶级域名服务器(Top-level DNS Server):管理各自域名下的权威域名服务器，比如 com 顶级域名服务器可以返回 apple.com 域名服务器的 IP 地址</li><li>权威域名服务器(Authoritative DNS Server):管理自己域名下主机的 IP 地址，比如 apple.com 权威域名服务器可以返回 www.apple.com 的 IP 地址</li></ul><img src="'+s+'" alt="image-20220904214204109" style="zoom:70%;"><p>有了这个系统以后，任何一个域名都可以在这个树形结构里从顶至下进行查询，就好像是把 域名从右到左顺序走了一遍，最终就获得了域名对应的 IP 地址。</p><p>例如，访问www.apple.com，就要进行下面的三次查询:</p><ul><li>访问根域名服务器，它会告诉你com顶级域名服务器的地址</li><li>访问com顶级域名服务器，它再告诉你apple.com域名服务器的地址</li><li>最后访问apple.com域名服务器，就得到了www.apple.com的地址</li></ul><p>虽然核心的 DNS 系统遍布全球，服务能力很强也很稳定，但如果全世界的网民都往这个系 统里挤，即使不挤瘫痪了，访问速度也会很慢。</p><p>所以在核心 DNS 系统之外，还有两种手段用来减轻域名解析的压力，并且能够更快地获取 结果，基本思路就是<strong>缓存</strong>。</p><ul><li>首先，许多大公司、网络运行商都会建立自己的 DNS 服务器，作为用户 DNS 查询的代 理，代替用户访问核心 DNS 系统。这些野生服务器被称为<code>非权威域名服务器</code>，可以缓存之前的查询结果，如果已经有了记录，就无需再向根服务器发起查询，直接返回对应 的 IP 地址。(<code>非权威域名服务器--自行建立DNS服务器</code>)</li><li>其次，<code>操作系统里也会对 DNS 解析结果做缓存</code>，如果你之前访问 过www.apple.com，那么下一次在浏览器里再输入这个网址的时候就不会再跑到 DNS 那里去问了，直接在操作系统里就可以拿到 IP 地址。(<code>操作系统缓存</code>)</li><li>另外，操作系统里还有一个特殊的主机映射文件，通常是一个可编辑的文本，在 Linux 里是/etc/hosts(<code>host文件</code>)</li><li>浏览器内部也会缓存dns的</li></ul><h2 id="小结-1" tabindex="-1">小结 <a class="header-anchor" href="#小结-1" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>通过一个例子来描述DNS域名解析: 在浏览器地址栏里随便输入一个不存在的域名，比如就叫www. 不存在.com，试着解释一下它的 DNS 解析过程</p><ul><li>先查看<code>浏览器</code>查询是否有缓存,如果没有</li><li>然后看<code>host文件</code>查询是否有缓存, 如果没有</li><li>再看<code>操作系统</code>查询是否有缓存, 如果没有</li><li>然后再去<code>非权威域名服务器</code>查询是否有缓存, 如果没有</li><li>最后查询<code>根域名</code> -&gt; <code>顶级域名</code> -&gt;<code>权威域名服务器</code></li><li>如果都没有, 网站错误,</li><li>如果存在,继续加载网站</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://time.geekbang.org/column/intro/100029001" target="_blank" rel="noreferrer">透视HTTP协议(罗剑锋)</a></p>',46),p=[c];function d(P,h,g,m,u,I){return o(),t("div",null,p)}const S=e(n,[["render",d]]);export{T as __pageData,S as default};
