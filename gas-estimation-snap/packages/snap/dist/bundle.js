(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t,n){if("string"==typeof e)throw new Error(`An HTML element ("${String(e)}") was used in a Snap component, which is not supported by Snaps UI. Please use one of the supported Snap components.`);if(!e)throw new Error("A JSX fragment was used in a Snap component, which is not supported by Snaps UI. Please use one of the supported Snap components.");return e({...t,key:n})}function o(e,t,o){return n(e,t,o)}function r(e){return Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!==e)))}function a(e){return t=>{const{key:n=null,...o}=t;return{type:e,props:r(o),key:n}}}e.r(t),e.d(t,{onRpcRequest:()=>c});const s=a("Box"),i=a("Text"),p=a("Bold"),u=a("Copyable");const c=async({origin:e,request:t})=>{if("hello"===t.method){const t=await async function(){return(await fetch("https://beaconcha.in/api/v1/execution/gasnow")).text()}();return snap.request({method:"snap_dialog",params:{type:"alert",content:o(s,{children:[o(i,{children:[n(p,{children:e}),"!"]}),n(i,{children:"Gas fee estimation -> "}),n(u,{value:t})]})}})}throw new Error("Method not found.")};var l=exports;for(var d in t)l[d]=t[d];t.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();