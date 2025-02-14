const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.DaCITxR9.js","assets/chunks/provide.CB-ltRHt.js","assets/chunks/property.CktKRGPk.js","assets/chunks/notifications-client.Dxc8Nd9s.js","assets/chunks/signal-watcher.CKR4BRqc.js","assets/chunks/notifications-context.x8kpqgqg.js","assets/chunks/context.B4DPM_iL.js","assets/chunks/my-notifications-icon-button.CP_gMfjz.js","assets/chunks/my-notifications-list.Cs2-Rp_P.js"])))=>i.map(i=>d[i]);
import{v as e,V as i,c as n,a2 as o,j as l,o as p}from"./chunks/framework.CVghwt5M.js";import{N as c,a as h,b as d,Q as r,k}from"./chunks/notifications-client.Dxc8Nd9s.js";const b=JSON.parse('{"title":"<my-notifications-icon-button>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/my-notifications-icon-button.md","filePath":"elements/my-notifications-icon-button.md"}'),m={name:"elements/my-notifications-icon-button.md"},y=Object.assign(m,{setup(u){return e(async()=>{await i(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await i(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await i(()=>import("./chunks/profiles-context.DaCITxR9.js"),__vite__mapDeps([4,2,5,6,7,8])),customElements.get("notifications-context")||await i(()=>import("./chunks/notifications-context.x8kpqgqg.js"),__vite__mapDeps([9,5,6,7,10])),customElements.get("my-notifications-icon-button")||await i(()=>import("./chunks/my-notifications-icon-button.CP_gMfjz.js"),__vite__mapDeps([11,12,6,7,8,10,2]));const s=new c,t=new h(s,"notifications_test");await t.sendNotification(s.myPubKey,"example","type1","group1",{Hello:"world!"});const a=new d(t);r(k`
    <notifications-context .store=${a}>
      <api-demo src="custom-elements.json" only="my-notifications-icon-button" exclude-knobs="store">
        <template data-element="my-notifications-icon-button" data-target="host">
          <my-notifications-icon-button style="height: 250px; width: 500px; display: flex">
          </my-notifications-icon-button>
        </template>
      </api-demo>
    </notifications-context>
  `,document.querySelector("element-demo"))}),(s,t)=>(p(),n("div",null,t[0]||(t[0]=[o(`<h1 id="my-notifications-icon-button" tabindex="-1"><code>&lt;my-notifications-icon-button&gt;</code> <a class="header-anchor" href="#my-notifications-icon-button" aria-label="Permalink to &quot;\`&lt;my-notifications-icon-button&gt;\`&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/notifications-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>&lt;my-notifications-icon-button&gt;</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/notifications-zome/dist/elements/my-notifications-icon-button.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PhEmw" id="tab-8FGa3Wr" checked><label for="tab-8FGa3Wr">Lit</label><input type="radio" name="group-PhEmw" id="tab-7eZpaS2"><label for="tab-7eZpaS2">React</label><input type="radio" name="group-PhEmw" id="tab-28yeElt"><label for="tab-28yeElt">Angular</label><input type="radio" name="group-PhEmw" id="tab-ZVJ6kPU"><label for="tab-ZVJ6kPU">Vue</label><input type="radio" name="group-PhEmw" id="tab-OjX3fk8"><label for="tab-OjX3fk8">Svelte</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-notifications-icon-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;my-notifications-icon-button&gt;</code> needs to be placed inside an initialized <code>&lt;notifications-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>&lt;my-notifications-icon-button&gt;</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>`,12),l("api-docs",{src:"custom-elements.json",only:"my-notifications-icon-button"},null,-1)])))}});export{b as __pageData,y as default};
