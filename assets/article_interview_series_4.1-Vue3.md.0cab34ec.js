import{_ as e,c as o,o as t,a as i}from"./app.472a3350.js";const v=JSON.parse('{"title":"Vue3","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue3.0有什么更新","slug":"vue3-0有什么更新","link":"#vue3-0有什么更新","children":[]},{"level":2,"title":"defineProperty和proxy的区别","slug":"defineproperty和proxy的区别","link":"#defineproperty和proxy的区别","children":[]},{"level":2,"title":"Vue3.0 为什么要用 proxy？","slug":"vue3-0-为什么要用-proxy","link":"#vue3-0-为什么要用-proxy","children":[]},{"level":2,"title":"Vue 3.0 中的 Vue Composition API？","slug":"vue-3-0-中的-vue-composition-api","link":"#vue-3-0-中的-vue-composition-api","children":[]},{"level":2,"title":"Composition API与React Hook很像，区别是什么","slug":"composition-api与react-hook很像-区别是什么","link":"#composition-api与react-hook很像-区别是什么","children":[]},{"level":2,"title":"watch 和 watchEffect的区别","slug":"watch-和-watcheffect的区别","link":"#watch-和-watcheffect的区别","children":[]},{"level":2,"title":"reactive 和ref的区别, ref可以定义响应式对象吗?","slug":"reactive-和ref的区别-ref可以定义响应式对象吗","link":"#reactive-和ref的区别-ref可以定义响应式对象吗","children":[]}],"relativePath":"article/interview/series/4.1-Vue3.md"}'),r={name:"article/interview/series/4.1-Vue3.md"},a=i(`<h1 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h1><h2 id="vue3-0有什么更新" tabindex="-1"><strong>Vue3.0有什么更新</strong> <a class="header-anchor" href="#vue3-0有什么更新" aria-hidden="true">#</a></h2><ol><li>监听机制的改变 <ul><li>使用proxy实现响应式</li><li>消除了了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制 (<code>不能响应式删除添加和删除属性</code>)</li></ul></li><li>新增组合API(<code>Composition API</code>)</li><li>支持多个根节点</li><li>新的生命周期钩子函数</li></ol><p><a href="https://www.javascriptc.com/vue3js/guide/migration/introduction.html#%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">具体访问</a></p><h2 id="defineproperty和proxy的区别" tabindex="-1"><strong>defineProperty和proxy的区别</strong> <a class="header-anchor" href="#defineproperty和proxy的区别" aria-hidden="true">#</a></h2><p>Vue 在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。</p><p>Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。</p><p>但是这样做有以下问题：</p><ol><li>添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过<code>$set</code> 来调用<code>Object.defineProperty()</code>处理。</li><li>无法监控到数组下标和长度的变化。</li></ol><p>Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。相对于<code>Object.defineProperty()</code>，其有以下特点：</p><ol><li>Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。</li><li>Proxy 可以监听数组的变化。</li></ol><h2 id="vue3-0-为什么要用-proxy" tabindex="-1"><strong>Vue3.0 为什么要用 proxy？</strong> <a class="header-anchor" href="#vue3-0-为什么要用-proxy" aria-hidden="true">#</a></h2><pre><code>在 Vue2 中， 0bject.defineProperty 会改变原始数据，
</code></pre><p>而 Proxy 是创建对象的虚拟表示，并提供 set 、get 和 deleteProperty 等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶</p><ul><li>不需用使用 <code>Vue.$set</code> 或 <code>Vue.$delete</code> 触发响应式。</li><li>全方位的数组变化检测，消除了Vue2 无效的边界情况。</li><li>支持 Map，Set，WeakMap 和 WeakSet。</li></ul><p>Proxy 实现的响应式原理与 Vue2的实现原理相同，实现方式大同小异∶</p><ul><li>get 收集依赖</li><li>Set、delete 等触发依赖</li><li>对于集合类型，就是对集合对象的方法做一层包装：原方法执行后执行依赖相关的收集或触发逻辑。</li></ul><h2 id="vue-3-0-中的-vue-composition-api" tabindex="-1"><strong>Vue 3.0 中的 Vue Composition API？</strong> <a class="header-anchor" href="#vue-3-0-中的-vue-composition-api" aria-hidden="true">#</a></h2><p>在 Vue2 中，代码是 Options API 风格的，也就是通过填充 (option) data、methods、computed 等属性来完成一个 Vue 组件。这种风格使得 Vue 相对于 React极为容易上手，同时也造成了几个问题：</p><ol><li>由于 Options API 不够灵活的开发方式，使得Vue开发缺乏优雅的方法来在组件间共用代码。</li><li>Vue 组件过于依赖<code>this</code>上下文，Vue 背后的一些小技巧使得 Vue 组件的开发看起来与 JavaScript 的开发原则相悖，比如在<code>methods</code> 中的<code>this</code>竟然指向组件实例来不指向<code>methods</code>所在的对象。这也使得 TypeScript 在Vue2 中很不好用。</li></ol><p>于是在 Vue3 中，舍弃了 Options API，转而投向 Composition API。Composition API本质上是将 Options API 背后的机制暴露给用户直接使用，这样用户就拥有了更多的灵活性，也使得 Vue3 更适合于 TypeScript 结合。</p><h2 id="composition-api与react-hook很像-区别是什么" tabindex="-1"><strong>Composition API与React Hook很像，区别是什么</strong> <a class="header-anchor" href="#composition-api与react-hook很像-区别是什么" aria-hidden="true">#</a></h2><p>从React Hook的实现角度看，React Hook是根据useState调用的顺序来确定下一次重渲染时的state是来源于哪个useState，所以出现了以下限制</p><ul><li>不能在循环、条件、嵌套函数中调用Hook</li><li>必须确保总是在你的React函数的顶层调用Hook</li><li>useEffect、useMemo等函数必须手动确定依赖关系</li></ul><p>而Composition API是基于Vue的响应式系统实现的，与React Hook的相比</p><ul><li>声明在setup函数内，一次组件实例化只调用一次setup，而React Hook每次重渲染都需要调用Hook，使得React的GC比Vue更有压力，性能也相对于Vue来说也较慢</li><li>Compositon API的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用</li><li>响应式系统自动实现了依赖收集，进而组件的部分的性能优化由Vue内部自己完成，而React Hook需要手动传入依赖，而且必须必须保证依赖的顺序，让useEffect、useMemo等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。</li></ul><p>虽然Compositon API看起来比React Hook好用，但是其设计思想也是借鉴React Hook的。</p><p><a href="https://cn.vuejs.org/guide/extras/composition-api-faq.html#comparison-with-react-hooks" target="_blank" rel="noreferrer">具体访问</a></p><h2 id="watch-和-watcheffect的区别" tabindex="-1"><strong>watch 和 watchEffect的区别</strong> <a class="header-anchor" href="#watch-和-watcheffect的区别" aria-hidden="true">#</a></h2><ul><li>watch 可以懒执行副作用(<code>可以设置{lazy: true}</code>)</li><li>watch 更加明确是应该由哪个状态触发侦听器重新执行</li><li>可以访问所侦听状态的前一个值和当前值</li></ul><h2 id="reactive-和ref的区别-ref可以定义响应式对象吗" tabindex="-1"><strong>reactive 和ref的区别, ref可以定义响应式对象吗?</strong> <a class="header-anchor" href="#reactive-和ref的区别-ref可以定义响应式对象吗" aria-hidden="true">#</a></h2><ul><li>reactive 主要用于定义响应式对象(<code>reactive是通过proxy实现的, 而proxy只支持对象</code>)</li><li>ref主要用于定义响应式基础数据(<code>ref是通过Object.defineProperty实现的</code>)</li></ul><p>ref也是可以定义响应式对象的? 但是会走reactive的逻辑</p>`,33),l=[a];function c(p,n,d,s,u,h){return t(),o("div",null,l)}const V=e(r,[["render",c]]);export{v as __pageData,V as default};