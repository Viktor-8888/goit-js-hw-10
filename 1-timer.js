import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,u as y,i as g}from"./assets/vendor-5IiIBpZC.js";const o=document.querySelector("button"),i=document.querySelector("#datetime-picker"),b=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");o.disabled=!0;let u=null;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:y.Ukrainian,onClose(e){const t=e[0];if(console.log(t),t.getTime()<Date.now()){o.disabled=!0,g.error({class:"box",title:"Error",message:"Please choose a date in the future",position:"topCenter",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",titleColor:"#fff"});return}o.disabled=!1,u=t}};let l=0;o.addEventListener("click",()=>{o.disabled=!0,i.disabled=!0,l=setInterval(()=>{const e=u.getTime()-Date.now();if(e<=0){i.disabled=!1,clearInterval(l);return}const{days:t,hours:r,minutes:a,seconds:c}=s(e);b.textContent=n(t),S.textContent=n(r),C.textContent=n(a),k.textContent=n(c)},1e3)});function n(e){return e.toString().padStart(2,"0")}h("#datetime-picker",x);function s(e){const d=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:m,minutes:f,seconds:p}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=1-timer.js.map
