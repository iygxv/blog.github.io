import{_ as s,c as e,o,N as a}from"./chunks/framework.5b6ea098.js";const t="/blog/assets/image-20220926143254555.672bea89.png",l="/blog/assets/image-20220926143442061.02b61b7f.png",n="/blog/assets/image-20220926144809205.7a5e6b4e.png",r="/blog/assets/image-20230204170619376.7cc3fe8b.png",i="/blog/assets/image-20230204170742366.945b0d31.png",c="/blog/assets/image-20230204170941087.bd7382ae.png",p="/blog/assets/image-20230204171052394.f5807a11.png",A=JSON.parse('{"title":"5-sourcetree操作","description":"","frontmatter":{},"headers":[],"relativePath":"article/harvest/git/2-sourcetree操作.md"}'),g={name:"article/harvest/git/2-sourcetree操作.md"},d=a('<h1 id="_5-sourcetree操作" tabindex="-1"><strong>5-sourcetree操作</strong> <a class="header-anchor" href="#_5-sourcetree操作" aria-label="Permalink to &quot;**5-sourcetree操作**&quot;">​</a></h1><h2 id="重置" tabindex="-1"><strong>重置</strong> <a class="header-anchor" href="#重置" aria-label="Permalink to &quot;**重置**&quot;">​</a></h2><p><strong>重置(reset)主要用于将改动提交(commit)到本地而未推送(push)到远程仓库时,<code>reset</code>是用来重置本地仓库的<code>commit</code>命令</strong></p><img src="'+t+'" alt="image-20220926143254555"><p>点击重置到这次提交后, 会出现</p><p><img src="'+l+'" alt="image-20220926143442061"></p><ul><li><strong>软合并：保存改动文件，将改动文件回退到暂存区，也就是<code>git add</code>之后的状态</strong></li><li><strong>混合合并：保存改动文件，将改动文件回退到未暂存状态，也就是<code>git add</code>之前的状态</strong></li><li><strong>强行合并：丢弃改动文件，强制回退到指定版本</strong></li></ul><p>特殊情况(如重置远程的)</p><ul><li>git push -f origin master(<code>非特殊情况不要乱用</code>)</li><li>强行推送并且会覆盖的commit(<code>git log查看commit</code>)</li></ul><p>使用场景</p><ul><li>用于本地操作(回滚)</li><li>撤销commit(未推送到远端情况)</li></ul><h2 id="回滚操作" tabindex="-1"><strong>回滚操作</strong> <a class="header-anchor" href="#回滚操作" aria-label="Permalink to &quot;**回滚操作**&quot;">​</a></h2><p><strong>回滚(revert)主要用于已经<code>push</code>到远程仓库时,<code>revert</code>后会新增加一个<code>commit</code>,<code>commit</code>的内容是之前提交内容的反操作，就像你修改内容提交一样，远程仓库认为这是一个新的提交，从而应用到远程分支上</strong></p><p><code>特别注意: 回滚是提交内容的反操作</code></p><ul><li>也就是说, 你回滚的是新增的内容, 那么你回滚后, 则会删除这些内容</li></ul><p><img src="'+n+`" alt="image-20220926144809205"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 回滚前, 提交的文件有</span></span>
<span class="line"><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">当前的记录feat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">fallback</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">当前的记录feat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">fallback</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">对记录为feat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">test 的进行回滚</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 回滚后, 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">fallback</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span></code></pre></div><p>然后push远程之后就会回滚成功</p><h3 id="撤销回滚操作" tabindex="-1"><strong>撤销回滚操作</strong> <a class="header-anchor" href="#撤销回滚操作" aria-label="Permalink to &quot;**撤销回滚操作**&quot;">​</a></h3><ul><li>先使用<code>git reflog</code>查看操作记录</li><li>然后再使用<code>git reset --hard 0df18f6</code></li></ul><h2 id="变基合并" tabindex="-1"><strong>变基合并</strong> <a class="header-anchor" href="#变基合并" aria-label="Permalink to &quot;**变基合并**&quot;">​</a></h2><ul><li>两者都可以把别人提交的代码，同步到自己的开发分支。</li><li>合并，从SourceTree的图表上看，会有多条线。而变基只有一条蓝色的线（好像就这点不同了）。</li></ul><h3 id="变基操作" tabindex="-1"><strong>变基操作</strong> <a class="header-anchor" href="#变基操作" aria-label="Permalink to &quot;**变基操作**&quot;">​</a></h3><ol><li>多人同时开发，小明同学在<strong>dev1</strong>分支上开发，“我”在<strong>dev2</strong>分支上开发；</li><li>小明同学开发完成并提交了代码到他的<strong>dev1</strong>分支上，“我”也开发完成并提交到<strong>dev2</strong>上；</li><li>现在“我”要把小明的代码，同步到“我”的分支，也就是，<strong>dev1</strong>同步到<strong>dev2</strong>。</li></ol><p>以下是操作</p><ul><li><strong>小明同学提交代码到dev1，“我”把分支切换到dev1，并拉取最新代码</strong></li><li><strong>然后“我”切换到dev2，并选中小明同学提交的代码</strong></li><li><strong>选中“变基”</strong></li></ul><p>变基完成后 <code>dev1</code> 的代码会同步到 <code>dev2</code> 中</p><h2 id="交互式变基" tabindex="-1"><strong>交互式变基</strong> <a class="header-anchor" href="#交互式变基" aria-label="Permalink to &quot;**交互式变基**&quot;">​</a></h2><p>在代码没有pull前我们可以在本地分支进行提交的合并。这样会使得远程分支不去关心本地开发过程日志，而使得远程日志干净整洁。</p><p><strong>具体操作</strong></p><ul><li><p>首先， 我们commit了三次</p><p><img src="`+r+'" alt="image-20230204170619376"></p></li><li><p>我们需要把这三次的commit， 重置为一次， 所以我们需要再第一次的下面一次提交选择交互式变基</p><p><img src="'+i+'" alt="image-20230204170742366"></p></li><li><p>然后会出现交互式变基的界面， 点击<code>用以前的提交来squash</code>， 此时会产生一条新的提交</p><p><img src="'+c+'" alt="image-20230204170941087"></p></li><li><p>最后一步， 编辑一下新commit 的信息，就ok了</p><p><img src="'+p+'" alt="image-20230204171052394"></p></li></ul><p><strong>取消交互式变基</strong></p><ul><li>git rebase --abort</li></ul><p><strong>场景</strong></p><ul><li>本地多个commit 合并为一个commit</li></ul><h2 id="小结" tabindex="-1"><strong>小结</strong> <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;**小结**&quot;">​</a></h2><ul><li>没有push到远程仓库, 用<code>重置(reset)</code></li><li>已经push到远程仓库, 用<code>回滚(revert)</code></li><li>交互式变基的一个核心场景 - 多个commit 合并为一个commit(<code>本地</code>)</li><li>如果进行多次相同操作(修复同一bug/样式)，可以选择变基， 否则选择合并(合并与变基)</li></ul>',37),m=[d];function u(h,_,b,f,C,D){return o(),e("div",null,m)}const F=s(g,[["render",u]]);export{A as __pageData,F as default};
