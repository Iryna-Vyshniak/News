!function(){var n=document.querySelector("[data-list]");function c(n){var c=n.image_url,t=n.creator,a=n.title,e=n.pubDate,r=n.content,o=n.link,s=n.keywords,i=n.source_id,l=n.description;return'\n<li class="news__card--main card--main stacked featured">\n      <div class="card__category-data">\n        <span class="card__category">'.concat(s[0],'</span>\n        <span class="card__date">').concat(e,"</span>\n      </div>\n      ").concat(c?'\n      <div class="card__image">\n        <img src="'.concat(c,'" alt="').concat(s,'" loading="lazy" />\n      </div>'):"",'\n      <div class="card__content-wrapper">\n        <h2 class="card__title">').concat(a,"</h2>\n        ").concat(l?'<p class="card__descr">'.concat(l,"</p>"):"",'\n        <div class="content-wrapper">\n          ').concat(r?'<p class="card__content">'.concat(r,"</p>"):"",'\n        </div>\n        <div class="card__link-border">\n          <a class="card__link" href="').concat(o,'" target="_blank">Read more</a>\n        </div>\n        <div class="card__category-info">\n          ').concat(t?'<p class="card__author">'.concat(t,"</p>"):""," \n          ").concat(i?'<p class="card__source">'.concat(i,"</p>"):"","\n        </div>\n      </div>\n    </li>\n")}var t=document.querySelector("[data-list]");console.log(t);var a=document.querySelector("#form");function e(n){console.log(n)}a.addEventListener("submit",(function(n){n.preventDefault();var r=n.currentTarget.elements.news.value.trim();console.log(r),(o=r,s="https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&category=top,politics,world,environment,entertainment&language=uk,en&q=".concat(o),fetch(s).then((function(n){return n.json()}))).then((function(n){var t=n.results;if(console.log(t.length),0===t.length)throw new Error("Not articles found");return t.reduce((function(n,t){return n+c(t)}),"")})).then((function(n){console.log(n),t.innerHTML=n})).catch(e).finally((function(){var n=document.querySelectorAll(".card__content");parseInt(window.getComputedStyle(n[0]).lineHeight);n.forEach((function(n){var c=n.innerText;if(c.length>800&&n.classList.add("long-text"),Math.ceil(n.clientHeight/parseInt(window.getComputedStyle(n).lineHeight))>20){if(c.length>800){var t=c.substring(0,800).replace(/(\.|!|\?)\s/g,"$1... ");n.innerText=t+"..."}}})),a.reset()}));var o,s})),fetch("https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&country=ua&category=top&language=uk").then((function(n){return n.json()})).then((function(c){var t,a=c.results;console.log(a),t=function(n){return null==n?void 0:n.reduce((function(n,c){return n+(a=(t=c).creator,e=t.title,r=t.pubDate,o=t.content,s=t.link,i=t.keywords,l=t.source_id,d=t.description,'\n<li class="news__card--main card--main stacked featured">\n<div class="card__category-data">\n<span class="card__category">'.concat(i,'</span>\n<span class="card__date">').concat(r,'</span>\n</div>\n <div class="card__content-wrapper">\n  <h2 class="card__title">').concat(e,"</h2>\n ").concat(d?'<p class="card__descr">'.concat(d,"</p>"):"",'\n <div class="content-wrapper">\n ').concat(o?'<p class="card__content">'.concat(o,"</p>"):"",'\n </div>\n <div class="card__link-border">\n <a class="card__link" href="').concat(s,'" target="_blank">Read more</a>\n </div>\n<div class="card__category-info">\n').concat(a?'<p class="card__author">'.concat(a,"</p>"):"",'\n<p class="card__source">').concat(l,"</p>\n</div>\n  </div>\n</li>\n"));var t,a,e,r,o,s,i,l,d}),"")}(a),n.innerHTML=t})).catch(e).finally((function(){var n=document.querySelectorAll(".card__content");parseInt(window.getComputedStyle(n[0]).lineHeight);n.forEach((function(n){var c=n.innerText;if(c.length>800&&n.classList.add("long-text"),Math.ceil(n.clientHeight/parseInt(window.getComputedStyle(n).lineHeight))>20){if(c.length>800){var t=c.substring(0,800).replace(/(\.|!|\?)\s/g,"$1... ");n.innerText=t+"..."}}}))}))}();
//# sourceMappingURL=index.5cdb32df.js.map
