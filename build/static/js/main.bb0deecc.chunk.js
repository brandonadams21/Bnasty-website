(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=a(6);a(25);var i=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("a",{href:"#top",onClick:o,src:"images/BA.png"},r.a.createElement("img",{className:"logo",src:"BA.png",alt:"Logo",style:{width:"60px",paddingTop:"17px"}})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#projects",className:"nav-links","data-text":"Projects",onClick:o},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#aboutMe",className:"nav-links","data-text":"About",onClick:o},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#contact",className:"nav-links","data-text":"Contact",onClick:o},"Contact")),r.a.createElement("li",null)))))},s=(a(8),a(11));a(26);var m=function(){var e=Object(n.useState)([{id:1,flipped:!1,title:"Blog Project",description:"BlogSpace is a dynamic and responsive blogging platform that showcases my proficiency in web development with technologies such as React, HTML, JavaScript, and CSS. The integration of graphCMS enables efficient content management and enhances the platform's user experience, making it a valuable addition to my software engineering portfolio.",sourceLink:"https://github.com/brandonadams21/blog/tree/main/blogger",previewImage:"images/blogPhoto.png"},{id:2,flipped:!1,title:"FreedomTAK",description:"As a Software Engineer, I had the privilege of working with Carter Jackson, a talented engineer at VK Integrated Systems, on the After Action Review Tool known as MARS. Leveraging my expertise in PHP, Laravel, CSS, and HTML, I collaborated with Carter to redesign and build this tool from the ground up. Together, we created an intuitive and efficient platform that enables users to easily review and analyze their performance, ultimately enhancing their decision-making and operational effectiveness.",sourceLink:"https://freedomTak.com",previewImage:"images/freedomTak.png"}]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e){var t=a.map(function(t){return t.id===e?Object(s.a)({},t,{flipped:!t.flipped}):t});c(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"projects"},r.a.createElement("h1",{className:"projectHeader"},"Projects"),r.a.createElement("div",{className:"cardGrid"},a.map(function(e){return r.a.createElement("div",{className:"card ".concat(e.flipped?"flipped":""),key:e.id},r.a.createElement("div",{className:"front"},r.a.createElement("h2",{className:"cardHeader"},e.title),r.a.createElement("img",{className:"blogImg",src:e.previewImage}),r.a.createElement("a",{className:"sourceTag",target:"_blank",href:e.sourceLink},"Source"),r.a.createElement("a",{className:"descriptionTag",href:"#flip",onClick:function(){return o(e.id)}},"Description")),r.a.createElement("div",{className:"back"},r.a.createElement("h2",{className:"cardHeader"},"About this project"),r.a.createElement("p",{className:"pTag"},e.description),r.a.createElement("a",{className:"backTag",href:"#flip",onClick:function(){return o(e.id)}},"Back")))}))))};a(27);var u=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("h1",null,r.a.createElement("p",{style:{height:"60px",paddingTop:"40px"}},r.a.createElement("span",{class:"text"},"H"),r.a.createElement("span",{class:"text"},"e"),r.a.createElement("span",{class:"text"},"y"),r.a.createElement("span",{class:"text"},",")),r.a.createElement("p",{style:{paddingTop:"50px"}},r.a.createElement("span",{class:"text"},"I"),r.a.createElement("span",{class:"text"},"'"),r.a.createElement("span",{class:"text"},"m"),r.a.createElement("span",{class:"text",style:{marginLeft:"15px"}},"Brandon")),r.a.createElement("p",{style:{height:"60px",paddingTop:"20px"}},r.a.createElement("span",{class:"text"},"F"),r.a.createElement("span",{class:"text"},"u"),r.a.createElement("span",{class:"text"},"l"),r.a.createElement("span",{class:"text"},"l"),r.a.createElement("span",{class:"text"},"s"),r.a.createElement("span",{class:"text"},"t"),r.a.createElement("span",{class:"text"},"a"),r.a.createElement("span",{class:"text"},"c"),r.a.createElement("span",{class:"text"},"k")),r.a.createElement("p",{style:{height:"200px",paddingTop:"15px"}},r.a.createElement("span",{class:"text"},"D"),r.a.createElement("span",{class:"text"},"e"),r.a.createElement("span",{class:"text"},"v"),r.a.createElement("span",{class:"text"},"e"),r.a.createElement("span",{class:"text"},"l"),r.a.createElement("span",{class:"text"},"o"),r.a.createElement("span",{class:"text"},"p"),r.a.createElement("span",{class:"text"},"e"),r.a.createElement("span",{class:"text"},"r")),r.a.createElement("a",{href:"#contact",className:"text"},"Contact me!")),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{class:"social-icon-link linkedin",target:"_blank",href:"https://www.linkedin.com/in/brandon-adams-93966b239",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{}},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",{class:"social-icon-link linkedin",target:"_blank",href:"https://github.com/brandonadams21",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{marginLeft:"14px"}},r.a.createElement("i",{class:"fab fa-github"}))))},p=(a(28),a(9));var f=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("div",{className:"input-areas"})),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"})),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"}))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(p.b,{to:"/",className:"social-logo"},r.a.createElement("img",{src:"BA.png",alt:"Footer Logo",style:{width:"80px",height:"80px"}}))),r.a.createElement("div",{class:"website-rights"},"\xa9 Brandon Adams 2022"),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{class:"social-icon-link linkedin",target:"_blank",href:"https://www.linkedin.com/in/brandon-adams-93966b239",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{}},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",{class:"social-icon-link linkedin",target:"_blank",href:"https://github.com/brandonadams21",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{marginLeft:"14px"}},r.a.createElement("i",{class:"fab fa-github"}))))))};a(36);var d=function(){return r.a.createElement("div",{className:"about",id:"aboutMe"},r.a.createElement("h1",{className:"aboutHeader"},"About me"),r.a.createElement("p",{class:"aboutParagraph",style:{paddingTop:"10px"}},"Full stack developer. From Michigan, based in Tennessee."),r.a.createElement("div",{class:"experience-grid"},r.a.createElement("h2",{class:"experienceHeader"},"Experience"),r.a.createElement("p",{class:"aboutParagraph"},"United States Army Infantry"),r.a.createElement("a",{class:"aboutParagraph"},"July 2019 - April 2022"),r.a.createElement("p",{class:"aboutParagraph"},"Joint Special Operations Command"),r.a.createElement("a",null,"April 2022 - October 2022"),r.a.createElement("p",{class:"aboutParagraph"},"Freelancer"),r.a.createElement("a",null,"October 2022 - January 2023"),r.a.createElement("p",{class:"aboutParagraph"},"Internship at VKIS"),r.a.createElement("a",null,"January 2023 - Current")),r.a.createElement("h2",{className:"educationHeader",style:{paddingTop:"50px"}},"Education"),r.a.createElement("p",{class:"aboutParagraph",style:{paddingTop:"10px"}},"Galvanize Software Development Immersive Course"),r.a.createElement("p",{class:"aboutParagraph",style:{paddingTop:"10px"}},"Universty of Penn State 2022-Current"))},h=a(18),g=(a(37),a(19)),E=a.n(g);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(O){i=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var c=t&&t.prototype instanceof p?t:p,o=Object.create(c.prototype),l=new j(r||[]);return n(o,"_invoke",{value:w(e,a,l)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var u={};function p(){}function f(){}function d(){}var h={};i(h,c,function(){return this});var g=Object.getPrototypeOf,E=g&&g(g(T([])));E&&E!==t&&a.call(E,c)&&(h=E);var y=d.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;n(this,"_invoke",{value:function(n,c){function o(){return new t(function(r,o){!function n(r,c,o,l){var i=m(e[r],e,c);if("throw"!==i.type){var s=i.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,o,l)},function(e){n("throw",e,o,l)}):t.resolve(u).then(function(e){s.value=e,o(s)},function(e){return n("throw",e,o,l)})}l(i.arg)}(n,c,r,o)})}return r=r?r.then(o,o):o()}})}function w(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return S()}for(a.method=r,a.arg=c;;){var o=a.delegate;if(o){var l=k(o,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=m(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function k(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var c=r.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=i(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(x.prototype),i(x.prototype,o,function(){return this}),e.AsyncIterator=x,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var o=new x(s(t,a,n,r),c);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},b(y),i(y,l,"Generator"),i(y,c,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var l=a.call(c,"catchLoc"),i=a.call(c,"finallyLoc");if(l&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:T(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}function y(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],u=i[1],p=function(e){var t=Object(s.a)({},a);t[e.target.name]=e.target.value,c(t)},f=function(){var e=Object(h.a)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{new E.a({apiKey:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_AIRTABLE_API_KEY)}).base("appi3ey74toVdwQ6Q")("Teams").create([{fields:{name:a.name,message:a.message,email:a.email}}],function(e,t){e?console.error(e):t.forEach(function(e){})}),u("Success")}catch(n){console.error("Error:",n),u("Error")}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return""!==m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"thanksmsg",style:{color:"white",textAlign:"center",fontSize:"30px",paddingTop:"200px"}},"Thank you!"),r.a.createElement("div",{className:"beInTouch",style:{color:"white",textAlign:"center",fontSize:"30px"}},"I'll be in touch soon.")):r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"contact",className:"contactHeader"},"Let's get in touch!"),r.a.createElement("div",{class:"contain"},r.a.createElement("div",{class:"wrapper"},r.a.createElement("div",{class:"contacts"},r.a.createElement("ul",null,r.a.createElement("li",null,"I am interested in job opportunites, freelance, and networking."))),r.a.createElement("form",{className:"input-form",id:"contact",name:"contact",required:!0,onSubmit:f},r.a.createElement("p",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",required:!0,onChange:p})),r.a.createElement("p",null,r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,onChange:p})),r.a.createElement("p",{class:"full-width"},r.a.createElement("textarea",{name:"message",placeholder:"Message",onChange:p,cols:"30",rows:"7"})),r.a.createElement("p",{class:"full-width"},r.a.createElement("button",{type:"submit",className:"msgBtn"},"Send a message"),m)))))}var b=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(d,null),r.a.createElement(y,null),r.a.createElement(f,null))},x=a(1);function w(){return r.a.createElement("h1",{className:"blog"},"Blog coming soon")}var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(i,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",exact:!0,component:b}),r.a.createElement(x.a,{path:"/blog",component:w}))))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.bb0deecc.chunk.js.map