import{a as l,S as c,i as u}from"./assets/vendor-BfjKTZs6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const f="49649405-8aeb588384e19e05040c9b75c";l.defaults.baseURL="https://pixabay.com/api/";function p(e){return l({params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const d=document.querySelector(".gallery"),m=new c(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function y(e){const s=e.map(r=>`
    <li>
            <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}"/>
            </a>
            <div class="gallery-info">
            <p><span>Likes</span>${r.likes} </p>
            <p><span>Views</span>${r.views}</p>
            <p><span>Comments</span>${r.comments}</p>
            <p><span>Downloads</span>${r.downloads}</p>
            </div>
    </li>
    `).join("");d.innerHTML=s,m.refresh()}function h(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function L(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}const i=document.querySelector("form");i.addEventListener("submit",b);function b(e){if(e.preventDefault(),g(),!i.elements["search-text"].value)return;const s=i.elements["search-text"].value.trim();h(),p(s).then(r=>{const n=r.data.hits;if(n.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");y(n)}).catch(r=>{u.error({message:r.message,position:"topRight"})}).finally(()=>L())}
//# sourceMappingURL=index.js.map
