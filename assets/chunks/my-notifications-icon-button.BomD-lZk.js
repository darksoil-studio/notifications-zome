import{c as ht,S as Ne,_ as f,r as me,w as vt,a as ut,e as et,b as I,L as Ut,d as ye,f as be,m as qt,o as Wt,p as ve,H as He,g as We,h as Fe,j as je}from"./my-notifications-list._ggyPz9o.js";import{l as we,h as xe,m as X,x,n as Rt,w as Yt,o as Ie,p as Ke,q as Ve}from"./notifications-client.B8NU7A1r.js";import{S as Ce}from"./signal-watcher.Dt9NxxE3.js";import{_ as lt}from"./tslib.es6.kHcLnhpD.js";import{a as u,b as Xt,t as Dt,c as Gt}from"./property.-OmOMAsO.js";import{n as Ue}from"./context.BKjWNSn6.js";function Jt(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&we(e),toAttribute:e=>e&&xe(e)},reflect:!0}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qe{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(ae,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(ae,this.__litLocalizeEventHandler)}}const Ye=t=>t.addController(new qe(t)),Xe=Ye;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=()=>(t,e)=>(t.addInitializer(Xe),t);var Ge=X`
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
`,K=class extends ut{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=x``;return this.initials?e=x`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,x`
      <div
        part="base"
        class=${et({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};K.styles=[ht,Ge];K.dependencies={"sl-icon":Ne};f([me()],K.prototype,"hasError",2);f([u()],K.prototype,"image",2);f([u()],K.prototype,"label",2);f([u()],K.prototype,"initials",2);f([u()],K.prototype,"loading",2);f([u({reflect:!0})],K.prototype,"shape",2);f([vt("image")],K.prototype,"handleImageChange",1);K.define("sl-avatar");var Je=X`
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
`,Qe=X`
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
`;const ot=Math.min,P=Math.max,$t=Math.round,_t=Math.floor,W=t=>({x:t,y:t}),Ze={left:"right",right:"left",bottom:"top",top:"bottom"},to={start:"end",end:"start"};function It(t,e,o){return P(t,ot(e,o))}function ft(t,e){return typeof t=="function"?t(e):t}function it(t){return t.split("-")[0]}function gt(t){return t.split("-")[1]}function _e(t){return t==="x"?"y":"x"}function Zt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(it(t))?"y":"x"}function te(t){return _e(nt(t))}function eo(t,e,o){o===void 0&&(o=!1);const i=gt(t),r=te(t),n=Zt(r);let s=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=At(s)),[s,At(s)]}function oo(t){const e=At(t);return[Kt(t),e,Kt(e)]}function Kt(t){return t.replace(/start|end/g,e=>to[e])}function io(t,e,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?n:s;default:return[]}}function ro(t,e,o,i){const r=gt(t);let n=io(it(t),o==="start",i);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(Kt)))),n}function At(t){return t.replace(/left|right|bottom|top/g,e=>Ze[e])}function no(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ee(t){return typeof t!="number"?no(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function le(t,e,o){let{reference:i,floating:r}=t;const n=nt(e),s=te(e),a=Zt(s),l=it(e),c=n==="y",d=i.x+i.width/2-r.width/2,h=i.y+i.height/2-r.height/2,m=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-r.width,y:h};break;default:p={x:i.x,y:i.y}}switch(gt(e)){case"start":p[s]-=m*(o&&c?-1:1);break;case"end":p[s]+=m*(o&&c?-1:1);break}return p}const so=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=le(c,i,l),m=i,p={},g=0;for(let y=0;y<a.length;y++){const{name:v,fn:b}=a[y],{x:w,y:_,data:k,reset:E}=await b({x:d,y:h,initialPlacement:i,placement:m,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});d=w??d,h=_??h,p={...p,[v]:{...p[v],...k}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(m=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):E.rects),{x:d,y:h}=le(c,m,l)),y=-1)}return{x:d,y:h,placement:m,strategy:r,middlewareData:p}};async function ee(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:m=!1,padding:p=0}=ft(e,t),g=Ee(p),v=a[m?h==="floating"?"reference":"floating":h],b=Ot(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(v)))==null||o?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),w=h==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),k=await(n.isElement==null?void 0:n.isElement(_))?await(n.getScale==null?void 0:n.getScale(_))||{x:1,y:1}:{x:1,y:1},E=Ot(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:_,strategy:l}):w);return{top:(b.top-E.top+g.top)/k.y,bottom:(E.bottom-b.bottom+g.bottom)/k.y,left:(b.left-E.left+g.left)/k.x,right:(E.right-b.right+g.right)/k.x}}const ao=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=ft(t,e)||{};if(c==null)return{};const h=Ee(d),m={x:o,y:i},p=te(r),g=Zt(p),y=await s.getDimensions(c),v=p==="y",b=v?"top":"left",w=v?"bottom":"right",_=v?"clientHeight":"clientWidth",k=n.reference[g]+n.reference[p]-m[p]-n.floating[g],E=m[p]-n.reference[p],z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=z?z[_]:0;(!L||!await(s.isElement==null?void 0:s.isElement(z)))&&(L=a.floating[_]||n.floating[g]);const U=k/2-E/2,M=L/2-y[g]/2-1,R=ot(h[b],M),J=ot(h[w],M),N=R,Q=L-y[g]-J,O=L/2-y[g]/2+U,ct=It(N,O,Q),q=!l.arrow&&gt(r)!=null&&O!==ct&&n.reference[g]/2-(O<N?R:J)-y[g]/2<0,H=q?O<N?O-N:O-Q:0;return{[p]:m[p]+H,data:{[p]:ct,centerOffset:O-ct-H,...q&&{alignmentOffset:H}},reset:q}}}),lo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...v}=ft(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const b=it(r),w=nt(a),_=it(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=m||(_||!y?[At(a)]:oo(a)),z=g!=="none";!m&&z&&E.push(...ro(a,y,g,k));const L=[a,...E],U=await ee(e,v),M=[];let R=((i=n.flip)==null?void 0:i.overflows)||[];if(d&&M.push(U[b]),h){const O=eo(r,s,k);M.push(U[O[0]],U[O[1]])}if(R=[...R,{placement:r,overflows:M}],!M.every(O=>O<=0)){var J,N;const O=(((J=n.flip)==null?void 0:J.index)||0)+1,ct=L[O];if(ct)return{data:{index:O,overflows:R},reset:{placement:ct}};let q=(N=R.filter(H=>H.overflows[0]<=0).sort((H,Z)=>H.overflows[1]-Z.overflows[1])[0])==null?void 0:N.placement;if(!q)switch(p){case"bestFit":{var Q;const H=(Q=R.filter(Z=>{if(z){const tt=nt(Z.placement);return tt===w||tt==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(tt=>tt>0).reduce((tt,Me)=>tt+Me,0)]).sort((Z,tt)=>Z[1]-tt[1])[0])==null?void 0:Q[0];H&&(q=H);break}case"initialPlacement":q=a;break}if(r!==q)return{reset:{placement:q}}}return{}}}};async function co(t,e){const{placement:o,platform:i,elements:r}=t,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=it(o),a=gt(o),l=nt(o)==="y",c=["left","top"].includes(s)?-1:1,d=n&&l?-1:1,h=ft(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*d,y:m*c}:{x:m*c,y:p*d}}const po=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await co(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},ho=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:b,y:w}=v;return{x:b,y:w}}},...l}=ft(t,e),c={x:o,y:i},d=await ee(e,l),h=nt(it(r)),m=_e(h);let p=c[m],g=c[h];if(n){const v=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=p+d[v],_=p-d[b];p=It(w,p,_)}if(s){const v=h==="y"?"top":"left",b=h==="y"?"bottom":"right",w=g+d[v],_=g-d[b];g=It(w,g,_)}const y=a.fn({...e,[m]:p,[h]:g});return{...y,data:{x:y.x-o,y:y.y-i,enabled:{[m]:n,[h]:s}}}}}},uo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ft(t,e),d=await ee(e,c),h=it(r),m=gt(r),p=nt(r)==="y",{width:g,height:y}=n.floating;let v,b;h==="top"||h==="bottom"?(v=h,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=h,v=m==="end"?"top":"bottom");const w=y-d.top-d.bottom,_=g-d.left-d.right,k=ot(y-d[v],w),E=ot(g-d[b],_),z=!e.middlewareData.shift;let L=k,U=E;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(U=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(L=w),z&&!m){const R=P(d.left,0),J=P(d.right,0),N=P(d.top,0),Q=P(d.bottom,0);p?U=g-2*(R!==0||J!==0?R+J:P(d.left,d.right)):L=y-2*(N!==0||Q!==0?N+Q:P(d.top,d.bottom))}await l({...e,availableWidth:U,availableHeight:L});const M=await s.getDimensions(a.floating);return g!==M.width||y!==M.height?{reset:{rects:!0}}:{}}}};function Bt(){return typeof window<"u"}function mt(t){return ke(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(ke(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ke(t){return Bt()?t instanceof Node||t instanceof T(t).Node:!1}function D(t){return Bt()?t instanceof Element||t instanceof T(t).Element:!1}function F(t){return Bt()?t instanceof HTMLElement||t instanceof T(t).HTMLElement:!1}function ce(t){return!Bt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function wt(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function fo(t){return["table","td","th"].includes(mt(t))}function Mt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function oe(t){const e=ie(),o=D(t)?B(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function go(t){let e=rt(t);for(;F(e)&&!pt(e);){if(oe(e))return e;if(Mt(e))return null;e=rt(e)}return null}function ie(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(t){return["html","body","#document"].includes(mt(t))}function B(t){return T(t).getComputedStyle(t)}function Nt(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function rt(t){if(mt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ce(t)&&t.host||V(t);return ce(e)?e.host:e}function $e(t){const e=rt(t);return pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&wt(e)?e:$e(e)}function yt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=$e(t),n=r===((i=t.ownerDocument)==null?void 0:i.body),s=T(r);if(n){const a=Vt(s);return e.concat(s,s.visualViewport||[],wt(r)?r:[],a&&o?yt(a):[])}return e.concat(r,yt(r,[],o))}function Vt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ae(t){const e=B(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=F(t),n=r?t.offsetWidth:o,s=r?t.offsetHeight:i,a=$t(o)!==n||$t(i)!==s;return a&&(o=n,i=s),{width:o,height:i,$:a}}function re(t){return D(t)?t:t.contextElement}function dt(t){const e=re(t);if(!F(e))return W(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:n}=Ae(e);let s=(n?$t(o.width):o.width)/i,a=(n?$t(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const mo=W(0);function Oe(t){const e=T(t);return!ie()||!e.visualViewport?mo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function yo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==T(t)?!1:e}function st(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),n=re(t);let s=W(1);e&&(i?D(i)&&(s=dt(i)):s=dt(t));const a=yo(n,o,i)?Oe(n):W(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,h=r.height/s.y;if(n){const m=T(n),p=i&&D(i)?T(i):i;let g=m,y=Vt(g);for(;y&&i&&p!==g;){const v=dt(y),b=y.getBoundingClientRect(),w=B(y),_=b.left+(y.clientLeft+parseFloat(w.paddingLeft))*v.x,k=b.top+(y.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,c*=v.y,d*=v.x,h*=v.y,l+=_,c+=k,g=T(y),y=Vt(g)}}return Ot({width:d,height:h,x:l,y:c})}function ne(t,e){const o=Nt(t).scrollLeft;return e?e.left+o:st(V(t)).left+o}function Se(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(o?0:ne(t,i)),n=i.top+e.scrollTop;return{x:r,y:n}}function bo(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const n=r==="fixed",s=V(i),a=e?Mt(e.floating):!1;if(i===s||a&&n)return o;let l={scrollLeft:0,scrollTop:0},c=W(1);const d=W(0),h=F(i);if((h||!h&&!n)&&((mt(i)!=="body"||wt(s))&&(l=Nt(i)),F(i))){const p=st(i);c=dt(i),d.x=p.x+i.clientLeft,d.y=p.y+i.clientTop}const m=s&&!h&&!n?Se(s,l,!0):W(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+m.x,y:o.y*c.y-l.scrollTop*c.y+d.y+m.y}}function vo(t){return Array.from(t.getClientRects())}function wo(t){const e=V(t),o=Nt(t),i=t.ownerDocument.body,r=P(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=P(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+ne(t);const a=-o.scrollTop;return B(i).direction==="rtl"&&(s+=P(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:s,y:a}}function xo(t,e){const o=T(t),i=V(t),r=o.visualViewport;let n=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=ie();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function Co(t,e){const o=st(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,n=F(t)?dt(t):W(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=i*n.y;return{width:s,height:a,x:l,y:c}}function de(t,e,o){let i;if(e==="viewport")i=xo(t,o);else if(e==="document")i=wo(V(t));else if(D(e))i=Co(e,o);else{const r=Oe(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Ot(i)}function Pe(t,e){const o=rt(t);return o===e||!D(o)||pt(o)?!1:B(o).position==="fixed"||Pe(o,e)}function _o(t,e){const o=e.get(t);if(o)return o;let i=yt(t,[],!1).filter(a=>D(a)&&mt(a)!=="body"),r=null;const n=B(t).position==="fixed";let s=n?rt(t):t;for(;D(s)&&!pt(s);){const a=B(s),l=oe(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||wt(s)&&!l&&Pe(t,s))?i=i.filter(d=>d!==s):r=a,s=rt(s)}return e.set(t,i),i}function Eo(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const s=[...o==="clippingAncestors"?Mt(e)?[]:_o(e,this._c):[].concat(o),i],a=s[0],l=s.reduce((c,d)=>{const h=de(e,d,r);return c.top=P(h.top,c.top),c.right=ot(h.right,c.right),c.bottom=ot(h.bottom,c.bottom),c.left=P(h.left,c.left),c},de(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ko(t){const{width:e,height:o}=Ae(t);return{width:e,height:o}}function $o(t,e,o){const i=F(e),r=V(e),n=o==="fixed",s=st(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=W(0);if(i||!i&&!n)if((mt(e)!=="body"||wt(r))&&(a=Nt(e)),i){const m=st(e,!0,n,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=ne(r));const c=r&&!i&&!n?Se(r,a):W(0),d=s.left+a.scrollLeft-l.x-c.x,h=s.top+a.scrollTop-l.y-c.y;return{x:d,y:h,width:s.width,height:s.height}}function Ft(t){return B(t).position==="static"}function pe(t,e){if(!F(t)||B(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return V(t)===o&&(o=o.ownerDocument.body),o}function Te(t,e){const o=T(t);if(Mt(t))return o;if(!F(t)){let r=rt(t);for(;r&&!pt(r);){if(D(r)&&!Ft(r))return r;r=rt(r)}return o}let i=pe(t,e);for(;i&&fo(i)&&Ft(i);)i=pe(i,e);return i&&pt(i)&&Ft(i)&&!oe(i)?o:i||go(t)||o}const Ao=async function(t){const e=this.getOffsetParent||Te,o=this.getDimensions,i=await o(t.floating);return{reference:$o(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Oo(t){return B(t).direction==="rtl"}const Et={convertOffsetParentRelativeRectToViewportRelativeRect:bo,getDocumentElement:V,getClippingRect:Eo,getOffsetParent:Te,getElementRects:Ao,getClientRects:vo,getDimensions:ko,getScale:dt,isElement:D,isRTL:Oo};function So(t,e){let o=null,i;const r=V(t);function n(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:d,width:h,height:m}=t.getBoundingClientRect();if(a||e(),!h||!m)return;const p=_t(d),g=_t(r.clientWidth-(c+h)),y=_t(r.clientHeight-(d+m)),v=_t(c),w={rootMargin:-p+"px "+-g+"px "+-y+"px "+-v+"px",threshold:P(0,ot(1,l))||1};let _=!0;function k(E){const z=E[0].intersectionRatio;if(z!==l){if(!_)return s();z?s(!1,z):i=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(k,{...w,root:r.ownerDocument})}catch{o=new IntersectionObserver(k,w)}o.observe(t)}return s(!0),n}function Po(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=re(t),d=r||n?[...c?yt(c):[],...yt(e)]:[];d.forEach(b=>{r&&b.addEventListener("scroll",o,{passive:!0}),n&&b.addEventListener("resize",o)});const h=c&&a?So(c,o):null;let m=-1,p=null;s&&(p=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),o()}),c&&!l&&p.observe(c),p.observe(e));let g,y=l?st(t):null;l&&v();function v(){const b=st(t);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&o(),y=b,g=requestAnimationFrame(v)}return o(),()=>{var b;d.forEach(w=>{r&&w.removeEventListener("scroll",o),n&&w.removeEventListener("resize",o)}),h==null||h(),(b=p)==null||b.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const To=po,zo=ho,Lo=lo,he=uo,Ro=ao,Do=(t,e,o)=>{const i=new Map,r={platform:Et,...o},n={...r.platform,_c:i};return so(t,e,{...r,platform:n})};function Bo(t){return Mo(t)}function jt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Mo(t){for(let e=t;e;e=jt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=jt(t);e;e=jt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function No(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends ut{constructor(){super(...arguments),this.localize=new Ut(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,s=0,a=0,l=0,c=0,d=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||No(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Po(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[To({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(he({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Lo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(zo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(he({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ro({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Et.getOffsetParent(o,Bo):Et.getOffsetParent;Do(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ye(be({},Et),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let d="",h="",m="",p="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?g:"",p=s?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":g,p=s?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${et({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${et({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[ht,Qe];f([I(".popup")],C.prototype,"popup",2);f([I(".popup__arrow")],C.prototype,"arrowEl",2);f([u()],C.prototype,"anchor",2);f([u({type:Boolean,reflect:!0})],C.prototype,"active",2);f([u({reflect:!0})],C.prototype,"placement",2);f([u({reflect:!0})],C.prototype,"strategy",2);f([u({type:Number})],C.prototype,"distance",2);f([u({type:Number})],C.prototype,"skidding",2);f([u({type:Boolean})],C.prototype,"arrow",2);f([u({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);f([u({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);f([u({type:Boolean})],C.prototype,"flip",2);f([u({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);f([u({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);f([u({type:Object})],C.prototype,"flipBoundary",2);f([u({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);f([u({type:Boolean})],C.prototype,"shift",2);f([u({type:Object})],C.prototype,"shiftBoundary",2);f([u({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);f([u({attribute:"auto-size"})],C.prototype,"autoSize",2);f([u()],C.prototype,"sync",2);f([u({type:Object})],C.prototype,"autoSizeBoundary",2);f([u({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);f([u({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var ze=new Map,Ho=new WeakMap;function Wo(t){return t??{keyframes:[],options:{duration:0}}}function ue(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ht(t,e){ze.set(t,Wo(e))}function St(t,e,o){const i=Ho.get(t);if(i!=null&&i[e])return ue(i[e],o.dir);const r=ze.get(e);return r?ue(r,o.dir):{keyframes:[],options:{duration:0}}}function Pt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function Tt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,ye(be({},o),{duration:Fo()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function fe(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Fo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var $=class extends ut{constructor(){super(),this.localize=new Ut(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=fe(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=fe(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await zt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=St(this,"tooltip.show",{dir:this.localize.dir()});await Tt(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await zt(this.body);const{keyframes:o,options:i}=St(this,"tooltip.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pt(this,"sl-after-hide")}render(){return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${et({tooltip:!0,"tooltip--open":this.open})}
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
    `}};$.styles=[ht,Je];$.dependencies={"sl-popup":C};f([I("slot:not([name])")],$.prototype,"defaultSlot",2);f([I(".tooltip__body")],$.prototype,"body",2);f([I("sl-popup")],$.prototype,"popup",2);f([u()],$.prototype,"content",2);f([u()],$.prototype,"placement",2);f([u({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([u({type:Number})],$.prototype,"distance",2);f([u({type:Boolean,reflect:!0})],$.prototype,"open",2);f([u({type:Number})],$.prototype,"skidding",2);f([u()],$.prototype,"trigger",2);f([u({type:Boolean})],$.prototype,"hoist",2);f([vt("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1);f([vt(["content","distance","hoist","placement","skidding"])],$.prototype,"handleOptionsChange",1);f([vt("disabled")],$.prototype,"handleDisabledChange",1);Ht("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ht("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});$.define("sl-tooltip");var xt=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let at=class extends Rt{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return x`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Yt(Ie)}"
      ></sl-icon>
    `}renderFull(){return x` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?x` <span style="margin-bottom: 8px">${this.headline} </span>`:x``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return x`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};at.styles=[Xt,X`
      :host {
        display: flex;
        flex: 1;
      }
    `];xt([u({attribute:"tooltip"})],at.prototype,"tooltip",void 0);xt([u()],at.prototype,"headline",void 0);xt([u()],at.prototype,"error",void 0);xt([u({attribute:"icon-size"})],at.prototype,"iconSize",void 0);at=xt([Dt("display-error")],at);let Lt=[0],kt=0;function jo(t){t[0]===132&&t[1]===32&&t[2]===36?Lt=t.slice(3):Lt=t||[],kt=0}function S(){return(()=>{const e=Lt[kt];return kt=(kt+1)%Lt.length,e})()/256}function Le(t){const e=Math.floor(S()*360),o=S()*60+40,i=t||(S()*100+(S()+S()+S()+S())*25)/2;return{h:e,s:o,l:i}}function Re({h:t,s:e,l:o}){return`hsl(${t}, ${e}%, ${o}%)`}function Io(t,e,o){const i=S()*2*Math.PI,r=e*Math.cos(i),n=e*Math.sin(i),s=o.x+r,a=o.x+n,l=i+2*Math.PI*.3,c=e*Math.cos(l),d=e*Math.sin(l),h=o.x+c,m=o.x+d,p=l+2*Math.PI*.3,g=e*Math.cos(p),y=e*Math.sin(p),v=o.x+g,b=o.x+y;t.beginPath(),t.moveTo(s,a),t.lineTo(h,m),t.lineTo(v,b),t.fill()}function Ko(t){const e=t.hash||[0];return jo(e),{backgroundColor:t.backgroundColor||Re(Le()),hash:e,size:t.size||32}}function Vo(t,e){if(t.hash&&!(t.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");t=Ko(t||{});const{size:o,backgroundColor:i}=t;e.width=e.height=o;const r=e.getContext("2d");if(!r)return;r.fillStyle=i,r.fillRect(0,0,e.width,e.height);const n=S()<.5?3:4,s=Array.apply(null,Array(n)).map((a,l)=>{const c=l===0?5+S()*25:l===1?70+S()*25:null;return{x:S()*o,y:S()*o,radius:5+S()*o*.25,type:Math.floor(S()*3),color:Re(Le(c))}}).sort((a,l)=>a.radius>l.radius?-1:1);for(let a=0;a<n;a++){const l=s[a],{x:c,y:d,radius:h,type:m,color:p}=l;switch(r.fillStyle=p,m){case 0:r.beginPath(),r.arc(c,d,h,0,2*Math.PI),r.fill();break;case 1:r.fillRect(c,d,h*2,h*2);break;case 2:Io(r,h*2,{x:c,y:d});break;default:throw new Error("shape is greater than 2, this should never happen")}}return e}var G=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let j=class extends Rt{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return xe(this.hash)}updated(e){var o,i;super.updated(e),(e.has("hash")&&((o=e.get("hash"))==null?void 0:o.toString())!==((i=this.hash)==null?void 0:i.toString())||e.has("size")||e.has("value"))&&Vo({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return x` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${et({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return x`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?qt("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return X`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};G([u(Jt("hash"))],j.prototype,"hash",void 0);G([u({type:Number})],j.prototype,"size",void 0);G([u({type:String})],j.prototype,"shape",void 0);G([u({type:Boolean,attribute:"disable-tooltip"})],j.prototype,"disableTooltip",void 0);G([u({type:Boolean,attribute:"disable-copy"})],j.prototype,"disableCopy",void 0);G([I("#canvas")],j.prototype,"_canvas",void 0);G([I("#tooltip")],j.prototype,"_tooltip",void 0);G([me()],j.prototype,"justCopiedHash",void 0);j=G([Qt(),Dt("holo-identicon")],j);let Y=class extends Ce(Rt){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return this.agentPubKey?x` <div
			style=${Wt({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`:x`
				<sl-icon
					style=${Wt({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
					.src=${Yt(Ke)}
				>
				</sl-icon>
			`}renderProfile(e){if(!e||!e.entry.fields.avatar)return this.renderIdenticon();const o=x`
			<div
				style=${Wt({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<sl-avatar
					.image=${e.entry.fields.avatar}
					style="--size: ${this.size}px;"
					@click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;return x`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip?"manual":"hover focus"}
				hoist
				.content=${e.entry.nickname}
			>
				${o}
			</sl-tooltip>
		`}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}render(){if(this.store.config.avatarMode==="identicon")return this.renderIdenticon();const e=this.profile();switch(e.status){case"pending":return x`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return x`
					<display-error
						tooltip
						.headline=${qt("Error fetching the agent's avatar")}
						.error=${e.error}
					></display-error>
				`}}};Y.styles=[Xt,X`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`];lt([u(Jt("agent-pub-key"))],Y.prototype,"agentPubKey",void 0);lt([u(Jt("profile-hash"))],Y.prototype,"profileHash",void 0);lt([u({type:Number})],Y.prototype,"size",void 0);lt([u({type:Boolean,attribute:"disable-tooltip"})],Y.prototype,"disableTooltip",void 0);lt([u({type:Boolean,attribute:"disable-copy"})],Y.prototype,"disableCopy",void 0);lt([Gt({context:ve,subscribe:!0}),u()],Y.prototype,"store",void 0);Y=lt([Qt(),Dt("agent-avatar")],Y);var Uo=X`
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
`,Ct=class extends ut{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${et({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ct.styles=[ht,Uo];f([u({reflect:!0})],Ct.prototype,"variant",2);f([u({type:Boolean,reflect:!0})],Ct.prototype,"pill",2);f([u({type:Boolean,reflect:!0})],Ct.prototype,"pulse",2);Ct.define("sl-badge");var qo=X`
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
`,De=class extends ut{constructor(){super(...arguments),this.hasSlotController=new He(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${et({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};De.styles=[ht,qo];De.define("sl-card");var Yo=X`
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
`,ge=new WeakMap;function Be(t){let e=ge.get(t);return e||(e=window.getComputedStyle(t,null),ge.set(t,e)),e}function Xo(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Be(t);return e.visibility!=="hidden"&&e.display!=="none"}function Go(t){const e=Be(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Jo(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Xo(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Go(t)}function Qo(t){var e,o;const i=ti(t),r=(e=i[0])!=null?e:null,n=(o=i[i.length-1])!=null?o:null;return{start:r,end:n}}function Zo(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function ti(t){const e=new WeakMap,o=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!o.includes(r)&&Jo(r)&&o.push(r),r instanceof HTMLSlotElement&&Zo(r,t)&&r.assignedElements({flatten:!0}).forEach(n=>{i(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const n of r.children)i(n)}return i(t),o.sort((r,n)=>{const s=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}var A=class extends ut{constructor(){super(...arguments),this.localize=new Ut(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const n=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Qo(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await zt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=St(this,"dropdown.show",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await zt(this);const{keyframes:t,options:e}=St(this,"dropdown.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
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
        sync=${We(this.sync?this.sync:void 0)}
        class=${et({dropdown:!0,"dropdown--open":this.open})}
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
    `}};A.styles=[ht,Yo];A.dependencies={"sl-popup":C};f([I(".dropdown")],A.prototype,"popup",2);f([I(".dropdown__trigger")],A.prototype,"trigger",2);f([I(".dropdown__panel")],A.prototype,"panel",2);f([u({type:Boolean,reflect:!0})],A.prototype,"open",2);f([u({reflect:!0})],A.prototype,"placement",2);f([u({type:Boolean,reflect:!0})],A.prototype,"disabled",2);f([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],A.prototype,"stayOpenOnSelect",2);f([u({attribute:!1})],A.prototype,"containingElement",2);f([u({type:Number})],A.prototype,"distance",2);f([u({type:Number})],A.prototype,"skidding",2);f([u({type:Boolean})],A.prototype,"hoist",2);f([u({reflect:!0})],A.prototype,"sync",2);f([vt("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);Ht("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ht("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});A.define("sl-dropdown");Fe.define("sl-spinner");var ei=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,se=(t,e,o,i)=>{for(var r=i>1?void 0:i?oi(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&ei(e,o,r),r};let bt=class extends Ce(Rt){render(){const t=je([this.notificationsStore.unreadNotifications.get(),this.notificationsStore.readNotifications.get()]);switch(t.status){case"pending":return x`
					<sl-skeleton
						style="height: 32px; width: 32px; --border-radius: 8px"
						effect="pulse"
					></sl-skeleton>
				`;case"error":return x`<display-error
					tooltip
					.headline=${qt("Error fetching the notifications")}
					.error=${t.error}
				></display-error>`;case"completed":const[e,o]=t.value;return x`
					<sl-dropdown
						placement="bottom-end"
						distance="8"
						hoist
						@sl-hide=${()=>this.notificationsStore.client.markNotificationsAsRead(Object.keys(e).map(i=>we(i)))}
					>
						<div slot="trigger" style="position: relative;">
							<sl-icon-button
								part="icon-button"
								slot="anchor"
								style="font-size: 1.5rem"
								.src=${Yt(Ve)}
							>
							</sl-icon-button>
							${Object.keys(e).length+Object.keys(o).length>0?x`
										<sl-badge
											style="position: absolute; left: 16px; top: 0px; z-index: 1000"
											pill
											.variant=${Object.keys(e).length>0?"primary":"neutral"}
											.pulse=${Object.keys(e).length>0}
											>${Object.keys(e).length+Object.keys(o).length}</sl-badge
										>
									`:x``}
						</div>
						<sl-card style="--padding: 0; width: 500px;">
							<my-notifications-list style="flex: 1"></my-notifications-list>
						</sl-card>
					</sl-dropdown>
				`}}};bt.styles=[Xt];se([Gt({context:Ue,subscribe:!0})],bt.prototype,"notificationsStore",2);se([Gt({context:ve,subscribe:!0})],bt.prototype,"profilesStore",2);bt=se([Qt(),Dt("my-notifications-icon-button")],bt);export{bt as MyNotificationsIconButton};
