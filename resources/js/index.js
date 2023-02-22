let projectArray = document.querySelectorAll(".project");
let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json()).then((res) => {
    projectArray[0].querySelector("h3").innerText = res[0].title;
    projectArray[0].querySelector("p").innerText = res[0].body;
    projectArray[0].querySelector("a").href = "./project.html?slug=" + slugify( res[0].title);

    projectArray[1].querySelector("h3").innerText = res[1].title;
    projectArray[1].querySelector("p").innerText = res[1].body;
    projectArray[1].querySelector("a").href = "./project.html?slug=" + slugify(res[1].title);

    projectArray[2].querySelector("h3").innerText = res[2].title;
    projectArray[2].querySelector("p").innerText = res[2].body;
    projectArray[2].querySelector("a").href = "./project.html?slug=" + slugify(res[2].title);

}).catch((err) => console.log(err))

let scrollBtn = document.querySelector(".scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollBtn.addEventListener("click", scrollToTop);

let scrollToProject = document.querySelector(".scrollToProject");
let scrollToProjectHam = document.querySelector(".ham-scroll-project");
let elementToScroll = document.querySelector(".projects")

const scrollToProjectFunction = () => {
    elementToScroll.scrollIntoView({behavior:"smooth"})
}

scrollToProject.addEventListener("click", scrollToProjectFunction);
scrollToProjectHam.addEventListener("click", scrollToProjectFunction);


let scrollToServices = document.querySelector(".scrollToServices");
let scrollToServicesHam = document.querySelector(".ham-scroll-services");
let elementToScrollService = document.querySelector(".our-Services")

const scrollToServicesFunction = () => {
    elementToScrollService.scrollIntoView({behavior:"smooth"})
}

scrollToServices.addEventListener("click", scrollToServicesFunction);
scrollToServicesHam.addEventListener("click", scrollToServicesFunction);



function slugify(text) {
    return text.toString().toLowerCase().trim()
      .normalize('NFD') 				 // separate accent from letter
      .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
      .replace(/\s+/g, '-')            // replace spaces with -
      .replace(/&/g, '-and-')          // replace & with 'and'
      .replace(/[^\w\-]+/g, '')        // remove all non-word chars
      .replace(/\-\-+/g, '-')          // replace multiple '-' with single '-'
  }