import{e as l,a as f}from"./context.DAkMnuFr.js";import{n as a,c as m,t as x}from"./property.DbKnSzgE.js";import{n as h,b as u,a as b,x as y,m as v}from"./notifications-client.B8NU7A1r.js";import{n as C}from"./context.DUAZiG_Y.js";var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(p,r,n,i)=>{for(var t=i>1?void 0:i?_(r,n):r,s=p.length-1,c;s>=0;s--)(c=p[s])&&(t=(i?c(r,n,t):c(t))||t);return i&&t&&w(r,n,t),t};let e=class extends h{constructor(){super(...arguments),this.zome="notifications"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<notifications-context> must have a role="YOUR_DNA_ROLE" property, eg: <notifications-context role="role1">');if(!this.client)throw new Error(`<notifications-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <notifications-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <notifications-context .store=\${store}>)`);this.store=new u(new b(this.client,this.role,this.zome))}}render(){return y`<slot></slot>`}};e.styles=v`
		:host {
			display: contents;
		}
	`;o([l({context:C}),a({type:Object})],e.prototype,"store",2);o([m({context:f,subscribe:!0})],e.prototype,"client",2);o([a()],e.prototype,"role",2);o([a()],e.prototype,"zome",2);e=o([x("notifications-context")],e);export{e as NotificationsContext};
