const e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");let d;t.addEventListener("click",(function(r){r.currentTarget===r.target&&(a.disabled=!1,t.disabled=!0);d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),a.addEventListener("click",(function(){clearInterval(d),a.disabled=!0,t.disabled=!1})),a.disabled=!0;
//# sourceMappingURL=01-color-switcher.f3d8dcd5.js.map
