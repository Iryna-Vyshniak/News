!function(){var n=document.querySelector("[data-list]");function a(n){var a=n.author,c=n.title,t=n.publishedAt,e=n.urlToImage,r=n.description,o=n.url,i=n.source,s=i.id,l=i.name;return'\n<li class="news__card card stacked featured">\n<div class="card__category-data">\n<span class="card__category">'.concat(l,'</span>\n<span class="card__date">').concat(t.split("T").join(" ").slice(0,-4),"</span>\n</div>\n     ").concat(e?'<div class="card__image"> <img src="'.concat(e,'" alt="').concat(s,'" loading="lazy"></div>'):'<div class="card__image"> <img src="'.concat("https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881",'" alt="').concat(s,'" loading="lazy"></div>'),'\n \n <div class="card__content">\n  <h2 class="card__title">').concat(c,"</h2>\n ").concat(r?'<p class="card__desc">'.concat(r,"</p>"):"",'\n<p class="card__author">').concat(null!=a?a:"Anonymous",'</p>\n  <a class="card__link" href="').concat(o,'" target="_blank">Read more</a>\n  </div>\n</li>\n')}var c=document.querySelector("[data-list]"),t=document.querySelector("#form");function e(n){console.log(n)}t.addEventListener("submit",(function(n){n.preventDefault(),(n.currentTarget.elements.news.value.trim(),fetch("https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&country=ua&category=top&language=uk").then((function(n){return n.json()}))).then((function(n){var c=n.articles;if(0===c.length)throw new Error("No articles");return c.reduce((function(n,c){return n+a(c)}),"")})).then((function(n){return c.innerHTML=n})).catch(e).finally((function(){return t.reset()})),console.log(document.querySelector("li:nth-child(3)"))})),fetch("https://newsdata.io/api/1/news?apikey=pub_18476a7917762b26ebbb61a44ce2bbbc974b2&country=ua&category=top&language=uk").then((function(n){return n.json()})).then((function(a){var c,t=a.results;console.log(t),c=function(n){return null==n?void 0:n.reduce((function(n,a){return n+(t=(c=a).creator,e=c.title,r=c.pubDate,o=c.content,i=c.link,s=c.keywords,l=c.source_id,d=c.description,'\n<li class="news__card--main card--main stacked featured">\n<div class="card__category-data">\n<span class="card__category">'.concat(s,'</span>\n<span class="card__date">').concat(r,'</span>\n</div>\n <div class="card__content-wrapper">\n  <h2 class="card__title">').concat(e,"</h2>\n ").concat(d?'<p class="card__descr">'.concat(d,"</p>"):"",'\n <div class="content-wrapper">\n ').concat(o?'<p class="card__content">'.concat(o,"</p>"):"",'\n </div>\n <div class="card__link-border">\n <a class="card__link" href="').concat(i,'" target="_blank">Read more</a>\n </div>\n<div class="card__category-info">\n').concat(t?'<p class="card__author">'.concat(t,"</p>"):"",'\n<p class="card__source">').concat(l,"</p>\n</div>\n  </div>\n</li>\n"));var c,t,e,r,o,i,s,l,d}),"")}(t),n.innerHTML=c})).catch(e).finally((function(){var n=document.querySelectorAll(".card__content");parseInt(window.getComputedStyle(n[0]).lineHeight);n.forEach((function(n){var a=n.innerText;if(a.length>350&&n.classList.add("long-text"),Math.ceil(n.clientHeight/parseInt(window.getComputedStyle(n).lineHeight))>20){if(a.length>350){var c=a.substring(0,350).replace(/(\.|!|\?)\s/g,"$1... ");n.innerText=c+"..."}}}))}))}();
//# sourceMappingURL=index.1ab34eb1.js.map
