!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,m=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function x(e){return c=e,f=setTimeout(j,t),s?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=m();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function O(e){return f=void 0,p&&i?b(e):(i=o=void 0,u)}function T(){var e=m(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return x(l);if(d)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,g(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:O(m())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var x={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")},h=localStorage.getItem("feedback-form-state"),j=JSON.parse(h);function O(e,t,n,i){for(i=0;i<t.length;i++)switch(n=t[i],e){case"Apply":this[n]=styleState[n];break;case"Default":this[n]=STYLES[n].canvas;break;case"Get":styleState[n]=this[n];break;default:console.log("failed")}}j&&(x.input.value=j.email,x.textarea.value=j.message),x.form.addEventListener("input",e(t)((function(){var e={email:x.input.value,message:x.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),x.form.addEventListener("submit",(function(e){if(e.preventDefault(),x.input.value&&x.textarea.value){var t={email:x.input.value,message:x.textarea.value};console.log(t),x.form.reset(),localStorage.removeItem("feedback-form-state")}else alert("Увага! Всі поля форми мають бути заповнені!")})),ctx.prototype.__applyStyleState=function(e){O("Apply",Object.keys(e),undefined,undefined)},ctx.prototype.__setDefaultStyles=function(){O("Default",Object.keys(STYLES),undefined,undefined)},ctx.prototype.__getStyleState=function(){return O("Get",Object.keys(STYLES),undefined,undefined),{}}}();
//# sourceMappingURL=03-feedback.915b6a19.js.map
