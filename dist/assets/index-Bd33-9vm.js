(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const u=()=>`
  <div class="imgContainer"> <img src="https://cdn.icon-icons.com/icons2/2044/PNG/512/pinterest_logo_icon_124347.png" alt="Pinterest Logo" />
  <h1>Inspirest</h1>
  </div>
  <div class="searchContainer">
    <input type="text" id="searchBox" placeholder="Encuentra ideas sobre moda, cenas, fotografía,etc." />
    <button id="searchButton">Buscar</button>
  </div>
`,d=()=>{document.querySelector("header").innerHTML=u()},l=()=>`
  <div id="infoMessage"></div>
  <div id="imageGallery" class="gallery"></div>
  <div id="extraSuggestions"></div>
  <div id="paginationContainer"></div>
`,g=()=>{const e=document.querySelector("main");e.innerHTML=l()},p=()=>`<p>© ${new Date().getFullYear()} - Inspirado en Pinterest</p>`,m=()=>{const e=document.querySelector("footer");e.innerHTML=p()},f="Znc86gkmwpAZ4jDt5CeLwbOmijOTuXyr1dDa5FPeL8E",h="https://api.unsplash.com/search/photos",y=async(e,n=1)=>{try{const o=await fetch(`${h}?query=${e}&per_page=15&page=${n}&client_id=${f}`),{results:i}=await o.json();return i}catch(o){return console.error("Error fetching photos:",o),[]}};let s=1;const v=()=>{d(),g(),m(),c("nature",s)},c=async(e,n=1)=>{console.log(`Buscando fotos con el término: "${e}" en la página: ${n}`);const o=await y(e,n);L(o,e)},L=(e,n)=>{const o=document.querySelector("#imageGallery"),i=document.querySelector("#infoMessage");e.length===0?(o.innerHTML="",i.textContent="No se encontraron imágenes. ¿Quieres probar con estas opciones?",S()):(i.textContent="",o.innerHTML=e.map(t=>`<img src="${t.urls.small}" alt="${t.alt_description}" />`).join(""),P(n))},P=e=>{const n=document.querySelector("#paginationContainer");n.innerHTML=`
    <button id="prevPageButton" ${s===1?"disabled":""}>Atrás</button>
    <span>Página ${s}</span>
    <button id="nextPageButton">Siguiente</button>
  `,document.querySelector("#prevPageButton").addEventListener("click",()=>{s>1&&(s--,c(e,s))}),document.querySelector("#nextPageButton").addEventListener("click",()=>{s++,c(e,s)})},S=()=>{const e=["Moda","Animales","Paisajes"],n=document.querySelector("#extraSuggestions");n.innerHTML=e.map(o=>`<button class="suggestionBtn">${o}</button>`).join(""),document.querySelectorAll(".suggestionBtn").forEach((o,i)=>{o.addEventListener("click",()=>{s=1,c(e[i])})})};document.addEventListener("DOMContentLoaded",()=>{v();const e=document.querySelector("#searchButton"),n=document.querySelector("#searchBox");e.addEventListener("click",()=>{const o=n.value.trim();o?(s=1,c(o),n.value=""):console.log("Por favor ingresa un término de búsqueda.")})});
