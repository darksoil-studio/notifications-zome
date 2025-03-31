import{i as rt,k as O,h as Jt,w as Qt,m as ye,d as be,c as we}from"./notifications-client.CeyJiXep.js";import{a as g,d as Zt,t as te,c as ve,b as xe}from"./context.BpdLNh6U.js";import{c as dt,_ as u,S as pt,R as it,H as Ee,e as J,a as ee,b as oe,w as _t,L as ie,t as ke,d as Ce,f as _e,j as Oe,m as Ae}from"./my-notifications-list.Cu58ICtg.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Se{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(jt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(jt,this.__litLocalizeEventHandler)}}const Pe=t=>t.addController(new Se(t)),Te=Pe;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=()=>(t,e)=>(t.addInitializer(Te),t);var ze=rt`
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
`,ht=class extends pt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return O`
      <span
        part="base"
        class=${it({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ht.styles=[dt,ze];u([g({reflect:!0})],ht.prototype,"variant",2);u([g({type:Boolean,reflect:!0})],ht.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],ht.prototype,"pulse",2);ht.define("sl-badge");var Re=rt`
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
`,ne=class extends pt{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${it({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ne.styles=[dt,Re];ne.define("sl-card");var $e=rt`
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
`,Vt=new WeakMap;function re(t){let e=Vt.get(t);return e||(e=window.getComputedStyle(t,null),Vt.set(t,e)),e}function De(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=re(t);return e.visibility!=="hidden"&&e.display!=="none"}function Be(t){const e=re(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Ne(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!De(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Be(t)}function Fe(t){var e,o;const i=Me(t),n=(e=i[0])!=null?e:null,r=(o=i[i.length-1])!=null?o:null;return{start:n,end:r}}function We(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Me(t){const e=new WeakMap,o=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||e.has(n))return;e.set(n,!0),!o.includes(n)&&Ne(n)&&o.push(n),n instanceof HTMLSlotElement&&We(n,t)&&n.assignedElements({flatten:!0}).forEach(r=>{i(r)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const r of n.children)i(r)}return i(t),o.sort((n,r)=>{const s=Number(n.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var He=rt`
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
`;const U=Math.min,P=Math.max,yt=Math.round,gt=Math.floor,X=t=>({x:t,y:t}),je={left:"right",right:"left",bottom:"top",top:"bottom"},Ve={start:"end",end:"start"};function zt(t,e,o){return P(t,U(e,o))}function st(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function se(t){return t==="x"?"y":"x"}function Bt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(q(t))?"y":"x"}function Nt(t){return se(Q(t))}function Ie(t,e,o){o===void 0&&(o=!1);const i=at(t),n=Nt(t),r=Bt(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=bt(s)),[s,bt(s)]}function Ke(t){const e=bt(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.replace(/start|end/g,e=>Ve[e])}function Ye(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:s;default:return[]}}function Ue(t,e,o,i){const n=at(t);let r=Ye(q(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(Rt)))),r}function bt(t){return t.replace(/left|right|bottom|top/g,e=>je[e])}function Xe(t){return{top:0,right:0,bottom:0,left:0,...t}}function ae(t){return typeof t!="number"?Xe(t):{top:t,right:t,bottom:t,left:t}}function wt(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function It(t,e,o){let{reference:i,floating:n}=t;const r=Q(e),s=Nt(e),a=Bt(s),c=q(e),l=r==="y",d=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2,m=i[a]/2-n[a]/2;let p;switch(c){case"top":p={x:d,y:i.y-n.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-n.width,y:h};break;default:p={x:i.x,y:i.y}}switch(at(e)){case"start":p[s]-=m*(o&&l?-1:1);break;case"end":p[s]+=m*(o&&l?-1:1);break}return p}const qe=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:d,y:h}=It(l,i,c),m=i,p={},f=0;for(let y=0;y<a.length;y++){const{name:w,fn:b}=a[y],{x:v,y:E,data:C,reset:k}=await b({x:d,y:h,initialPlacement:i,placement:m,strategy:n,middlewareData:p,rects:l,platform:s,elements:{reference:t,floating:e}});d=v??d,h=E??h,p={...p,[w]:{...p[w],...C}},k&&f<=50&&(f++,typeof k=="object"&&(k.placement&&(m=k.placement),k.rects&&(l=k.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):k.rects),{x:d,y:h}=It(l,m,c)),y=-1)}return{x:d,y:h,placement:m,strategy:n,middlewareData:p}};async function Ft(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:m=!1,padding:p=0}=st(e,t),f=ae(p),w=a[m?h==="floating"?"reference":"floating":h],b=wt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:d,strategy:c})),v=h==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),C=await(r.isElement==null?void 0:r.isElement(E))?await(r.getScale==null?void 0:r.getScale(E))||{x:1,y:1}:{x:1,y:1},k=wt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:E,strategy:c}):v);return{top:(b.top-k.top+f.top)/C.y,bottom:(k.bottom-b.bottom+f.bottom)/C.y,left:(b.left-k.left+f.left)/C.x,right:(k.right-b.right+f.right)/C.x}}const Ge=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:a,middlewareData:c}=e,{element:l,padding:d=0}=st(t,e)||{};if(l==null)return{};const h=ae(d),m={x:o,y:i},p=Nt(n),f=Bt(p),y=await s.getDimensions(l),w=p==="y",b=w?"top":"left",v=w?"bottom":"right",E=w?"clientHeight":"clientWidth",C=r.reference[f]+r.reference[p]-m[p]-r.floating[f],k=m[p]-r.reference[p],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let z=L?L[E]:0;(!z||!await(s.isElement==null?void 0:s.isElement(L)))&&(z=a.floating[E]||r.floating[f]);const H=C/2-k/2,B=z/2-y[f]/2-1,R=U(h[b],B),V=U(h[v],B),N=R,I=z-y[f]-V,S=z/2-y[f]/2+H,et=zt(N,S,I),j=!c.arrow&&at(n)!=null&&S!==et&&r.reference[f]/2-(S<N?R:V)-y[f]/2<0,F=j?S<N?S-N:S-I:0;return{[p]:m[p]+F,data:{[p]:et,centerOffset:S-et-F,...j&&{alignmentOffset:F}},reset:j}}}),Je=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...w}=st(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const b=q(n),v=Q(a),E=q(a)===a,C=await(c.isRTL==null?void 0:c.isRTL(l.floating)),k=m||(E||!y?[bt(a)]:Ke(a)),L=f!=="none";!m&&L&&k.push(...Ue(a,y,f,C));const z=[a,...k],H=await Ft(e,w),B=[];let R=((i=r.flip)==null?void 0:i.overflows)||[];if(d&&B.push(H[b]),h){const S=Ie(n,s,C);B.push(H[S[0]],H[S[1]])}if(R=[...R,{placement:n,overflows:B}],!B.every(S=>S<=0)){var V,N;const S=(((V=r.flip)==null?void 0:V.index)||0)+1,et=z[S];if(et)return{data:{index:S,overflows:R},reset:{placement:et}};let j=(N=R.filter(F=>F.overflows[0]<=0).sort((F,K)=>F.overflows[1]-K.overflows[1])[0])==null?void 0:N.placement;if(!j)switch(p){case"bestFit":{var I;const F=(I=R.filter(K=>{if(L){const Y=Q(K.placement);return Y===v||Y==="y"}return!0}).map(K=>[K.placement,K.overflows.filter(Y=>Y>0).reduce((Y,me)=>Y+me,0)]).sort((K,Y)=>K[1]-Y[1])[0])==null?void 0:I[0];F&&(j=F);break}case"initialPlacement":j=a;break}if(n!==j)return{reset:{placement:j}}}return{}}}};async function Qe(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=q(o),a=at(o),c=Q(o)==="y",l=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,h=st(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:f}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof f=="number"&&(p=a==="end"?f*-1:f),c?{x:p*d,y:m*l}:{x:m*l,y:p*d}}const Ze=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:s,middlewareData:a}=e,c=await Qe(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:s}}}}},to=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:b,y:v}=w;return{x:b,y:v}}},...c}=st(t,e),l={x:o,y:i},d=await Ft(e,c),h=Q(q(n)),m=se(h);let p=l[m],f=l[h];if(r){const w=m==="y"?"top":"left",b=m==="y"?"bottom":"right",v=p+d[w],E=p-d[b];p=zt(v,p,E)}if(s){const w=h==="y"?"top":"left",b=h==="y"?"bottom":"right",v=f+d[w],E=f-d[b];f=zt(v,f,E)}const y=a.fn({...e,[m]:p,[h]:f});return{...y,data:{x:y.x-o,y:y.y-i,enabled:{[m]:r,[h]:s}}}}}},eo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:n,rects:r,platform:s,elements:a}=e,{apply:c=()=>{},...l}=st(t,e),d=await Ft(e,l),h=q(n),m=at(n),p=Q(n)==="y",{width:f,height:y}=r.floating;let w,b;h==="top"||h==="bottom"?(w=h,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=h,w=m==="end"?"top":"bottom");const v=y-d.top-d.bottom,E=f-d.left-d.right,C=U(y-d[w],v),k=U(f-d[b],E),L=!e.middlewareData.shift;let z=C,H=k;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(H=E),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(z=v),L&&!m){const R=P(d.left,0),V=P(d.right,0),N=P(d.top,0),I=P(d.bottom,0);p?H=f-2*(R!==0||V!==0?R+V:P(d.left,d.right)):z=y-2*(N!==0||I!==0?N+I:P(d.top,d.bottom))}await c({...e,availableWidth:H,availableHeight:z});const B=await s.getDimensions(a.floating);return f!==B.width||y!==B.height?{reset:{rects:!0}}:{}}}};function Ot(){return typeof window<"u"}function lt(t){return le(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(le(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function le(t){return Ot()?t instanceof Node||t instanceof T(t).Node:!1}function $(t){return Ot()?t instanceof Element||t instanceof T(t).Element:!1}function W(t){return Ot()?t instanceof HTMLElement||t instanceof T(t).HTMLElement:!1}function Kt(t){return!Ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function ut(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function oo(t){return["table","td","th"].includes(lt(t))}function At(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Wt(t){const e=Mt(),o=$(t)?D(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function io(t){let e=G(t);for(;W(e)&&!nt(e);){if(Wt(e))return e;if(At(e))return null;e=G(e)}return null}function Mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(lt(t))}function D(t){return T(t).getComputedStyle(t)}function St(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||M(t);return Kt(e)?e.host:e}function ce(t){const e=G(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&ut(e)?e:ce(e)}function ct(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=ce(t),r=n===((i=t.ownerDocument)==null?void 0:i.body),s=T(n);if(r){const a=$t(s);return e.concat(s,s.visualViewport||[],ut(n)?n:[],a&&o?ct(a):[])}return e.concat(n,ct(n,[],o))}function $t(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function de(t){const e=D(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=W(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,a=yt(o)!==r||yt(i)!==s;return a&&(o=r,i=s),{width:o,height:i,$:a}}function Ht(t){return $(t)?t:t.contextElement}function ot(t){const e=Ht(t);if(!W(e))return X(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=de(e);let s=(r?yt(o.width):o.width)/i,a=(r?yt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const no=X(0);function pe(t){const e=T(t);return!Mt()||!e.visualViewport?no:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ro(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==T(t)?!1:e}function Z(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=Ht(t);let s=X(1);e&&(i?$(i)&&(s=ot(i)):s=ot(t));const a=ro(r,o,i)?pe(r):X(0);let c=(n.left+a.x)/s.x,l=(n.top+a.y)/s.y,d=n.width/s.x,h=n.height/s.y;if(r){const m=T(r),p=i&&$(i)?T(i):i;let f=m,y=$t(f);for(;y&&i&&p!==f;){const w=ot(y),b=y.getBoundingClientRect(),v=D(y),E=b.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,C=b.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;c*=w.x,l*=w.y,d*=w.x,h*=w.y,c+=E,l+=C,f=T(y),y=$t(f)}}return wt({width:d,height:h,x:c,y:l})}function so(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r=n==="fixed",s=M(i),a=e?At(e.floating):!1;if(i===s||a&&r)return o;let c={scrollLeft:0,scrollTop:0},l=X(1);const d=X(0),h=W(i);if((h||!h&&!r)&&((lt(i)!=="body"||ut(s))&&(c=St(i)),W(i))){const m=Z(i);l=ot(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-c.scrollLeft*l.x+d.x,y:o.y*l.y-c.scrollTop*l.y+d.y}}function ao(t){return Array.from(t.getClientRects())}function Dt(t,e){const o=St(t).scrollLeft;return e?e.left+o:Z(M(t)).left+o}function lo(t){const e=M(t),o=St(t),i=t.ownerDocument.body,n=P(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=P(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Dt(t);const a=-o.scrollTop;return D(i).direction==="rtl"&&(s+=P(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:a}}function co(t,e){const o=T(t),i=M(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,c=0;if(n){r=n.width,s=n.height;const l=Mt();(!l||l&&e==="fixed")&&(a=n.offsetLeft,c=n.offsetTop)}return{width:r,height:s,x:a,y:c}}function po(t,e){const o=Z(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=W(t)?ot(t):X(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,c=n*r.x,l=i*r.y;return{width:s,height:a,x:c,y:l}}function Yt(t,e,o){let i;if(e==="viewport")i=co(t,o);else if(e==="document")i=lo(M(t));else if($(e))i=po(e,o);else{const n=pe(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return wt(i)}function he(t,e){const o=G(t);return o===e||!$(o)||nt(o)?!1:D(o).position==="fixed"||he(o,e)}function ho(t,e){const o=e.get(t);if(o)return o;let i=ct(t,[],!1).filter(a=>$(a)&&lt(a)!=="body"),n=null;const r=D(t).position==="fixed";let s=r?G(t):t;for(;$(s)&&!nt(s);){const a=D(s),c=Wt(s);!c&&a.position==="fixed"&&(n=null),(r?!c&&!n:!c&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||ut(s)&&!c&&he(t,s))?i=i.filter(d=>d!==s):n=a,s=G(s)}return e.set(t,i),i}function uo(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?At(e)?[]:ho(e,this._c):[].concat(o),i],a=s[0],c=s.reduce((l,d)=>{const h=Yt(e,d,n);return l.top=P(h.top,l.top),l.right=U(h.right,l.right),l.bottom=U(h.bottom,l.bottom),l.left=P(h.left,l.left),l},Yt(e,a,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function fo(t){const{width:e,height:o}=de(t);return{width:e,height:o}}function go(t,e,o){const i=W(e),n=M(e),r=o==="fixed",s=Z(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=X(0);if(i||!i&&!r)if((lt(e)!=="body"||ut(n))&&(a=St(e)),i){const p=Z(e,!0,r,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else n&&(c.x=Dt(n));let l=0,d=0;if(n&&!i&&!r){const p=n.getBoundingClientRect();d=p.top+a.scrollTop,l=p.left+a.scrollLeft-Dt(n,p)}const h=s.left+a.scrollLeft-c.x-l,m=s.top+a.scrollTop-c.y-d;return{x:h,y:m,width:s.width,height:s.height}}function Tt(t){return D(t).position==="static"}function Ut(t,e){if(!W(t)||D(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return M(t)===o&&(o=o.ownerDocument.body),o}function ue(t,e){const o=T(t);if(At(t))return o;if(!W(t)){let n=G(t);for(;n&&!nt(n);){if($(n)&&!Tt(n))return n;n=G(n)}return o}let i=Ut(t,e);for(;i&&oo(i)&&Tt(i);)i=Ut(i,e);return i&&nt(i)&&Tt(i)&&!Wt(i)?o:i||io(t)||o}const mo=async function(t){const e=this.getOffsetParent||ue,o=this.getDimensions,i=await o(t.floating);return{reference:go(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function yo(t){return D(t).direction==="rtl"}const mt={convertOffsetParentRelativeRectToViewportRelativeRect:so,getDocumentElement:M,getClippingRect:uo,getOffsetParent:ue,getElementRects:mo,getClientRects:ao,getDimensions:fo,getScale:ot,isElement:$,isRTL:yo};function bo(t,e){let o=null,i;const n=M(t);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),r();const{left:l,top:d,width:h,height:m}=t.getBoundingClientRect();if(a||e(),!h||!m)return;const p=gt(d),f=gt(n.clientWidth-(l+h)),y=gt(n.clientHeight-(d+m)),w=gt(l),v={rootMargin:-p+"px "+-f+"px "+-y+"px "+-w+"px",threshold:P(0,U(1,c))||1};let E=!0;function C(k){const L=k[0].intersectionRatio;if(L!==c){if(!E)return s();L?s(!1,L):i=setTimeout(()=>{s(!1,1e-7)},1e3)}E=!1}try{o=new IntersectionObserver(C,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(C,v)}o.observe(t)}return s(!0),r}function wo(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=Ht(t),d=n||r?[...l?ct(l):[],...ct(e)]:[];d.forEach(b=>{n&&b.addEventListener("scroll",o,{passive:!0}),r&&b.addEventListener("resize",o)});const h=l&&a?bo(l,o):null;let m=-1,p=null;s&&(p=new ResizeObserver(b=>{let[v]=b;v&&v.target===l&&p&&(p.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var E;(E=p)==null||E.observe(e)})),o()}),l&&!c&&p.observe(l),p.observe(e));let f,y=c?Z(t):null;c&&w();function w(){const b=Z(t);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&o(),y=b,f=requestAnimationFrame(w)}return o(),()=>{var b;d.forEach(v=>{n&&v.removeEventListener("scroll",o),r&&v.removeEventListener("resize",o)}),h==null||h(),(b=p)==null||b.disconnect(),p=null,c&&cancelAnimationFrame(f)}}const vo=Ze,xo=to,Eo=Je,Xt=eo,ko=Ge,Co=(t,e,o)=>{const i=new Map,n={platform:mt,...o},r={...n.platform,_c:i};return qe(t,e,{...n,platform:r})};function _o(t){return Oo(t)}function Lt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Oo(t){for(let e=t;e;e=Lt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Lt(t);e;e=Lt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ao(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var x=class extends pt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,r=0,s=0,a=0,c=0,l=0,d=0;o?t.top<e.top?(i=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,c=e.top,l=e.right,d=e.top):(i=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,c=t.top,l=t.right,d=t.top):t.left<e.left?(i=t.right,n=t.top,r=e.left,s=e.top,a=t.right,c=t.bottom,l=e.left,d=e.bottom):(i=e.right,n=e.top,r=t.left,s=t.top,a=e.right,c=e.bottom,l=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ao(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=wo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[vo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Xt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Eo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(xo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Xt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ko({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>mt.getOffsetParent(o,_o):mt.getOffsetParent;Co(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ee(oe({},mt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const c=n.arrow.x,l=n.arrow.y;let d="",h="",m="",p="";if(this.arrowPlacement==="start"){const f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?f:"",p=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":f,p=s?f:"",m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof c=="number"?`${c}px`:"",d=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${it({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${it({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};x.styles=[dt,He];u([J(".popup")],x.prototype,"popup",2);u([J(".popup__arrow")],x.prototype,"arrowEl",2);u([g()],x.prototype,"anchor",2);u([g({type:Boolean,reflect:!0})],x.prototype,"active",2);u([g({reflect:!0})],x.prototype,"placement",2);u([g({reflect:!0})],x.prototype,"strategy",2);u([g({type:Number})],x.prototype,"distance",2);u([g({type:Number})],x.prototype,"skidding",2);u([g({type:Boolean})],x.prototype,"arrow",2);u([g({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);u([g({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);u([g({type:Boolean})],x.prototype,"flip",2);u([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],x.prototype,"flipFallbackPlacements",2);u([g({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);u([g({type:Object})],x.prototype,"flipBoundary",2);u([g({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);u([g({type:Boolean})],x.prototype,"shift",2);u([g({type:Object})],x.prototype,"shiftBoundary",2);u([g({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);u([g({attribute:"auto-size"})],x.prototype,"autoSize",2);u([g()],x.prototype,"sync",2);u([g({type:Object})],x.prototype,"autoSizeBoundary",2);u([g({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);u([g({attribute:"hover-bridge",type:Boolean})],x.prototype,"hoverBridge",2);var fe=new Map,So=new WeakMap;function Po(t){return t??{keyframes:[],options:{duration:0}}}function qt(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Pt(t,e){fe.set(t,Po(e))}function vt(t,e,o){const i=So.get(t);if(i!=null&&i[e])return qt(i[e],o.dir);const n=fe.get(e);return n?qt(n,o.dir):{keyframes:[],options:{duration:0}}}function xt(t,e){return new Promise(o=>{function i(n){n.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function Et(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,ee(oe({},o),{duration:To()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function Gt(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function To(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var A=class extends pt{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,n;const r=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],n=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Fe(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await kt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=vt(this,"dropdown.show",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kt(this);const{keyframes:t,options:e}=vt(this,"dropdown.hide",{dir:this.localize.dir()});await Et(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
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
        sync=${ke(this.sync?this.sync:void 0)}
        class=${it({dropdown:!0,"dropdown--open":this.open})}
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
    `}};A.styles=[dt,$e];A.dependencies={"sl-popup":x};u([J(".dropdown")],A.prototype,"popup",2);u([J(".dropdown__trigger")],A.prototype,"trigger",2);u([J(".dropdown__panel")],A.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],A.prototype,"open",2);u([g({reflect:!0})],A.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],A.prototype,"disabled",2);u([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],A.prototype,"stayOpenOnSelect",2);u([g({attribute:!1})],A.prototype,"containingElement",2);u([g({type:Number})],A.prototype,"distance",2);u([g({type:Number})],A.prototype,"skidding",2);u([g({type:Boolean})],A.prototype,"hoist",2);u([g({reflect:!0})],A.prototype,"sync",2);u([_t("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);Pt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Pt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});A.define("sl-dropdown");Ce.define("sl-spinner");var Lo=rt`
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
`,_=class extends pt{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Gt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Gt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await kt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=vt(this,"tooltip.show",{dir:this.localize.dir()});await Et(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await kt(this.body);const{keyframes:o,options:i}=vt(this,"tooltip.hide",{dir:this.localize.dir()});await Et(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return O`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${it({tooltip:!0,"tooltip--open":this.open})}
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
    `}};_.styles=[dt,Lo];_.dependencies={"sl-popup":x};u([J("slot:not([name])")],_.prototype,"defaultSlot",2);u([J(".tooltip__body")],_.prototype,"body",2);u([J("sl-popup")],_.prototype,"popup",2);u([g()],_.prototype,"content",2);u([g()],_.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],_.prototype,"disabled",2);u([g({type:Number})],_.prototype,"distance",2);u([g({type:Boolean,reflect:!0})],_.prototype,"open",2);u([g({type:Number})],_.prototype,"skidding",2);u([g()],_.prototype,"trigger",2);u([g({type:Boolean})],_.prototype,"hoist",2);u([_t("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1);u([_t(["content","distance","hoist","placement","skidding"])],_.prototype,"handleOptionsChange",1);u([_t("disabled")],_.prototype,"handleDisabledChange",1);Pt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Pt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});_.define("sl-tooltip");var ft=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let tt=class extends Jt{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return O`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
				src="${Qt(ye)}"
			></sl-icon>
		`}renderFull(){return O` <div class="column center-content" style="flex: 1">
			${this.renderIcon()}
			<div style="width: 500px; text-align: center" class="column">
				${this.headline?O` <span style="margin-bottom: 8px">${this.headline} </span>`:O``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return O`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};tt.styles=[Zt,rt`
			:host {
				display: flex;
			}
		`];ft([g({attribute:"tooltip"})],tt.prototype,"tooltip",void 0);ft([g()],tt.prototype,"headline",void 0);ft([g()],tt.prototype,"error",void 0);ft([g({attribute:"icon-size"})],tt.prototype,"iconSize",void 0);tt=ft([te("display-error")],tt);var zo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,ge=(t,e,o,i)=>{for(var n=i>1?void 0:i?Ro(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(i?s(e,o,n):s(n))||n);return i&&n&&zo(e,o,n),n};let Ct=class extends _e(Jt){render(){const t=Oe([this.notificationsStore.unreadNotifications.get(),this.notificationsStore.readNotifications.get()]);switch(t.status){case"pending":return O`
					<sl-skeleton
						style="height: 32px; width: 32px; --border-radius: 8px"
						effect="pulse"
					></sl-skeleton>
				`;case"error":return O`<display-error
					tooltip
					.headline=${Ae("Error fetching the notifications")}
					.error=${t.error}
				></display-error>`;case"completed":const[e,o]=t.value;return O`
					<sl-dropdown
						placement="bottom-end"
						distance="8"
						hoist
						@sl-hide=${()=>this.notificationsStore.client.markNotificationsAsRead(Object.keys(e).map(i=>be(i)))}
					>
						<div slot="trigger" style="position: relative;">
							<sl-icon-button
								part="icon-button"
								slot="anchor"
								style="font-size: 1.5rem"
								.src=${Qt(we)}
							>
							</sl-icon-button>
							${Object.keys(e).length+Object.keys(o).length>0?O`
										<sl-badge
											style="position: absolute; left: 16px; top: 0px; z-index: 1000"
											pill
											.variant=${Object.keys(e).length>0?"primary":"neutral"}
											.pulse=${Object.keys(e).length>0}
											>${Object.keys(e).length+Object.keys(o).length}</sl-badge
										>
									`:O``}
						</div>
						<sl-card style="--padding: 0; width: 500px;">
							<my-notifications-list style="flex: 1"></my-notifications-list>
						</sl-card>
					</sl-dropdown>
				`}}};Ct.styles=[Zt];ge([ve({context:xe,subscribe:!0})],Ct.prototype,"notificationsStore",2);Ct=ge([Le(),te("my-notifications-icon-button")],Ct);export{Ct as MyNotificationsIconButton};
