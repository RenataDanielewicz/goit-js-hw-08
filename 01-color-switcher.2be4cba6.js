const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d;function o(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}r.setAttribute("disabled",""),e.addEventListener("click",(()=>{e.setAttribute("disabled",""),r.removeAttribute("disabled"),d=setInterval(o,1e3)})),r.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.2be4cba6.js.map