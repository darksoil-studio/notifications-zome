import{s as b,n as f,a as p,c as v,b as g,t as C}from"./context.BpdLNh6U.js";import{h as w,b as m,a as y,k as O,i as P}from"./notifications-client.CeyJiXep.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class d extends E{constructor(t,o,i){var s,n;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=e=>{const r=e.composedPath()[0];e.context===this.context&&r!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,r,e.subscribe))},this.onProviderRequest=e=>{const r=e.composedPath()[0];if(e.context!==this.context||r===this.host)return;const u=new Set;for(const[l,{consumerHost:x}]of this.subscriptions)u.has(l)||(u.add(l),x.dispatchEvent(new b(this.context,l,!0)));e.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j({context:c}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new d(this,{context:c}))}),{get(){return t.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),t.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{t.constructor.addInitializer(e=>{i.set(e,new d(e,{context:c}))});const s=Object.getOwnPropertyDescriptor(t,o);let n;if(s===void 0){const e=new WeakMap;n={get(){return e.get(this)},set(r){i.get(this).setValue(r),e.set(this,r)},configurable:!0,enumerable:!0}}else{const e=s.set;n={...s,set(r){i.get(this).setValue(r),e==null||e.call(this,r)}}}return void Object.defineProperty(t,o,n)}}}const V=f("tnesh/appClientContext");var $=Object.defineProperty,R=Object.getOwnPropertyDescriptor,h=(c,t,o,i)=>{for(var s=i>1?void 0:i?R(t,o):t,n=c.length-1,e;n>=0;n--)(e=c[n])&&(s=(i?e(t,o,s):e(s))||s);return i&&s&&$(t,o,s),s};let a=class extends w{constructor(){super(...arguments),this.zome="notifications"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<notifications-context> must have a role="YOUR_DNA_ROLE" property, eg: <notifications-context role="role1">');if(!this.client)throw new Error(`<notifications-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <notifications-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <notifications-context .store=\${store}>)`);this.store=new m(new y(this.client,this.role,this.zome))}}render(){return O`<slot></slot>`}};a.styles=P`
		:host {
			display: contents;
		}
	`;h([j({context:g}),p({type:Object})],a.prototype,"store",2);h([v({context:V,subscribe:!0})],a.prototype,"client",2);h([p()],a.prototype,"role",2);h([p()],a.prototype,"zome",2);a=h([C("notifications-context")],a);export{a as NotificationsContext};
