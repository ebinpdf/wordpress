(()=>{var e,t={7555:(e,t,a)=>{"use strict";const o=window.wp.element,n=window.wp.domReady;var c=a.n(n),r=a(5697),i=a.n(r);const l=window.wp.dom,s=window.wp.components,d=e=>{let{feedbackData:t,formData:a,onCheckboxChange:n,closeModal:c,onTextChange:r,onAction:i}=e;return(0,o.createElement)(s.Modal,{className:"common-deactivate-modal",onRequestClose:c,title:t.labels.title},(0,o.createElement)("div",{className:"common-deactivate-modal__checkbox"},t.choices.map((e=>{const t=a.choices.indexOf(e.slug)>=0;return(0,o.createElement)("div",{className:"common-deactivate-modal__choice","data-testid":"deactivate-modal__choice",key:e.slug},(0,o.createElement)(s.CheckboxControl,{checked:t,label:e.label,onChange:t=>n(t,e.slug)}),!!e.text_field&&(0,o.createElement)(s.TextControl,{className:"common-deactivate-modal__text "+(t?"show":""),onChange:t=>r(e.text_field,t),value:a[e.text_field]}))}))),(0,o.createElement)(s.ButtonGroup,null,(0,o.createElement)(s.Button,{className:"common-deactivate-modal__button","data-testid":"common-deactivate-modal__button",onClick:()=>i(!0),variant:"primary"},t.labels.submit_deactivate),(0,o.createElement)(s.Button,{className:"common-deactivate-modal__button","data-testid":"common-deactivate-modal__button",onClick:()=>i(!1),variant:"link"},t.labels.skip_deactivate)),(0,o.createElement)("footer",{className:"common-deactivate-modal__footer"},(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:(0,l.safeHTML)(t.labels.privacy_disclaimer)}})))},m=document.documentElement.getAttribute("lang")||"en-US",u=e=>{let{apiUrl:t,getParams:a,isEvent:n,pageData:c}=e;const[r,i]=(0,o.useState)(null),[l,s]=(0,o.useState)(!1),[u,p]=(0,o.useState)(null),[v,f]=(0,o.useState)({});(0,o.useEffect)((()=>((async()=>{const e=await async function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,random:1,language:m};let a="";Object.keys(t).forEach((e=>a+=`${e}=${t[e]}&`));try{const t=await fetch(`${e}?${a.slice(0,-1)}`);return t.ok?await t.json():null}catch(e){return null}}(t,a);e&&e.can_submit_feedback&&(window.addEventListener("click",b),h(e))})(),()=>{window.removeEventListener("click",b)})),[]);const h=e=>{var t,a;p(e);const o={};e.choices.forEach((e=>{e.text_field&&(o[e.text_field]="")})),f({choices:[],coblocks_version:c.coblocksVersion,domain:c.domain,hostname:c.hostname,language:m,persona:null===(t=c.wpOptions)||void 0===t?void 0:t.persona,skill:null===(a=c.wpOptions)||void 0===a?void 0:a.skill,wp_version:c.wpVersion,...o})},b=(0,o.useCallback)((e=>{n(e)&&(e.preventDefault(),s(!0),i(e.target.href))}));return l&&u?(0,o.createElement)(d,{closeModal:()=>s(!1),feedbackData:u,formData:v,onAction:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&v.choices.length>=u.choices_min&&await fetch(t,{method:"POST",body:JSON.stringify(v),headers:{"Content-Type":"application/json"}}),s(!1),window.location.href=r},onCheckboxChange:(e,t)=>{f((a=>{const o=a.choices;return e?o.push(t):o.splice(o.indexOf(t),1),{...a,choices:o}}))},onTextChange:(e,t)=>{f((a=>({...a,[e]:t})))}}):null};u.propTypes={apiUrl:i().string.isRequired,getParams:i().object,isEvent:i().func.isRequired,pageData:i().object.isRequired};const p=()=>{const e=coblocksDeactivateData.domain;if(!coblocksDeactivateData||!e)return null;const t={domain:e};return(0,o.createElement)(u,{apiUrl:"https://wpnux.godaddy.com/v3/api/feedback/coblocks-optout",getParams:t,isEvent:e=>"deactivate-coblocks"===e.target.id,pageData:coblocksDeactivateData})};c()((function(){(0,o.render)((0,o.createElement)(p,null),document.getElementById(coblocksDeactivateData.containerClass))}))},2703:(e,t,a)=>{"use strict";var o=a(414);function n(){}function c(){}c.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,c,r){if(r!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:n};return a.PropTypes=a,a}},5697:(e,t,a)=>{e.exports=a(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,a,n,c)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],c=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&c||r>=c)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(i=!1,c<r&&(r=c));if(i){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[a,n,c]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={902:0,408:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,c,r=a[0],i=a[1],l=a[2],s=0;if(r.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var d=l(o)}for(t&&t(a);s<r.length;s++)c=r[s],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(d)},a=self.webpackChunkcoblocks=self.webpackChunkcoblocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[408],(()=>o(7555)));n=o.O(n)})();