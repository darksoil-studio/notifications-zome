import{F as b,G as l}from"./notifications-client.Dxc8Nd9s.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let d=class extends Event{constructor(s,t,c){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=c??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){return e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u{constructor(s,t,c,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,r)),this.unsubscribe=r},this.host=s,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=c,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new d(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k({context:e,subscribe:s}){return(t,c)=>{typeof c=="object"?c.addInitializer(function(){new u(this,{context:e,callback:n=>{t.set.call(this,n)},subscribe:s})}):t.constructor.addInitializer(n=>{new u(n,{context:e,callback:i=>{n[c]=i},subscribe:s})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends Event{constructor(s){super(h.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=s}}h.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>(s,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,s)}):customElements.define(e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:l},v=(e=p,s,t)=>{const{kind:c,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(t.name,e),c==="accessor"){const{name:r}=t;return{set(o){const a=s.get.call(this);s.set.call(this,o),this.requestUpdate(r,a,e)},init(o){return o!==void 0&&this.P(r,void 0,e),o}}}if(c==="setter"){const{name:r}=t;return function(o){const a=this[r];s.call(this,o),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+c)};function y(e){return(s,t)=>typeof t=="object"?v(e,s,t):((c,n,i)=>{const r=n.hasOwnProperty(i);return n.constructor.createProperty(i,r?{...c,wrapped:!0}:c),r?Object.getOwnPropertyDescriptor(n,i):void 0})(e,s,t)}export{y as a,k as c,x as n,d as s,w as t};
