var c=Object.defineProperty;var i=(t,e,a)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>i(t,typeof e!="symbol"?e+"":e,a);import{S as r}from"./notifications-client.B8NU7A1r.js";import{a as p}from"./property.DbKnSzgE.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t){class e extends t{constructor(){super(...arguments);o(this,"__dispose");o(this,"w",new r.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const s=this.__dispose,n=new r.Computed(()=>{super.performUpdate()});this.w.watch(n),this.__dispose=()=>{this.w.unwatch(n)},n.get(),s==null||s()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this.__dispose)==null||s.call(this)}}return e}const f=p("hc_zome_profiles/store");export{_ as S,f as p};
