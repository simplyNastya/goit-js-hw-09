!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function r(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}e.setAttribute("disabled",""),t.addEventListener("click",(function(){return r()})),e.addEventListener("click",(function(){return t.removeAttribute("disabled"),e.setAttribute("disabled",""),void clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.e86c0a3f.js.map
