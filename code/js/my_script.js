const styles=document.querySelector(".styles");
const contain=document.querySelector(".contain");
const projects=[
{
   image:"calculator_image",
   text:"A calculator built with javaScript and python",
   link:"https://timothynwokeji.pythonanywhere.com/",
   repo: "https://github.com/DARQ-Envoy/Calculator-js",
},
{
   image:"countdown_timer",
   text:"A countdown timer built with React",
   link:"https://darq-envoy.github.io/Countdown-timer/",
  repo: "https://github.com/DARQ-Envoy/Countdown-timer",
},
{
   image:"9jaGames",
   text:"A fully functional webpage",
   link:"https://darq-envoy.github.io/9jia-games-landing-page/",
  repo: "https://github.com/DARQ-Envoy/9jia-games-landing-page",
},
{
   image:"MetaFetch_Convert",
   text:"The Convert File Page for MetaFetch",
   link:"https://darq-envoy.github.io/Metafetch_Convert_Page/",
  repo: "https://github.com/DARQ-Envoy/Metafetch_Convert_Page",
},
{
   image:"desktop-screenshot",
   text:"Easybank Landing Page",
   link:"https://darq-envoy.github.io/Easy-bank/",
  repo: "https://github.com/DARQ-Envoy/Easy-bank",
}, 
{
   image:"Creatives_page",
   text:"Sunnyside Landing Page",
   link:"https://darq-envoy.github.io/Sunny_side_Landing_page/",
  repo: "https://github.com/DARQ-Envoy/Sunny_side_Landing_page",
},
{
      image:"E-commerce_Page",
      text:"A Functional E-commerce Webpage",
      link:"https://darq-envoy.github.io/e_commerce_webpage/",
     repo: "https://github.com/DARQ-Envoy/e_commerce_webpage",
  },
{
   image:"huddle_landing_page",
   text:"Huddle Landing Page",
   link:"https://darq-envoy.github.io/Huddle-Home-page/",
  repo: "https://github.com/DARQ-Envoy/Huddle-Home-page",
},
{
    image:"Social_Page",
    text:"Social Media Dashboard",
    link:"https://darq-envoy.github.io/Social_Media_Dashboard/",
   repo: "https://github.com/DARQ-Envoy/Social_Media_Dashboard",
}

]
projects.forEach(work=>{
const mySpan=document.createElement('span');
mySpan.classList.add('styles');
mySpan.innerHTML=`<a href="${work.repo}" target="_blank"><img src="img/${work.image}.png" alt="${work.image} image" class="mine own" /></a> <a href="${work.link}" target="_blank"><h3 class="des">${work.text}</h3></a>`
contain.appendChild(mySpan)
})
