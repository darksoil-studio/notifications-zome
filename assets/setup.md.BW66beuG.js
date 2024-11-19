import{_ as t,c as a,a2 as i,o}from"./chunks/framework.CPOjNdi5.js";const u=JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"setup.md","filePath":"setup.md"}'),s={name:"setup.md"};function n(l,e,d,c,h,p){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>This guide assumes that you have scaffolded a hApp with the <a href="https://darksoil.studio/tnesh-stack/scaffolding-a-happ" target="_blank" rel="noreferrer">TNESH stack template</a>.</p></div><p>Run this to scaffold this zome in your hApp:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github:darksoil-studio/notifications-zome#scaffold</span></span></code></pre></div><p>This will do the following:</p><ul><li>Add the <code>github:darksoil-studio/notifications-zome</code> flake input to your <code>flake.nix</code>.</li><li>Add the <code>notifications</code> coordinator and zome packages to the <code>dna.nix</code> that you select.</li><li>Add the UI package for <code>@darksoil-studio/notifications-zome</code> as a dependency of your UI package.</li><li>Add the <code>&lt;notifications-context&gt;</code> element at the top level of your application.</li></ul><p>That&#39;s it! You have now integrated the <code>notifications</code> coordinator and integrity zomes and their UI into your app!</p><p>Now, <a href="/notifications-zome/elements/my-notifications-icon-button.html">choose which elements you need</a> and import them like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@darksoil-studio/notifications-zome/dist/elements/my-notifications-icon-button.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>And then they are ready be used inside the <code>&lt;notifications-context&gt;</code> just like any other HTML tag.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Importing the elements from the UI package will define them in the global <code>CustomElementsRegistry</code>, which makes them available to be used like any normal HTML tag. You can read more about custom elements <a href="https://darksoil.studio/tnesh-stack/guides/custom-elements" target="_blank" rel="noreferrer">here</a>.</p></div><h1 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h1><p>You can see a full working example of the UI working in <a href="https://github.com/darksoil-studio/notifications-zome/blob/main/ui/demo/index.html" target="_blank" rel="noreferrer">here</a>.</p>',13)]))}const m=t(s,[["render",n]]);export{u as __pageData,m as default};
