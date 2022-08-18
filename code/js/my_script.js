const styles=document.querySelector(".styles");
const contain=document.querySelector(".contain");
const projects=[
       {
    image:"desktop-screenshot",
    text:"Easybank Landing Page",
    link:"https://darq-envoy.github.io/Easy-bank/",
   repo: "https://github.com/DARQ-Envoy/Easy-bank",
}, 
{
    image:"time-tracking-dashboard",
    text:"A Time Tracking Dashboard",
    link:"https://darq-envoy.github.io/Time-Tracking-Dashboard/",
   repo: "https://github.com/DARQ-Envoy/Time-Tracking-Dashboard",
},
{
    image:"Search-Filter",
    text:"A User Search-Filter",
    link:"https://darq-envoy.github.io/search-filter/",
   repo: "https://github.com/DARQ-Envoy/search-filter",
}
,
 {
    image:"interactive-comment",
    text:"Interactive comments UI",
    link:"https://darq-envoy.github.io/interactive-comment/",
   repo: "https://github.com/DARQ-Envoy/interactive-comment",
},
{
    image:"interactive-pricing",
    text:"Interactive-pricing UI",
    link:"https://darq-envoy.github.io/interactive-pricing/",
   repo: "https://github.com/DARQ-Envoy/interactive-pricing",
} 
]
projects.forEach(work=>{
const mySpan=document.createElement('span');
mySpan.classList.add('styles');
mySpan.innerHTML=`<a href="${work.repo}" target="_blank"><img src="img/${work.image}.png" alt="${work.image} image" class="mine own" /></a> <a href="${work.link}" target="_blank"><h3 class="des">${work.text}</h3></a>`
contain.appendChild(mySpan)
})
