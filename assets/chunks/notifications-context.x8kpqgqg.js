import{e as l}from"./provide.CB-ltRHt.js";import{n as f,a as p,c as h,t as x}from"./property.CktKRGPk.js";import{n as m}from"./context.B4DPM_iL.js";import{q as u,b as C,a as b,k as y,i as v}from"./notifications-client.Dxc8Nd9s.js";const w=f("tnesh/appClientContext");var _=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(a,r,i,n)=>{for(var t=n>1?void 0:n?O(r,i):r,s=a.length-1,c;s>=0;s--)(c=a[s])&&(t=(n?c(r,i,t):c(t))||t);return n&&t&&_(r,i,t),t};let e=class extends u{constructor(){super(...arguments),this.zome="notifications"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<notifications-context> must have a role="YOUR_DNA_ROLE" property, eg: <notifications-context role="role1">');if(!this.client)throw new Error(`<notifications-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <notifications-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <notifications-context .store=\${store}>)`);this.store=new C(new b(this.client,this.role,this.zome))}}render(){return y`<slot></slot>`}};e.styles=v`
		:host {
			display: contents;
		}
	`;o([l({context:m}),p({type:Object})],e.prototype,"store",2);o([h({context:w,subscribe:!0})],e.prototype,"client",2);o([p()],e.prototype,"role",2);o([p()],e.prototype,"zome",2);e=o([x("notifications-context")],e);export{e as NotificationsContext};
