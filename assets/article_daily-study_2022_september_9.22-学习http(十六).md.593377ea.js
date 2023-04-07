import{_ as t}from"./chunks/image-20220922102219822.92ab303d.js";import{_ as T,c as e,o as p,a as r}from"./app.472a3350.js";const a="/blog_static/assets/image-20220922102654002.07124f86.png",I=JSON.parse('{"title":"9.22-学习http(十六)","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTTP/3展望","slug":"http-3展望","link":"#http-3展望","children":[{"level":3,"title":"HTTP/2的队头阻塞","slug":"http-2的队头阻塞","link":"#http-2的队头阻塞","children":[]},{"level":3,"title":"QUIC协议","slug":"quic协议","link":"#quic协议","children":[]},{"level":3,"title":"QUIC的特点","slug":"quic的特点","link":"#quic的特点","children":[]},{"level":3,"title":"HTTP/3协议","slug":"http-3协议","link":"#http-3协议","children":[]},{"level":3,"title":"HTTP/3服务发现","slug":"http-3服务发现","link":"#http-3服务发现","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"article/daily-study/2022/september/9.22-学习http(十六).md"}'),i={name:"article/daily-study/2022/september/9.22-学习http(十六).md"},l=r('<h1 id="_9-22-学习http-十六" tabindex="-1">9.22-学习http(十六) <a class="header-anchor" href="#_9-22-学习http-十六" aria-hidden="true">#</a></h1><h2 id="http-3展望" tabindex="-1"><strong>HTTP/3展望</strong> <a class="header-anchor" href="#http-3展望" aria-hidden="true">#</a></h2><p>在前面里，我们一起学习了 HTTP/2，你也应该看到了 HTTP/2 做出的许多努力，比如头部压缩、二进制分帧、虚拟的流与多路复用，性能方面比 HTTP/1 有了很大的提 升，基本上解决了<code>队头阻塞</code>这个问题。</p><h3 id="http-2的队头阻塞" tabindex="-1"><strong>HTTP/2的队头阻塞</strong> <a class="header-anchor" href="#http-2的队头阻塞" aria-hidden="true">#</a></h3><p>你可能要发出疑问了:为什么说是基本上，而不是完全解决了呢?</p><p>这是因为 HTTP/2 虽然使用帧、流、多路复用，没有了队头阻塞，但这些手段都是在应用层里，而在下层，也就是 TCP 协议里，还是会发生队头阻塞。</p><p>这是怎么回事呢?</p><p>让我们从协议栈的角度来仔细看一下。在 HTTP/2 把多个请求 - 响应分解成流，交给 TCP 后，TCP 会再拆成更小的包依次发送(其实在 TCP 里应该叫 segment，也就 是段)。</p><p>在网络良好的情况下，包可以很快送达目的地。但如果网络质量比较差，像手机上网的时候，就有可能会丢包。而 TCP 为了保证可靠传输，有个特别的丢包重传机制，丢失的包必须要等待重新传输确认，其他的包即使已经收到了，也只能放在缓冲区里，上层的应用拿不出来，只能干着急。</p><p>我举个简单的例子:</p><p>客户端用 TCP 发送了三个包，但服务器所在的操作系统只收到了后两个包，第一个包丢了。那么内核里的 TCP 协议栈就只能把已经收到的包暂存起来，停下等着客户端重传那个丢失的包，这样就又出现了队头阻塞。</p><p>由于这种队头阻塞是 TCP 协议固有的，所以 HTTP/2 即使设计出再多的花样也无法解决。</p><p>Google 在推 SPDY 的时候就已经意识到了这个问题，于是就又发明了一个新 的QUIC协议，让 HTTP 跑在 QUIC 上而不是 TCP 上。</p><p>而这个HTTP over QUIC就是 HTTP 协议的下一个大版本，<strong>HTTP/3</strong>。它在 HTTP/2 的基础上又实现了质的飞跃，真正完美地解决了队头阻塞问题。</p><img src="'+t+'" alt="image-20220922102219822" style="zoom:50%;"><h3 id="quic协议" tabindex="-1"><strong>QUIC协议</strong> <a class="header-anchor" href="#quic协议" aria-hidden="true">#</a></h3><p>从上面这张图里，你可以看到 HTTP/3 有一个关键的改变，那就是它把下层的 TCP抽 掉了，换成了 UDP。因为 UDP 是无序的，包之间没有依赖关系，所以就从根本上解决 了队头阻塞。</p><p>UDP 是一个简单、不可靠的传输协议，只是对 IP 协议的一层很薄的包装，和 TCP 相比，它实际应用的较少。</p><p>不过正是因为它简单，不需要建连和断连，通信成本低，也就非常灵活、高效，可塑性很强。</p><p>所以，QUIC 就选定了 UDP，在它之上把 TCP 的那一套连接管理、拥塞窗口、流量控制 等搬了过来，去其糟粕，取其精华，打造出了一个全新的可靠传输协议，可以认为 是<strong>新时代的 TCP</strong>。</p><p>QUIC 最早是由 Google 发明的，被称为 gQUIC。而当前正在由 IETF 标准化的 QUIC 被 称为 iQUIC。两者的差异非常大，甚至比当年的 SPDY 与 HTTP/2 的差异还要大。</p><p>gQUIC 混合了 UDP、TLS、HTTP，是一个应用层的协议。而 IETF 则对 gQUIC 做了清理，把应用部分分离出来，形成了 HTTP/3，原来的 UDP 部分下放到了传输层，所 以 iQUIC 有时候也叫QUIC-transport。</p><p>接下来要说的 QUIC 都是指 iQUIC，要记住，它与早期的 gQUIC 不同，是一个传输层的协议，和 TCP 是平级的。</p><h3 id="quic的特点" tabindex="-1"><strong>QUIC的特点</strong> <a class="header-anchor" href="#quic的特点" aria-hidden="true">#</a></h3><p>QUIC 基于 UDP，而 UDP 是无连接的，根本就不需要握手和挥手，所以天生就要比 TCP 快。</p><p>就像 TCP 在 IP 的基础上实现了可靠传输一样，QUIC 也基于 UDP 实现了可靠传输，保证数据一定能够抵达目的地。它还引入了类似 HTTP/2 的流和多路复用，单 个流是有序的，可能会因为丢包而阻塞，但其他流不会受到影响。</p><p>为了防止网络上的中间设备(Middle Box)识别协议的细节，QUIC 全面采用加密通信， 可以很好地抵御窜改和协议僵化(ossification)。</p><p>而且，因为 TLS1.3 已经在(2018)正式发布，所以 QUIC 就直接应用了 TLS1.3，顺便也就获得了 0-RTT、1-RTT 连接的好处。</p><p>但 QUIC 并不是建立在 TLS 之上，而是内部包含了 TLS。它使用自己的帧接管了 TLS 里的记录，握手消息、警报消息都不使用 TLS 记录，直接封装成 QUIC 的帧发送，省掉了一次开销。</p><h3 id="http-3协议" tabindex="-1"><strong>HTTP/3协议</strong> <a class="header-anchor" href="#http-3协议" aria-hidden="true">#</a></h3><p>了解了 QUIC 之后，再来看 HTTP/3 就容易多了。</p><p>因为 QUIC 本身就已经支持了加密、流和多路复用，所以 HTTP/3 的工作减轻了很多，把流控制都交给 QUIC 去做。调用的不再是 TLS 的安全接口，也不是 Socket API，而是专门 的 QUIC 函数。不过这个QUIC 函数还没有形成标准，必须要绑定到某一个具体的实现库。</p><p>HTTP/3 里仍然使用流来发送请求 - 响应，但它自身不需要像 HTTP/2 那样再去定义流，而是直接使用 QUIC 的流，相当于做了一个概念映射。</p><p>HTTP/3 里的双向流可以完全对应到 HTTP/2 的流，而单向流在 HTTP/3 里用来 实现控制和推送，近似地对应 HTTP/2 的 0 号流。</p><p>由于流管理被下放到了 QUIC，所以 HTTP/3 里帧的结构也变简单了。</p><p>帧头只有两个字段:类型和长度，而且同样都采用变长编码，最小只需要两个字节。</p><img src="'+a+'" alt="image-20220922102654002" style="zoom:50%;"><p>HTTP/3 里的帧仍然分成数据帧和控制帧两类，HEADERS 帧和 DATA 帧传输数据，但其他一些帧因为在下层的 QUIC 里有了替代，所以在 HTTP/3 里就都消失了，比如 RST_STREAM、WINDOW_UPDATE、PING 等。</p><p>头部压缩算法在 HTTP/3 里升级成了<strong>QPACK</strong>，使用方式上也做了改变。虽然也分成静态表和动态表，但在流上发送 HEADERS 帧时不能更新字段，只能引用，索引表的更新需要在专门的单向流上发送指令来管理，解决了 HPACK 的队头阻塞问题。</p><p>另外，QPACK 的字典也做了优化，静态表由之前的 61 个增加到了 98 个，而且序号从 0 开始，也就是说:authority的编号是 0。</p><h3 id="http-3服务发现" tabindex="-1"><strong>HTTP/3服务发现</strong> <a class="header-anchor" href="#http-3服务发现" aria-hidden="true">#</a></h3><p>讲了这么多，不知道你注意到了没有:HTTP/3 没有指定默认的端口号，也就是说不一定非要在 UDP 的 80 或者 443 上提供 HTTP/3 服务。</p><p>那么，该怎么发现HTTP/3 呢?</p><p>这就要用到 HTTP/2 里的扩展帧了。浏览器需要先用 HTTP/2 协议连接服务器，然后 服务器可以在启动 HTTP/2 连接后发送一个<strong>Alt-Svc</strong>帧，包含一 个h3=host:port的字符串，告诉浏览器在另一个端点上提供等价的 HTTP/3 服务。</p><p>浏览器收到Alt-Svc帧，会使用 QUIC 异步连接指定的端口，如果连接成功，就会断开 HTTP/2 连接，改用新的 HTTP/3 收发数据。</p><h3 id="小结" tabindex="-1"><strong>小结</strong> <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h3><p>HTTP/3 综合了我们之前讲的所有技术(HTTP/1、SSL/TLS、HTTP/2)，包含知识点很多，比如队头阻塞、0-RTT 握手、虚拟的流、多路复用，算得上是集大成之作， 需要多下些功夫好好体会。</p><ul><li><code>HTTP/3 基于 QUIC 协议，完全解决了队头阻塞问题</code>，弱网环境下的表现会优于 HTTP/2</li><li>QUIC 是一个新的传输层协议，建立在 UDP 之上，实现了可靠传输</li><li>QUIC 内含了 TLS1.3，只能加密通信，支持 0-RTT 快速建连</li><li>QUIC 的连接使用不透明的连接 ID，不绑定在IP 地址 + 端口上，支持连接迁移</li><li>QUIC 的流与 HTTP/2 的流很相似，但分为双向流和单向流</li><li>HTTP/3 没有指定默认端口号，需要用 HTTP/2 的扩展帧Alt-Svc来发现</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><p><a href="https://time.geekbang.org/column/intro/100029001" target="_blank" rel="noreferrer">透视HTTP协议(罗剑锋)</a></p>',50),h=[l];function P(n,s,o,d,c,C){return p(),e("div",null,h)}const g=T(i,[["render",P]]);export{I as __pageData,g as default};
