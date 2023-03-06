var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==t&&t,e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,s="ArrayBuffer"in t;if(s)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&i.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function p(t){var e=new FileReader,r=f(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var r;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&n&&((r=t)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=u(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(p)}),this.text=function(){var t,e,r,n=u(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=f(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=h(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),m.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},b.call(_.prototype),b.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];v.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var T=t.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function A(e,r){return new Promise((function(o,i){var a=new _(e,r);if(a.signal&&a.signal.aborted)return i(new T("Aborted","AbortError"));var c=new XMLHttpRequest;function d(){c.abort()}c.onload=function(){var t,e,r={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in c?c.responseURL:r.headers.get("X-Request-URL");var n="response"in c?c.response:c.responseText;setTimeout((function(){o(new v(n,r))}),0)},c.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.onabort=function(){setTimeout((function(){i(new T("Aborted","AbortError"))}),0)},c.open(a.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&(n?c.responseType="blob":s&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(c.responseType="arraybuffer")),!r||"object"!=typeof r.headers||r.headers instanceof l?a.headers.forEach((function(t,e){c.setRequestHeader(e,t)})):Object.getOwnPropertyNames(r.headers).forEach((function(t){c.setRequestHeader(t,h(r.headers[t]))})),a.signal&&(a.signal.addEventListener("abort",d),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",d)}),c.send(void 0===a._bodyInit?null:a._bodyInit)}))}function E(t){fetch(`https://pixabay.com/api/?key=28194821-49041d995ecd04735d9e20d11&q=${t}&image_type=photo`).then((t=>t.json())).then((t=>{console.log("data",t);const e=document.querySelectorAll(".card__image");for(const s of e){var r,n;s.src=null!==(n=null===(r=t.hits[(o=t.hits.length,Math.floor(Math.random()*o))])||void 0===r?void 0:r.largeImageURL)&&void 0!==n?n:"https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881",console.log(s.src)}var o}))}A.polyfill=!0,t.fetch||(t.fetch=A,t.Headers=l,t.Request=_,t.Response=v),self.fetch.bind(self),console.log("2023-03-05T19:05:00Z".split("T").join(" ").slice(0,-4));const B=document.querySelector("[data-list]"),j=document.querySelector("#form");function x(t){console.log(t)}j.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.news.value.trim();console.log(E(e)),(r=e,fetch(`https://newsapi.org/v2/everything?apiKey=1572576c777b4bada530e28e03640c11&q=${r}&searchIn=title&from=2023-03-04&to=2023-03-05&language=en&sortBy=popularity&pageSize=24`).then((t=>t.json()))).then((({articles:t})=>{if(0===t.length)throw new Error("No articles");return t.reduce(((t,e)=>t+function({author:t,title:e,publishedAt:r,urlToImage:n,description:o,url:s,source:{id:i,name:a}}){const c=j.elements.news.value.trim();return`\n<li class="news__card card stacked featured">\n<div class="card__category-data">\n<span class="card__category">${a}</span>\n<span class="card__date">${r.split("T").join(" ").slice(0,-4)}</span>\n</div>\n\n     ${n?`<div class="card__image"> <img src="${n}" alt="${i}" loading="lazy"></div>`:`<div class="card__image"> <img src="${E(c)}" alt="${i}" loading="lazy"></div>`}\n \n <div class="card__content">\n  <h2 class="card__title">${e}</h2>\n ${o?`<p class="card__desc">${o}</p>`:""}\n<p class="card__author">${null!=t?t:"Anonymous"}</p>\n  <a class="card__link" href="${s}" target="_blank">Read more</a>\n  </div>\n</li>\n`}(e)),"")})).then((t=>B.innerHTML=t)).catch(x).finally((()=>j.reset()));var r}));fetch("https://newsapi.org/v2/top-headlines?country=ua&pageSize=20",{headers:{"X-Api-Key":"1572576c777b4bada530e28e03640c11"}}).then((t=>t.json())).then((({articles:t})=>{console.log(t),O(t)})).catch((t=>console.error(t)));const O=t=>{const e=(t=>null==t?void 0:t.reduce(((t,e)=>t+(({author:t,title:e,publishedAt:r,description:n,url:o,source:{id:s,name:i}})=>`\n<li class="news__card--main card--main stacked featured">\n<div class="card__category-data">\n<span class="card__category">${i}</span>\n<span class="card__date">${r.split("T").join(" ").slice(0,-4)}</span>\n</div>\n <div class="card__content">\n  <h2 class="card__title">${e}</h2>\n ${n?`<p class="card__desc">${n}</p>`:""}\n<p class="card__author">${null!=t?t:"Anonymous"}</p>\n  <a class="card__link" href="${o}" target="_blank">Read more</a>\n  </div>\n</li>\n`)(e)),""))(t);B.innerHTML=e};
//# sourceMappingURL=index.3eae7fd7.js.map
