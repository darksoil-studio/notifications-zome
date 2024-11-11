import{c as ut,S as je,_ as f,r as ge,w as wt,a as ft,R as tt,e as I,b as me,d as ye,L as be,m as Xt,f as Gt,s as jt,p as ve,H as Ie,t as Ke,g as Ve,h as we,j as Ue}from"./my-notifications-list.CorzAJcZ.js";import{i as M,k as w,d as xe,e as _e,h as xt,m as Ce,c as Ye,w as Ee,f as qe}from"./notifications-client.Csl3ceiM.js";import{S as ke}from"./signal-watcher.BRzsZXdJ.js";import{_ as ct}from"./tslib.es6.kHcLnhpD.js";import{a as h,t as _t}from"./property.BeJXe4f4.js";import{n as Xe}from"./context.DwITtt2r.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ge{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(se,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(se,this.__litLocalizeEventHandler)}}const Je=t=>t.addController(new Ge(t)),Qe=Je;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=()=>(t,e)=>(t.addInitializer(Qe),t);var Ze=M`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,K=class extends ft{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=w`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=w``;return this.initials?e=w`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=w`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,w`
      <div
        part="base"
        class=${tt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};K.styles=[ut,Ze];K.dependencies={"sl-icon":je};f([ge()],K.prototype,"hasError",2);f([h()],K.prototype,"image",2);f([h()],K.prototype,"label",2);f([h()],K.prototype,"initials",2);f([h()],K.prototype,"loading",2);f([h({reflect:!0})],K.prototype,"shape",2);f([wt("image")],K.prototype,"handleImageChange",1);K.define("sl-avatar");var to=M`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,eo=M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const et=Math.min,O=Math.max,Ot=Math.round,St=Math.floor,ot=t=>({x:t,y:t}),oo={left:"right",right:"left",bottom:"top",top:"bottom"},io={start:"end",end:"start"};function Vt(t,e,o){return O(t,et(e,o))}function gt(t,e){return typeof t=="function"?t(e):t}function it(t){return t.split("-")[0]}function mt(t){return t.split("-")[1]}function $e(t){return t==="x"?"y":"x"}function Qt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(it(t))?"y":"x"}function Zt(t){return $e(nt(t))}function ro(t,e,o){o===void 0&&(o=!1);const i=mt(t),r=Zt(t),n=Qt(r);let s=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=zt(s)),[s,zt(s)]}function no(t){const e=zt(t);return[Ut(t),e,Ut(e)]}function Ut(t){return t.replace(/start|end/g,e=>io[e])}function so(t,e,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?n:s;default:return[]}}function ao(t,e,o,i){const r=mt(t);let n=so(it(t),o==="start",i);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(Ut)))),n}function zt(t){return t.replace(/left|right|bottom|top/g,e=>oo[e])}function lo(t){return{top:0,right:0,bottom:0,left:0,...t}}function Se(t){return typeof t!="number"?lo(t):{top:t,right:t,bottom:t,left:t}}function Tt(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function ae(t,e,o){let{reference:i,floating:r}=t;const n=nt(e),s=Zt(e),a=Qt(s),l=it(e),c=n==="y",d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,m=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-r.width,y:u};break;default:p={x:i.x,y:i.y}}switch(mt(e)){case"start":p[s]-=m*(o&&c?-1:1);break;case"end":p[s]+=m*(o&&c?-1:1);break}return p}const co=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:u}=ae(c,i,l),m=i,p={},g=0;for(let y=0;y<a.length;y++){const{name:v,fn:b}=a[y],{x,y:C,data:k,reset:E}=await b({x:d,y:u,initialPlacement:i,placement:m,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});d=x??d,u=C??u,p={...p,[v]:{...p[v],...k}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(m=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):E.rects),{x:d,y:u}=ae(c,m,l)),y=-1)}return{x:d,y:u,placement:m,strategy:r,middlewareData:p}};async function te(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=gt(e,t),g=Se(p),v=a[m?u==="floating"?"reference":"floating":u],b=Tt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(v)))==null||o?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),x=u==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),k=await(n.isElement==null?void 0:n.isElement(C))?await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1}:{x:1,y:1},E=Tt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:C,strategy:l}):x);return{top:(b.top-E.top+g.top)/k.y,bottom:(E.bottom-b.bottom+g.bottom)/k.y,left:(b.left-E.left+g.left)/k.x,right:(E.right-b.right+g.right)/k.x}}const po=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=gt(t,e)||{};if(c==null)return{};const u=Se(d),m={x:o,y:i},p=Zt(r),g=Qt(p),y=await s.getDimensions(c),v=p==="y",b=v?"top":"left",x=v?"bottom":"right",C=v?"clientHeight":"clientWidth",k=n.reference[g]+n.reference[p]-m[p]-n.floating[g],E=m[p]-n.reference[p],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=T?T[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(T)))&&(L=a.floating[C]||n.floating[g]);const U=k/2-E/2,N=L/2-y[g]/2-1,R=et(u[b],N),G=et(u[x],N),H=R,J=L-y[g]-G,P=L/2-y[g]/2+U,dt=Vt(H,P,J),Y=!l.arrow&&mt(r)!=null&&P!==dt&&n.reference[g]/2-(P<H?R:G)-y[g]/2<0,F=Y?P<H?P-H:P-J:0;return{[p]:m[p]+F,data:{[p]:dt,centerOffset:P-dt-F,...Y&&{alignmentOffset:F}},reset:Y}}}),ho=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...v}=gt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const b=it(r),x=nt(a),C=it(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=m||(C||!y?[zt(a)]:no(a)),T=g!=="none";!m&&T&&E.push(...ao(a,y,g,k));const L=[a,...E],U=await te(e,v),N=[];let R=((i=n.flip)==null?void 0:i.overflows)||[];if(d&&N.push(U[b]),u){const P=ro(r,s,k);N.push(U[P[0]],U[P[1]])}if(R=[...R,{placement:r,overflows:N}],!N.every(P=>P<=0)){var G,H;const P=(((G=n.flip)==null?void 0:G.index)||0)+1,dt=L[P];if(dt)return{data:{index:P,overflows:R},reset:{placement:dt}};let Y=(H=R.filter(F=>F.overflows[0]<=0).sort((F,Q)=>F.overflows[1]-Q.overflows[1])[0])==null?void 0:H.placement;if(!Y)switch(p){case"bestFit":{var J;const F=(J=R.filter(Q=>{if(T){const Z=nt(Q.placement);return Z===x||Z==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(Z=>Z>0).reduce((Z,We)=>Z+We,0)]).sort((Q,Z)=>Q[1]-Z[1])[0])==null?void 0:J[0];F&&(Y=F);break}case"initialPlacement":Y=a;break}if(r!==Y)return{reset:{placement:Y}}}return{}}}};async function uo(t,e){const{placement:o,platform:i,elements:r}=t,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=it(o),a=mt(o),l=nt(o)==="y",c=["left","top"].includes(s)?-1:1,d=n&&l?-1:1,u=gt(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*d,y:m*c}:{x:m*c,y:p*d}}const fo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await uo(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},go=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:b,y:x}=v;return{x:b,y:x}}},...l}=gt(t,e),c={x:o,y:i},d=await te(e,l),u=nt(it(r)),m=$e(u);let p=c[m],g=c[u];if(n){const v=m==="y"?"top":"left",b=m==="y"?"bottom":"right",x=p+d[v],C=p-d[b];p=Vt(x,p,C)}if(s){const v=u==="y"?"top":"left",b=u==="y"?"bottom":"right",x=g+d[v],C=g-d[b];g=Vt(x,g,C)}const y=a.fn({...e,[m]:p,[u]:g});return{...y,data:{x:y.x-o,y:y.y-i,enabled:{[m]:n,[u]:s}}}}}},mo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=gt(t,e),d=await te(e,c),u=it(r),m=mt(r),p=nt(r)==="y",{width:g,height:y}=n.floating;let v,b;u==="top"||u==="bottom"?(v=u,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=u,v=m==="end"?"top":"bottom");const x=y-d.top-d.bottom,C=g-d.left-d.right,k=et(y-d[v],x),E=et(g-d[b],C),T=!e.middlewareData.shift;let L=k,U=E;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(U=C),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(L=x),T&&!m){const R=O(d.left,0),G=O(d.right,0),H=O(d.top,0),J=O(d.bottom,0);p?U=g-2*(R!==0||G!==0?R+G:O(d.left,d.right)):L=y-2*(H!==0||J!==0?H+J:O(d.top,d.bottom))}await l({...e,availableWidth:U,availableHeight:L});const N=await s.getDimensions(a.floating);return g!==N.width||y!==N.height?{reset:{rects:!0}}:{}}}};function Nt(){return typeof window<"u"}function yt(t){return Pe(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Pe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pe(t){return Nt()?t instanceof Node||t instanceof z(t).Node:!1}function D(t){return Nt()?t instanceof Element||t instanceof z(t).Element:!1}function W(t){return Nt()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function le(t){return!Nt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function Ct(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function yo(t){return["table","td","th"].includes(yt(t))}function Ht(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ee(t){const e=oe(),o=D(t)?B(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function bo(t){let e=rt(t);for(;W(e)&&!ht(e);){if(ee(e))return e;if(Ht(e))return null;e=rt(e)}return null}function oe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ht(t){return["html","body","#document"].includes(yt(t))}function B(t){return z(t).getComputedStyle(t)}function Ft(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function rt(t){if(yt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||le(t)&&t.host||V(t);return le(e)?e.host:e}function Ae(t){const e=rt(t);return ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&Ct(e)?e:Ae(e)}function bt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Ae(t),n=r===((i=t.ownerDocument)==null?void 0:i.body),s=z(r);if(n){const a=Yt(s);return e.concat(s,s.visualViewport||[],Ct(r)?r:[],a&&o?bt(a):[])}return e.concat(r,bt(r,[],o))}function Yt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Oe(t){const e=B(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=W(t),n=r?t.offsetWidth:o,s=r?t.offsetHeight:i,a=Ot(o)!==n||Ot(i)!==s;return a&&(o=n,i=s),{width:o,height:i,$:a}}function ie(t){return D(t)?t:t.contextElement}function pt(t){const e=ie(t);if(!W(e))return ot(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:n}=Oe(e);let s=(n?Ot(o.width):o.width)/i,a=(n?Ot(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const vo=ot(0);function ze(t){const e=z(t);return!oe()||!e.visualViewport?vo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function wo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function st(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),n=ie(t);let s=ot(1);e&&(i?D(i)&&(s=pt(i)):s=pt(t));const a=wo(n,o,i)?ze(n):ot(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,u=r.height/s.y;if(n){const m=z(n),p=i&&D(i)?z(i):i;let g=m,y=Yt(g);for(;y&&i&&p!==g;){const v=pt(y),b=y.getBoundingClientRect(),x=B(y),C=b.left+(y.clientLeft+parseFloat(x.paddingLeft))*v.x,k=b.top+(y.clientTop+parseFloat(x.paddingTop))*v.y;l*=v.x,c*=v.y,d*=v.x,u*=v.y,l+=C,c+=k,g=z(y),y=Yt(g)}}return Tt({width:d,height:u,x:l,y:c})}function xo(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const n=r==="fixed",s=V(i),a=e?Ht(e.floating):!1;if(i===s||a&&n)return o;let l={scrollLeft:0,scrollTop:0},c=ot(1);const d=ot(0),u=W(i);if((u||!u&&!n)&&((yt(i)!=="body"||Ct(s))&&(l=Ft(i)),W(i))){const m=st(i);c=pt(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x,y:o.y*c.y-l.scrollTop*c.y+d.y}}function _o(t){return Array.from(t.getClientRects())}function qt(t,e){const o=Ft(t).scrollLeft;return e?e.left+o:st(V(t)).left+o}function Co(t){const e=V(t),o=Ft(t),i=t.ownerDocument.body,r=O(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=O(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+qt(t);const a=-o.scrollTop;return B(i).direction==="rtl"&&(s+=O(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:s,y:a}}function Eo(t,e){const o=z(t),i=V(t),r=o.visualViewport;let n=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=oe();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function ko(t,e){const o=st(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,n=W(t)?pt(t):ot(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=i*n.y;return{width:s,height:a,x:l,y:c}}function ce(t,e,o){let i;if(e==="viewport")i=Eo(t,o);else if(e==="document")i=Co(V(t));else if(D(e))i=ko(e,o);else{const r=ze(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return Tt(i)}function Te(t,e){const o=rt(t);return o===e||!D(o)||ht(o)?!1:B(o).position==="fixed"||Te(o,e)}function $o(t,e){const o=e.get(t);if(o)return o;let i=bt(t,[],!1).filter(a=>D(a)&&yt(a)!=="body"),r=null;const n=B(t).position==="fixed";let s=n?rt(t):t;for(;D(s)&&!ht(s);){const a=B(s),l=ee(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ct(s)&&!l&&Te(t,s))?i=i.filter(d=>d!==s):r=a,s=rt(s)}return e.set(t,i),i}function So(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const s=[...o==="clippingAncestors"?Ht(e)?[]:$o(e,this._c):[].concat(o),i],a=s[0],l=s.reduce((c,d)=>{const u=ce(e,d,r);return c.top=O(u.top,c.top),c.right=et(u.right,c.right),c.bottom=et(u.bottom,c.bottom),c.left=O(u.left,c.left),c},ce(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Po(t){const{width:e,height:o}=Oe(t);return{width:e,height:o}}function Ao(t,e,o){const i=W(e),r=V(e),n=o==="fixed",s=st(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=ot(0);if(i||!i&&!n)if((yt(e)!=="body"||Ct(r))&&(a=Ft(e)),i){const p=st(e,!0,n,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=qt(r));let c=0,d=0;if(r&&!i&&!n){const p=r.getBoundingClientRect();d=p.top+a.scrollTop,c=p.left+a.scrollLeft-qt(r,p)}const u=s.left+a.scrollLeft-l.x-c,m=s.top+a.scrollTop-l.y-d;return{x:u,y:m,width:s.width,height:s.height}}function It(t){return B(t).position==="static"}function de(t,e){if(!W(t)||B(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return V(t)===o&&(o=o.ownerDocument.body),o}function Le(t,e){const o=z(t);if(Ht(t))return o;if(!W(t)){let r=rt(t);for(;r&&!ht(r);){if(D(r)&&!It(r))return r;r=rt(r)}return o}let i=de(t,e);for(;i&&yo(i)&&It(i);)i=de(i,e);return i&&ht(i)&&It(i)&&!ee(i)?o:i||bo(t)||o}const Oo=async function(t){const e=this.getOffsetParent||Le,o=this.getDimensions,i=await o(t.floating);return{reference:Ao(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function zo(t){return B(t).direction==="rtl"}const Pt={convertOffsetParentRelativeRectToViewportRelativeRect:xo,getDocumentElement:V,getClippingRect:So,getOffsetParent:Le,getElementRects:Oo,getClientRects:_o,getDimensions:Po,getScale:pt,isElement:D,isRTL:zo};function To(t,e){let o=null,i;const r=V(t);function n(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:d,width:u,height:m}=t.getBoundingClientRect();if(a||e(),!u||!m)return;const p=St(d),g=St(r.clientWidth-(c+u)),y=St(r.clientHeight-(d+m)),v=St(c),x={rootMargin:-p+"px "+-g+"px "+-y+"px "+-v+"px",threshold:O(0,et(1,l))||1};let C=!0;function k(E){const T=E[0].intersectionRatio;if(T!==l){if(!C)return s();T?s(!1,T):i=setTimeout(()=>{s(!1,1e-7)},1e3)}C=!1}try{o=new IntersectionObserver(k,{...x,root:r.ownerDocument})}catch{o=new IntersectionObserver(k,x)}o.observe(t)}return s(!0),n}function Lo(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=ie(t),d=r||n?[...c?bt(c):[],...bt(e)]:[];d.forEach(b=>{r&&b.addEventListener("scroll",o,{passive:!0}),n&&b.addEventListener("resize",o)});const u=c&&a?To(c,o):null;let m=-1,p=null;s&&(p=new ResizeObserver(b=>{let[x]=b;x&&x.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var C;(C=p)==null||C.observe(e)})),o()}),c&&!l&&p.observe(c),p.observe(e));let g,y=l?st(t):null;l&&v();function v(){const b=st(t);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&o(),y=b,g=requestAnimationFrame(v)}return o(),()=>{var b;d.forEach(x=>{r&&x.removeEventListener("scroll",o),n&&x.removeEventListener("resize",o)}),u==null||u(),(b=p)==null||b.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const Ro=fo,Do=go,Bo=ho,pe=mo,Mo=po,No=(t,e,o)=>{const i=new Map,r={platform:Pt,...o},n={...r.platform,_c:i};return co(t,e,{...r,platform:n})};function Ho(t){return Fo(t)}function Kt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Fo(t){for(let e=t;e;e=Kt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Kt(t);e;e=Kt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Wo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var _=class extends ft{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,s=0,a=0,l=0,c=0,d=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Wo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Lo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ro({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(pe({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Bo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Do({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(pe({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Mo({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Pt.getOffsetParent(o,Ho):Pt.getOffsetParent;No(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:me(ye({},Pt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let d="",u="",m="",p="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?g:"",p=s?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":g,p=s?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:u,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${tt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};_.styles=[ut,eo];f([I(".popup")],_.prototype,"popup",2);f([I(".popup__arrow")],_.prototype,"arrowEl",2);f([h()],_.prototype,"anchor",2);f([h({type:Boolean,reflect:!0})],_.prototype,"active",2);f([h({reflect:!0})],_.prototype,"placement",2);f([h({reflect:!0})],_.prototype,"strategy",2);f([h({type:Number})],_.prototype,"distance",2);f([h({type:Number})],_.prototype,"skidding",2);f([h({type:Boolean})],_.prototype,"arrow",2);f([h({attribute:"arrow-placement"})],_.prototype,"arrowPlacement",2);f([h({attribute:"arrow-padding",type:Number})],_.prototype,"arrowPadding",2);f([h({type:Boolean})],_.prototype,"flip",2);f([h({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],_.prototype,"flipFallbackPlacements",2);f([h({attribute:"flip-fallback-strategy"})],_.prototype,"flipFallbackStrategy",2);f([h({type:Object})],_.prototype,"flipBoundary",2);f([h({attribute:"flip-padding",type:Number})],_.prototype,"flipPadding",2);f([h({type:Boolean})],_.prototype,"shift",2);f([h({type:Object})],_.prototype,"shiftBoundary",2);f([h({attribute:"shift-padding",type:Number})],_.prototype,"shiftPadding",2);f([h({attribute:"auto-size"})],_.prototype,"autoSize",2);f([h()],_.prototype,"sync",2);f([h({type:Object})],_.prototype,"autoSizeBoundary",2);f([h({attribute:"auto-size-padding",type:Number})],_.prototype,"autoSizePadding",2);f([h({attribute:"hover-bridge",type:Boolean})],_.prototype,"hoverBridge",2);var Re=new Map,jo=new WeakMap;function Io(t){return t??{keyframes:[],options:{duration:0}}}function he(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Wt(t,e){Re.set(t,Io(e))}function Lt(t,e,o){const i=jo.get(t);if(i!=null&&i[e])return he(i[e],o.dir);const r=Re.get(e);return r?he(r,o.dir):{keyframes:[],options:{duration:0}}}function Rt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function Dt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,me(ye({},o),{duration:Ko()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function ue(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ko(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Bt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var $=class extends ft{constructor(){super(),this.localize=new be(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ue(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ue(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Bt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Lt(this,"tooltip.show",{dir:this.localize.dir()});await Dt(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Bt(this.body);const{keyframes:o,options:i}=Lt(this,"tooltip.hide",{dir:this.localize.dir()});await Dt(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${tt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};$.styles=[ut,to];$.dependencies={"sl-popup":_};f([I("slot:not([name])")],$.prototype,"defaultSlot",2);f([I(".tooltip__body")],$.prototype,"body",2);f([I("sl-popup")],$.prototype,"popup",2);f([h()],$.prototype,"content",2);f([h()],$.prototype,"placement",2);f([h({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([h({type:Number})],$.prototype,"distance",2);f([h({type:Boolean,reflect:!0})],$.prototype,"open",2);f([h({type:Number})],$.prototype,"skidding",2);f([h()],$.prototype,"trigger",2);f([h({type:Boolean})],$.prototype,"hoist",2);f([wt("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1);f([wt(["content","distance","hoist","placement","skidding"])],$.prototype,"handleOptionsChange",1);f([wt("disabled")],$.prototype,"handleDisabledChange",1);Wt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Wt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});$.define("sl-tooltip");const De=[M`
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .small-margin {
      margin-top: 6px;
    }
    .big-margin {
      margin-top: 23px;
    }

    .fill {
      flex: 1;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .center-content {
      align-items: center;
      justify-content: center;
    }

    .placeholder {
      color: var(--sl-color-gray-700);
    }

    .flex-scrollable-parent {
      position: relative;
      display: flex;
      flex: 1;
    }

    .flex-scrollable-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .flex-scrollable-x {
      max-width: 100%;
      overflow-x: auto;
    }
    .flex-scrollable-y {
      max-height: 100%;
      overflow-y: auto;
    }
    :host {
      color: var(--sl-color-neutral-1000);
    }

    sl-card {
      display: flex;
    }
    sl-card::part(base) {
      flex: 1;
    }
    sl-card::part(body) {
      display: flex;
      flex: 1;
    }
    sl-drawer::part(body) {
      display: flex;
    }
  `];function re(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&xe(e),toAttribute:e=>e&&_e(e)},reflect:!0}}function Be(t){return`data:image/svg+xml;utf8,${Vo(t)}`}function Vo(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var Et=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let at=class extends xt{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return w`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Be(Ce)}"
      ></sl-icon>
    `}renderFull(){return w` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?w` <span style="margin-bottom: 8px">${this.headline} </span>`:w``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return w`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};at.styles=[De,M`
      :host {
        display: flex;
        flex: 1;
      }
    `];Et([h({attribute:"tooltip"})],at.prototype,"tooltip",void 0);Et([h()],at.prototype,"headline",void 0);Et([h()],at.prototype,"error",void 0);Et([h({attribute:"icon-size"})],at.prototype,"iconSize",void 0);at=Et([_t("display-error")],at);let Mt=[0],At=0;function Uo(t){t[0]===132&&t[1]===32&&t[2]===36?Mt=t.slice(3):Mt=t||[],At=0}function A(){return(()=>{const e=Mt[At];return At=(At+1)%Mt.length,e})()/256}function Me(t){const e=Math.floor(A()*360),o=A()*60+40,i=t||(A()*100+(A()+A()+A()+A())*25)/2;return{h:e,s:o,l:i}}function Ne({h:t,s:e,l:o}){return`hsl(${t}, ${e}%, ${o}%)`}function Yo(t,e,o){const i=A()*2*Math.PI,r=e*Math.cos(i),n=e*Math.sin(i),s=o.x+r,a=o.x+n,l=i+2*Math.PI*.3,c=e*Math.cos(l),d=e*Math.sin(l),u=o.x+c,m=o.x+d,p=l+2*Math.PI*.3,g=e*Math.cos(p),y=e*Math.sin(p),v=o.x+g,b=o.x+y;t.beginPath(),t.moveTo(s,a),t.lineTo(u,m),t.lineTo(v,b),t.fill()}function qo(t){const e=t.hash||[0];return Uo(e),{backgroundColor:t.backgroundColor||Ne(Me()),hash:e,size:t.size||32}}function Xo(t,e){if(t.hash&&!(t.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");t=qo(t||{});const{size:o,backgroundColor:i}=t;e.width=e.height=o;const r=e.getContext("2d");if(!r)return;r.fillStyle=i,r.fillRect(0,0,e.width,e.height);const n=A()<.5?3:4,s=Array.apply(null,Array(n)).map((a,l)=>{const c=l===0?5+A()*25:l===1?70+A()*25:null;return{x:A()*o,y:A()*o,radius:5+A()*o*.25,type:Math.floor(A()*3),color:Ne(Me(c))}}).sort((a,l)=>a.radius>l.radius?-1:1);for(let a=0;a<n;a++){const l=s[a],{x:c,y:d,radius:u,type:m,color:p}=l;switch(r.fillStyle=p,m){case 0:r.beginPath(),r.arc(c,d,u,0,2*Math.PI),r.fill();break;case 1:r.fillRect(c,d,u*2,u*2);break;case 2:Yo(r,u*2,{x:c,y:d});break;default:throw new Error("shape is greater than 2, this should never happen")}}return e}var X=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let j=class extends xt{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return _e(this.hash)}updated(e){var o,i;super.updated(e),(e.has("hash")&&((o=e.get("hash"))==null?void 0:o.toString())!==((i=this.hash)==null?void 0:i.toString())||e.has("size")||e.has("value"))&&Xo({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return w` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${tt({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return w`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?Xt("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return M`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};X([h(re("hash"))],j.prototype,"hash",void 0);X([h({type:Number})],j.prototype,"size",void 0);X([h({type:String})],j.prototype,"shape",void 0);X([h({type:Boolean,attribute:"disable-tooltip"})],j.prototype,"disableTooltip",void 0);X([h({type:Boolean,attribute:"disable-copy"})],j.prototype,"disableCopy",void 0);X([I("#canvas")],j.prototype,"_canvas",void 0);X([I("#tooltip")],j.prototype,"_tooltip",void 0);X([ge()],j.prototype,"justCopiedHash",void 0);j=X([Jt(),_t("holo-identicon")],j);let q=class extends ke(xt){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return this.agentPubKey?w` <div
			style=${jt({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`:w`
				<sl-icon
					style=${jt({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
					.src=${Be(Ye)}
				>
				</sl-icon>
			`}renderProfile(e){if(!e||!e.entry.fields.avatar)return this.renderIdenticon();const o=w`
			<div
				style=${jt({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<sl-avatar
					.image=${e.entry.fields.avatar}
					style="--size: ${this.size}px;"
					@click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;return w`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip?"manual":"hover focus"}
				hoist
				.content=${e.entry.nickname}
			>
				${o}
			</sl-tooltip>
		`}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}render(){if(this.store.config.avatarMode==="identicon")return this.renderIdenticon();const e=this.profile();switch(e.status){case"pending":return w`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return w`
					<display-error
						tooltip
						.headline=${Xt("Error fetching the agent's avatar")}
						.error=${e.error}
					></display-error>
				`}}};q.styles=[De,M`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`];ct([h(re("agent-pub-key"))],q.prototype,"agentPubKey",void 0);ct([h(re("profile-hash"))],q.prototype,"profileHash",void 0);ct([h({type:Number})],q.prototype,"size",void 0);ct([h({type:Boolean,attribute:"disable-tooltip"})],q.prototype,"disableTooltip",void 0);ct([h({type:Boolean,attribute:"disable-copy"})],q.prototype,"disableCopy",void 0);ct([Gt({context:ve,subscribe:!0}),h()],q.prototype,"store",void 0);q=ct([Jt(),_t("agent-avatar")],q);var Go=M`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,kt=class extends ft{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return w`
      <span
        part="base"
        class=${tt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};kt.styles=[ut,Go];f([h({reflect:!0})],kt.prototype,"variant",2);f([h({type:Boolean,reflect:!0})],kt.prototype,"pill",2);f([h({type:Boolean,reflect:!0})],kt.prototype,"pulse",2);kt.define("sl-badge");var Jo=M`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,He=class extends ft{constructor(){super(...arguments),this.hasSlotController=new Ie(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${tt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};He.styles=[ut,Jo];He.define("sl-card");var Qo=M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,fe=new WeakMap;function Fe(t){let e=fe.get(t);return e||(e=window.getComputedStyle(t,null),fe.set(t,e)),e}function Zo(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Fe(t);return e.visibility!=="hidden"&&e.display!=="none"}function ti(t){const e=Fe(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function ei(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Zo(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:ti(t)}function oi(t){var e,o;const i=ri(t),r=(e=i[0])!=null?e:null,n=(o=i[i.length-1])!=null?o:null;return{start:r,end:n}}function ii(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function ri(t){const e=new WeakMap,o=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!o.includes(r)&&ei(r)&&o.push(r),r instanceof HTMLSlotElement&&ii(r,t)&&r.assignedElements({flatten:!0}).forEach(n=>{i(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const n of r.children)i(n)}return i(t),o.sort((r,n)=>{const s=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}var S=class extends ft{constructor(){super(...arguments),this.localize=new be(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const n=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>oi(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Bt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Lt(this,"dropdown.show",{dir:this.localize.dir()});await Dt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Bt(this);const{keyframes:t,options:e}=Lt(this,"dropdown.hide",{dir:this.localize.dir()});await Dt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return w`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Ke(this.sync?this.sync:void 0)}
        class=${tt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};S.styles=[ut,Qo];S.dependencies={"sl-popup":_};f([I(".dropdown")],S.prototype,"popup",2);f([I(".dropdown__trigger")],S.prototype,"trigger",2);f([I(".dropdown__panel")],S.prototype,"panel",2);f([h({type:Boolean,reflect:!0})],S.prototype,"open",2);f([h({reflect:!0})],S.prototype,"placement",2);f([h({type:Boolean,reflect:!0})],S.prototype,"disabled",2);f([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],S.prototype,"stayOpenOnSelect",2);f([h({attribute:!1})],S.prototype,"containingElement",2);f([h({type:Number})],S.prototype,"distance",2);f([h({type:Number})],S.prototype,"skidding",2);f([h({type:Boolean})],S.prototype,"hoist",2);f([h({reflect:!0})],S.prototype,"sync",2);f([wt("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);Wt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Wt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-dropdown");Ve.define("sl-spinner");var $t=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let lt=class extends xt{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return w`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Ee(Ce)}"
      ></sl-icon>
    `}renderFull(){return w` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?w` <span style="margin-bottom: 8px">${this.headline} </span>`:w``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return w`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};lt.styles=[we,M`
      :host {
        display: flex;
        flex: 1;
      }
    `];$t([h({attribute:"tooltip"})],lt.prototype,"tooltip",void 0);$t([h()],lt.prototype,"headline",void 0);$t([h()],lt.prototype,"error",void 0);$t([h({attribute:"icon-size"})],lt.prototype,"iconSize",void 0);lt=$t([_t("display-error")],lt);var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ne=(t,e,o,i)=>{for(var r=i>1?void 0:i?si(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&ni(e,o,r),r};let vt=class extends ke(xt){render(){const t=Ue([this.notificationsStore.unreadNotifications.get(),this.notificationsStore.readNotifications.get()]);switch(t.status){case"pending":return w`
					<sl-skeleton
						style="height: 32px; width: 32px; --border-radius: 8px"
						effect="pulse"
					></sl-skeleton>
				`;case"error":return w`<display-error
					tooltip
					.headline=${Xt("Error fetching the notifications")}
					.error=${t.error}
				></display-error>`;case"completed":const[e,o]=t.value;return w`
					<sl-dropdown
						placement="bottom-end"
						distance="8"
						hoist
						@sl-hide=${()=>this.notificationsStore.client.markNotificationsAsRead(Object.keys(e).map(i=>xe(i)))}
					>
						<div slot="trigger" style="position: relative;">
							<sl-icon-button
								part="icon-button"
								slot="anchor"
								style="font-size: 1.5rem"
								.src=${Ee(qe)}
							>
							</sl-icon-button>
							${Object.keys(e).length+Object.keys(o).length>0?w`
										<sl-badge
											style="position: absolute; left: 16px; top: 0px; z-index: 1000"
											pill
											.variant=${Object.keys(e).length>0?"primary":"neutral"}
											.pulse=${Object.keys(e).length>0}
											>${Object.keys(e).length+Object.keys(o).length}</sl-badge
										>
									`:w``}
						</div>
						<sl-card style="--padding: 0; width: 500px;">
							<my-notifications-list style="flex: 1"></my-notifications-list>
						</sl-card>
					</sl-dropdown>
				`}}};vt.styles=[we];ne([Gt({context:Xe,subscribe:!0})],vt.prototype,"notificationsStore",2);ne([Gt({context:ve,subscribe:!0})],vt.prototype,"profilesStore",2);vt=ne([Jt(),_t("my-notifications-icon-button")],vt);export{vt as MyNotificationsIconButton};
