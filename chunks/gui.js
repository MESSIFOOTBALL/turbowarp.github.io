var GUI=(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[3],{1347:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,"html,\nbody,\n.index_app_2mqDO {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { box-sizing: border-box; }\n",""]),t.locals={app:"index_app_2mqDO"}},1348:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(49),i=n.n(a),r=n(43),d=n(133),l=n(151),c=n(176);const p=()=>{location.hash=""};t.default=e=>{l.a.setAppElement(e);const t=Object(r.d)(d.a,c.a)(l.a);"object"==typeof window&&(window.onbeforeunload=()=>!0),i.a.render(s.a.createElement(t,{canEditTitle:!0,canSave:!1,cloudHost:"cirrus.garbomuffin.com",onClickLogo:p}),e)}},658:function(e,t,n){var o=n(1347);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,s);o.locals&&(e.exports=o.locals)},899:function(e,t,n){"use strict";n.r(t);n(900),n(901),n(903),n(915),n(932);var o=n(1),s=n.n(o),a=n(49),i=n.n(a),r=n(73),d=n(133),l=n(211),c=n(212),p=n(658),h=n.n(p);document.body.classList.add("tw-loaded"),r.a.pageview("/");const u=document.createElement("div");if(u.className=h.a.app,document.body.appendChild(u),Object(c.a)())n(1348).default(u);else{l.a.setAppElement(u);const e=Object(d.a)(l.a,!0),t=()=>{};i.a.render(s.a.createElement(e,{onBack:t}),u)}},900:function(e,t){if(window.Worker&&window.fetch){let e=0,t=0;const n=document.createElement("div");n.id="hacky-progress-el",n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.height="4px",n.style.backgroundColor="white",n.style.zIndex="99999999",n.style.width="0",n.style.opacity="0",n.style.transition="all .2s",n.title="Progress Bar",document.body.appendChild(n),n.addEventListener("click",e=>{o()}),window.addEventListener("hashchange",n=>{location.hash&&(e=0,t=0,a(0))});const o=()=>{n.style.opacity="0"},s=()=>{n.style.opacity="1"},a=e=>{n.style.width=10+90*e+"%",e>=1&&o()},i=n=>{const o=n.data;Array.isArray(o)&&(t+=o.length,a(t/e))},r=(e,t)=>"string"==typeof e&&/^https:\/\/projects\.scratch\.mit\.edu\/\d+$/.test(e)&&t&&"GET"===t.method,d=window.fetch;window.fetch=(e,t)=>r(e,t)?(s(),a(0),new Promise((t,n)=>{const o=new XMLHttpRequest;o.responseType="blob",o.onload=()=>{t(new Response(o.response,{status:o.status,statusText:o.statusText}))},o.onerror=()=>n(new Error("(tw-hacky-progress-bar) xhr failed")),o.onprogress=e=>{e.lengthComputable&&a(e.loaded/e.total)},o.open("GET",e),o.send()})):d(e,t),window.Worker=class extends window.Worker{constructor(e,t){super(e,t),this.addEventListener("message",i)}postMessage(t){super.postMessage(t),t&&"object"==typeof t&&"url"in t&&"id"in t&&"options"in t&&(s(),e++)}}}},934:function(e,t){}},[[899,0]]]);
//# sourceMappingURL=gui.js.map