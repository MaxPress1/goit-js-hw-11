import{S as c,a as l,i as u}from"./assets/vendor-DtOuICiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const f=document.querySelector(".gallery");function p(e){const r=e.map(s=>`
    <li>
            <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}"/>
            </a>
            <div class="gallery-info">
            <p><span>Likes</span>${s.likes} </p>
            <p><span>Views</span>${s.views}</p>
            <p><span>Comments</span>${s.comments}</p>
            <p><span>Downloads</span>${s.downloads}</p>
            </div>
    </li>
    `).join("");f.innerHTML=r,new c(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh()}function d(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function m(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function y(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}const h="49649405-8aeb588384e19e05040c9b75c";l.defaults.baseURL="https://pixabay.com/api/";function g(e){m(),l({params:{key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>{const n=r.data.hits;if(n.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");p(n)}).catch(r=>{u.error({message:r.message,position:"topRight"})}).finally(()=>y())}const i=document.querySelector("form");i.addEventListener("submit",L);function L(e){if(e.preventDefault(),!i.elements["search-text"].value)return;const r=i.elements["search-text"].value.trim();d(),g(r)}
//# sourceMappingURL=index.js.map
