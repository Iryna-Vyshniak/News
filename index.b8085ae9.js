const n=document.querySelector("[data-list]"),e=e=>{const t=(n=>null==n?void 0:n.reduce(((n,e)=>n+(({creator:n,title:e,pubDate:t,content:a,link:c,keywords:s,source_id:r,description:l})=>`\n<li class="news__card--main card--main stacked featured">\n<div class="card__category-data">\n<span class="card__category">${s}</span>\n<span class="card__date">${t}</span>\n</div>\n <div class="card__content-wrapper">\n  <h2 class="card__title">${e}</h2>\n ${l?`<p class="card__descr">${l}</p>`:""}\n <div class="content-wrapper">\n ${a?`<p class="card__content">${a}</p>`:""}\n </div>\n <div class="card__link-border">\n <a class="card__link" href="${c}" target="_blank">Read more</a>\n </div>\n<div class="card__category-info">\n${n?`<p class="card__author">${n}</p>`:""}\n<p class="card__source">${r}</p>\n</div>\n  </div>\n</li>\n`)(e)),""))(e);n.innerHTML=t};function t({image_url:n,creator:e,title:t,pubDate:a,content:c,link:s,keywords:r,source_id:l,description:o}){return`\n<li class="news__card--main card--main stacked featured">\n      <div class="card__category-data">\n        <span class="card__category">${r[0]}</span>\n        <span class="card__date">${a}</span>\n      </div>\n      ${n?`\n      <div class="card__image">\n        <img src="${n}" alt="${r}" loading="lazy" />\n      </div>`:""}\n      <div class="card__content-wrapper">\n        <h2 class="card__title">${t}</h2>\n        ${o?`<p class="card__descr">${o}</p>`:""}\n        <div class="content-wrapper">\n          ${c?`<p class="card__content">${c}</p>`:""}\n        </div>\n        <div class="card__link-border">\n          <a class="card__link" href="${s}" target="_blank">Read more</a>\n        </div>\n        <div class="card__category-info">\n          ${e?`<p class="card__author">${e}</p>`:""} \n          ${l?`<p class="card__source">${l}</p>`:""}\n        </div>\n      </div>\n    </li>\n`}const a=document.querySelector("[data-list]");console.log(a);const c=document.querySelector("#form");function s(n){console.log(n)}c.addEventListener("submit",(function(n){n.preventDefault();const e=n.currentTarget.elements.news.value.trim();console.log(e),(r=e,fetch(`https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&category=top,politics,world,environment,entertainment&language=uk,en&q=${r}`).then((n=>n.json()))).then((({results:n})=>{if(console.log(n.length),0===n.length)throw new Error("Not articles found");return n.reduce(((n,e)=>n+t(e)),"")})).then((n=>{console.log(n),a.innerHTML=n})).catch(s).finally((()=>{const n=document.querySelectorAll(".card__content");parseInt(window.getComputedStyle(n[0]).lineHeight);n.forEach((n=>{const e=n.innerText;e.length>800&&n.classList.add("long-text");if(Math.ceil(n.clientHeight/parseInt(window.getComputedStyle(n).lineHeight))>20){const t=800,a="...";if(e.length>t){const c=e.substring(0,t).replace(/(\.|!|\?)\s/g,"$1"+a+" ");n.innerText=c+a}}})),c.reset()}));var r})),fetch("https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&country=ua&category=top&language=uk").then((n=>n.json())).then((({results:n})=>{console.log(n),e(n)})).catch(s).finally((()=>{const n=document.querySelectorAll(".card__content");parseInt(window.getComputedStyle(n[0]).lineHeight);n.forEach((n=>{const e=n.innerText;e.length>800&&n.classList.add("long-text");if(Math.ceil(n.clientHeight/parseInt(window.getComputedStyle(n).lineHeight))>20){const t=800,a="...";if(e.length>t){const c=e.substring(0,t).replace(/(\.|!|\?)\s/g,"$1"+a+" ");n.innerText=c+a}}}))}));
//# sourceMappingURL=index.b8085ae9.js.map
