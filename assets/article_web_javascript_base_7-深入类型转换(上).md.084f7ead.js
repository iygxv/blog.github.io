import{_ as s,c as a,o as n,N as o}from"./chunks/framework.5b6ea098.js";const A=JSON.parse('{"title":"深入类型判断转换(上)","description":"","frontmatter":{},"headers":[],"relativePath":"article/web/javascript/base/7-深入类型转换(上).md"}'),e={name:"article/web/javascript/base/7-深入类型转换(上).md"},l=o(`<h1 id="深入类型判断转换-上" tabindex="-1">深入类型判断转换(上) <a class="header-anchor" href="#深入类型判断转换-上" aria-label="Permalink to &quot;深入类型判断转换(上)&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>将值从一种类型转换为另一种类型通常称为类型转换。</p><p>ES6 前，JavaScript 共有六种数据类型：Undefined、Null、Boolean、Number、String、Object。</p><p>我们先捋一捋基本类型之间的转换。</p><h2 id="原始值转布尔" tabindex="-1">原始值转布尔 <a class="header-anchor" href="#原始值转布尔" aria-label="Permalink to &quot;原始值转布尔&quot;">​</a></h2><p>我们使用 Boolean 函数将类型转换成布尔类型，在 JavaScript 中，只有 6 种值可以被转换成 false，其他都会被转换成 true。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(Boolean()) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(false)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(undefined)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(null)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(+0)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(-0)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(NaN)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean(&quot;&quot;)) // false</span></span></code></pre></div><p>注意，当 Boolean 函数不传任何参数时，会返回 false。</p><h2 id="原始值转数字" tabindex="-1">原始值转数字 <a class="header-anchor" href="#原始值转数字" aria-label="Permalink to &quot;原始值转数字&quot;">​</a></h2><p>我们可以使用 Number 函数将类型转换成数字类型，如果参数无法被转换为数字，则返回 NaN。</p><p>在看例子之前，我们先看 <a href="http://es5.github.io/#x15.7.1.1" target="_blank" rel="noreferrer">ES5 规范 15.7.1.1</a> 中关于 Number 的介绍：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/27/1711a18d770606a5~tplv-t2oaga2asx-image.image" alt="img"></p><p>根据规范，如果 Number 函数不传参数，返回 +0，如果有参数，调用 <code>ToNumber(value)</code>。</p><p>注意这个 <code>ToNumber</code> 表示的是一个底层规范实现上的方法，并没有直接暴露出来。</p><p>而 <code>ToNumber</code> 则直接给了一个<a href="http://es5.github.io/#x9.3" target="_blank" rel="noreferrer">对应的结果表</a>。表如下：</p><table><thead><tr><th>参数类型</th><th>结果</th></tr></thead><tbody><tr><td>Undefined</td><td>NaN</td></tr><tr><td>Null</td><td>+0</td></tr><tr><td>Boolean</td><td>如果参数是 true，返回 1。参数为 false，返回 +0</td></tr><tr><td>Number</td><td>返回与之相等的值</td></tr><tr><td>String</td><td>这段比较复杂，看例子</td></tr></tbody></table><p>让我们写几个例子验证一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(Number()) // +0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(undefined)) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(null)) // +0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(false)) // +0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(true)) // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;123&quot;)) // 123</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;-123&quot;)) // -123</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;1.2&quot;)) // 1.2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;000123&quot;)) // 123</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;-000123&quot;)) // -123</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;0x11&quot;)) // 17</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;&quot;)) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot; &quot;)) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;123 123&quot;)) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;foo&quot;)) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(&quot;100a&quot;)) // NaN</span></span></code></pre></div><p>如果通过 Number 转换函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 0，如果有一个字符不是数字，结果都会返回 NaN，鉴于这种严格的判断，我们一般还会使用更加灵活的 parseInt 和 parseFloat 进行转换。</p><p>parseInt 只解析整数，parseFloat 则可以解析整数和浮点数，如果字符串前缀是 &quot;0x&quot; 或者&quot;0X&quot;，parseInt 将其解释为十六进制数，parseInt 和 parseFloat 都会跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略后面的内容。如果第一个非空格字符是非法的数字直接量，将最终返回 NaN：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(parseInt(&quot;3 abc&quot;)) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseFloat(&quot;3.14 abc&quot;)) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseInt(&quot;-12.34&quot;)) // -12</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseInt(&quot;0xFF&quot;)) // 255</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseFloat(&quot;.1&quot;)) // 0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(parseInt(&quot;0.1&quot;)) // 0</span></span></code></pre></div><h2 id="原始值转字符" tabindex="-1">原始值转字符 <a class="header-anchor" href="#原始值转字符" aria-label="Permalink to &quot;原始值转字符&quot;">​</a></h2><p>我们使用 <code>String</code> 函数将类型转换成字符串类型，依然先看 <a href="http://es5.github.io/#x15.5.1.1" target="_blank" rel="noreferrer">规范15.5.1.1</a>中有关 <code>String</code> 函数的介绍：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/27/1711a18d76bf954d~tplv-t2oaga2asx-image.image" alt="img"></p><p>如果 <code>String</code> 函数不传参数，返回空字符串，如果有参数，调用 <code>ToString(value)</code>，而 <code>ToString</code> 也给了一个对应的结果表。表如下：</p><table><thead><tr><th>参数类型</th><th>结果</th></tr></thead><tbody><tr><td>Undefined</td><td>&quot;undefined&quot;</td></tr><tr><td>Null</td><td>&quot;null&quot;</td></tr><tr><td>Boolean</td><td>如果参数是 true，返回 &quot;true&quot;。参数为 false，返回 &quot;false&quot;</td></tr><tr><td>Number</td><td>又是比较复杂，可以看例子</td></tr><tr><td>String</td><td>返回与之相等的值</td></tr></tbody></table><p>让我们写几个例子验证一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(String()) // 空字符串</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(undefined)) // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(null)) // null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(false)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(true)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(0)) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(-0)) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(NaN)) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(Infinity)) // Infinity</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(-Infinity)) // -Infinity</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(1)) // 1</span></span></code></pre></div><p>注意这里的 <code>ToString</code> 和上一节的 <code>ToNumber</code> 都是底层规范实现的方法，并没有直接暴露出来。</p><h2 id="原始值转对象" tabindex="-1">原始值转对象 <a class="header-anchor" href="#原始值转对象" aria-label="Permalink to &quot;原始值转对象&quot;">​</a></h2><p>原始值到对象的转换非常简单，原始值通过调用 String()、Number() 或者 Boolean() 构造函数，转换为它们各自的包装对象。</p><p>null 和 undefined 属于例外，当将它们用在期望是一个对象的地方都会造成一个类型错误 (TypeError) 异常，而不会执行正常的转换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof a); // number</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new Number(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof b); // object</span></span></code></pre></div><h2 id="对象转布尔值" tabindex="-1">对象转布尔值 <a class="header-anchor" href="#对象转布尔值" aria-label="Permalink to &quot;对象转布尔值&quot;">​</a></h2><p>对象到布尔值的转换非常简单：所有对象(包括数组和函数)都转换为 true。对于包装对象也是这样，举个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(Boolean(new Boolean(false))) // true</span></span></code></pre></div><h2 id="对象转字符串和数字" tabindex="-1">对象转字符串和数字 <a class="header-anchor" href="#对象转字符串和数字" aria-label="Permalink to &quot;对象转字符串和数字&quot;">​</a></h2><p>对象到字符串和对象到数字的转换都是通过调用待转换对象的一个方法来完成的。而 JavaScript 对象有两个不同的方法来执行转换，一个是 <code>toString</code>，一个是 <code>valueOf</code>。注意这个跟上面所说的 <code>ToString</code> 和 <code>ToNumber</code> 是不同的，这两个方法是真实暴露出来的方法。</p><p>所有的对象除了 null 和 undefined 之外的任何值都具有 <code>toString</code> 方法，通常情况下，它和使用 String 方法返回的结果一致。<code>toString</code> 方法的作用在于返回一个反映这个对象的字符串，然而这才是情况复杂的开始。</p><p>在<a href="https://github.com/mqyqingfeng/Blog/issues/28" target="_blank" rel="noreferrer">《JavaScript专题之类型判断(上)》</a>中讲到过 Object.prototype.toString 方法会根据这个对象的[[class]]内部属性，返回由 &quot;[object &quot; 和 class 和 &quot;]&quot; 三个部分组成的字符串。举个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Object.prototype.toString.call({a: 1}) // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">({a: 1}).toString() // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">({a: 1}).toString === Object.prototype.toString // true</span></span></code></pre></div><p>我们可以看出当调用对象的 toString 方法时，其实调用的是 Object.prototype 上的 toString 方法。</p><p>然而 JavaScript 下的很多类根据各自的特点，定义了更多版本的 toString 方法。例如:</p><ol><li>数组的 toString 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。</li><li>函数的 toString 方法返回源代码字符串。</li><li>日期的 toString 方法返回一个可读的日期和时间字符串。</li><li>RegExp 的 toString 方法返回一个表示正则表达式直接量的字符串。</li></ol><p>读文字太抽象？我们直接写例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(({}).toString()) // [object Object]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([].toString()) // &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([0].toString()) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([1, 2, 3].toString()) // 1,2,3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((function(){var a = 1;}).toString()) // function (){var a = 1;}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((/\\d+/g).toString()) // /\\d+/g</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((new Date(2010, 0, 1)).toString()) // Fri Jan 01 2010 00:00:00 GMT+0800 (CST)</span></span></code></pre></div><p>而另一个转换对象的函数是 valueOf，表示对象的原始值。默认的 valueOf 方法返回这个对象本身，数组、函数、正则简单的继承了这个默认方法，也会返回对象本身。日期是一个例外，它会返回它的一个内容表示: 1970 年 1 月 1 日以来的毫秒数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var date = new Date(2017, 4, 21);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(date.valueOf()) // 1495296000000</span></span></code></pre></div><h2 id="对象接着转字符串和数字" tabindex="-1">对象接着转字符串和数字 <a class="header-anchor" href="#对象接着转字符串和数字" aria-label="Permalink to &quot;对象接着转字符串和数字&quot;">​</a></h2><p>了解了 toString 方法和 valueOf 方法，我们分析下从对象到字符串是如何转换的。看规范 <a href="http://es5.github.io/#x9.8" target="_blank" rel="noreferrer">ES5 9.8</a>，其实就是 ToString 方法的对应表，只是这次我们加上 Object 的转换规则：</p><table><thead><tr><th>参数类型</th><th>结果</th></tr></thead><tbody><tr><td>Object</td><td>1. primValue = ToPrimitive(input, String)</td></tr><tr><td>2. 返回ToString(primValue).</td><td></td></tr></tbody></table><p>所谓的 ToPrimitive 方法，其实就是输入一个值，然后返回一个一定是基本类型的值。</p><p>我们总结一下，当我们用 String 方法转化一个值的时候，如果是基本类型，就参照 “原始值转字符” 这一节的对应表，如果不是基本类型，我们会将调用一个 ToPrimitive 方法，将其转为基本类型，然后再参照“原始值转字符” 这一节的对应表进行转换。</p><p>其实，从对象到数字的转换也是一样：</p><table><thead><tr><th>参数类型</th><th>结果</th></tr></thead><tbody><tr><td>Object</td><td>1. primValue = ToPrimitive(input, Number)</td></tr><tr><td>2. 返回ToNumber(primValue)。</td><td></td></tr></tbody></table><p>虽然转换成基本值都会使用 ToPrimitive 方法，但传参有不同，最后的处理也有不同，转字符串调用的是 <code>ToString</code>，转数字调用 <code>ToNumber</code>。</p><h2 id="toprimitive" tabindex="-1">ToPrimitive <a class="header-anchor" href="#toprimitive" aria-label="Permalink to &quot;ToPrimitive&quot;">​</a></h2><p>那接下来就要看看 ToPrimitive 了，在了解了 toString 和 valueOf 方法后，这个也很简单。</p><p>让我们看规范 9.1，函数语法表示如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ToPrimitive(input[, PreferredType])</span></span></code></pre></div><p>第一个参数是 input，表示要处理的输入值。</p><p>第二个参数是 PreferredType，非必填，表示希望转换成的类型，有两个值可以选，Number 或者 String。</p><p>当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String，否则，都相当于传入 Number。</p><p>如果传入的 input 是 Undefined、Null、Boolean、Number、String 类型，直接返回该值。</p><p>如果是 ToPrimitive(obj, Number)，处理步骤如下：</p><ol><li>如果 obj 为 基本类型，直接返回</li><li>否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。</li><li>否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。</li><li>否则，JavaScript 抛出一个类型错误异常。</li></ol><p>如果是 ToPrimitive(obj, String)，处理步骤如下：</p><ol><li>如果 obj为 基本类型，直接返回</li><li>否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。</li><li>否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。</li><li>否则，JavaScript 抛出一个类型错误异常。</li></ol><h2 id="对象转字符串" tabindex="-1">对象转字符串 <a class="header-anchor" href="#对象转字符串" aria-label="Permalink to &quot;对象转字符串&quot;">​</a></h2><p>所以总结下，对象转字符串(就是 Number() 函数)可以概括为：</p><ol><li>如果对象具有 toString 方法，则调用这个方法。如果他返回一个原始值，JavaScript 将这个值转换为字符串，并返回这个字符串结果。</li><li>如果对象没有 toString 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 valueOf 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转换为字符串，并返回这个字符串的结果。</li><li>否则，JavaScript 无法从 toString 或者 valueOf 获得一个原始值，这时它将抛出一个类型错误异常。</li></ol><h2 id="对象转数字" tabindex="-1">对象转数字 <a class="header-anchor" href="#对象转数字" aria-label="Permalink to &quot;对象转数字&quot;">​</a></h2><p>对象转数字的过程中，JavaScript 做了同样的事情，只是它会首先尝试 valueOf 方法</p><ol><li>如果对象具有 valueOf 方法，且返回一个原始值，则 JavaScript 将这个原始值转换为数字并返回这个数字</li><li>否则，如果对象具有 toString 方法，且返回一个原始值，则 JavaScript 将其转换并返回。</li><li>否则，JavaScript 抛出一个类型错误异常。</li></ol><p>举个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(Number({})) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number({a : 1})) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number([])) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number([0])) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number([1, 2, 3])) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(function(){var a = 1;})) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(/\\d+/g)) // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(new Date(2010, 0, 1))) // 1262275200000</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number(new Error(&#39;a&#39;))) // NaN</span></span></code></pre></div><p>注意，在这个例子中，<code>[]</code> 和 <code>[0]</code> 都返回了 0，而 <code>[1, 2, 3]</code> 却返回了一个 NaN。我们分析一下原因：</p><p>当我们 <code>Number([])</code> 的时候，先调用 <code>[]</code> 的 <code>valueOf</code> 方法，此时返回 <code>[]</code>，因为返回了一个对象而不是原始值，所以又调用了 <code>toString</code> 方法，此时返回一个空字符串，接下来调用 <code>ToNumber</code> 这个规范上的方法，参照对应表，转换为 <code>0</code>, 所以最后的结果为 <code>0</code>。</p><p>而当我们 <code>Number([1, 2, 3])</code> 的时候，先调用 <code>[1, 2, 3]</code> 的 <code>valueOf</code> 方法，此时返回 <code>[1, 2, 3]</code>，再调用 <code>toString</code> 方法，此时返回 <code>1,2,3</code>，接下来调用 <code>ToNumber</code>，参照对应表，因为无法转换为数字，所以最后的结果为 <code>NaN</code>。</p><h2 id="json-stringify" tabindex="-1">JSON.stringify <a class="header-anchor" href="#json-stringify" aria-label="Permalink to &quot;JSON.stringify&quot;">​</a></h2><p>值得一提的是：JSON.stringify() 方法可以将一个 JavaScript 值转换为一个 JSON 字符串，实现上也是调用了 toString 方法，也算是一种类型转换的方法。下面讲一讲JSON.stringify 的注意要点：</p><p>1.处理基本类型时，与使用toString基本相同，结果都是字符串，除了 undefined</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(null)) // null</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(undefined)) // undefined，注意这个undefined不是字符串的undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(true)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(42)) // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(&quot;42&quot;)) // &quot;42&quot;</span></span></code></pre></div><p>2.布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JSON.stringify([new Number(1), new String(&quot;false&quot;), new Boolean(false)]); // &quot;[1,&quot;false&quot;,false]&quot;</span></span></code></pre></div><p>3.undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JSON.stringify({x: undefined, y: Object, z: Symbol(&quot;&quot;)}); </span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;{}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify([undefined, Object, Symbol(&quot;&quot;)]);          </span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;[null,null,null]&quot;</span></span></code></pre></div><p>4.JSON.stringify 有第二个参数 replacer，它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function replacer(key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof value === &quot;string&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var foo = {foundation: &quot;Mozilla&quot;, model: &quot;box&quot;, week: 45, transport: &quot;car&quot;, month: 7};</span></span>
<span class="line"><span style="color:#A6ACCD;">var jsonString = JSON.stringify(foo, replacer);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(jsonString)</span></span>
<span class="line"><span style="color:#A6ACCD;">// {&quot;week&quot;:45,&quot;month&quot;:7}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var foo = {foundation: &quot;Mozilla&quot;, model: &quot;box&quot;, week: 45, transport: &quot;car&quot;, month: 7};</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(JSON.stringify(foo, [&#39;week&#39;, &#39;month&#39;]));</span></span>
<span class="line"><span style="color:#A6ACCD;">// {&quot;week&quot;:45,&quot;month&quot;:7}</span></span></code></pre></div><p>5.如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 toJSON 方法后的返回值会被序列化，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  foo: &#39;foo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  toJSON: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify(obj);      // &#39;&quot;bar&quot;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify({x: obj}); // &#39;{&quot;x&quot;:&quot;bar&quot;}&#39;</span></span></code></pre></div>`,93),t=[l];function p(c,r,i,d,u,C){return n(),a("div",null,t)}const y=s(e,[["render",p]]);export{A as __pageData,y as default};
