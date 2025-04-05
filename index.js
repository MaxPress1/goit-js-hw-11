import{S as c,a as l,i as u}from"./assets/vendor-DtOuICiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=document.querySelector(".gallery");function f(e){const r=e.map(s=>`
    <li>
        <div class="gallery">
            <a href="${s.largeImageURL}"><img src="${s.webformatURL}" alt="${s.tags}"/></a>
            <div>
            <p>Likes:${s.likes} </p>
            <p>Views:${s.views}</p>
            <p>Comments:${s.comments}</p>
            <p>Downloads:${s.downloads}</p>
            </div>
        </div>
    </li>
    `).join("");d.innerHTML=r,new c(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh()}function m(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function y(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}const a=document.querySelector("form");document.querySelector(".loader");const h="49649405-8aeb588384e19e05040c9b75c";l.defaults.baseURL="https://pixabay.com/api/";a.addEventListener("submit",g);function g(e){if(e.preventDefault(),!a.elements["search-text"].value)return;const r=a.elements["search-text"].value;L(r)}function L(e){p(),l({params:{key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>{if(r.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");f(r.data.hits)}).catch(r=>u.error({message:r.message,position:"topRight"}),m()).finally(y())}
//# sourceMappingURL=index.js.map
