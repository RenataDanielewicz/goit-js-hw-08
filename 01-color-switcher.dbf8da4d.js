document.querySelector("body");const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d;e.setAttribute("disabled",""),t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),d=setInterval(updateColor,1e3)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.dbf8da4d.js.map
