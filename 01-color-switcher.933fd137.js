const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o={timerId:null,isActive:!1,changeColor(){this.isActive||(this.timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1)},stopChangeColor(){clearInterval(this.timerId),t.disabled=!1,e.disabled=!0}};t.addEventListener("click",(()=>{o.changeColor()})),e.addEventListener("click",(()=>{o.stopChangeColor()}));
//# sourceMappingURL=01-color-switcher.933fd137.js.map