import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbSUbo7J.js";const o=document.querySelector("button"),d=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");o.disabled=!0;let i=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];if(console.log(t),t.getTime()<Date.now()){o.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future"});return}o.disabled=!1,i=t}};let u=0;o.addEventListener("click",()=>{o.disabled=!0,d.disabled=!0,u=setInterval(()=>{const e=i.getTime()-Date.now();if(e<=0){d.disabled=!1,clearInterval(u);return}const{days:t,hours:s,minutes:a,seconds:c}=r(e);S.textContent=n(t),b.textContent=n(s),g.textContent=n(a),q.textContent=n(c)},1e3)});function n(e){return e.toString().padStart(2,"0")}y("#datetime-picker",D);function r(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=1-timer.js.map
