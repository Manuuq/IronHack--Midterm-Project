/* let projNum = parseInt(window.location.search.split('?')[1]);
let tituloName;
let subtituloName;
let fotoName;
let paragraphName;
let placeholder = fetch('https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=4')
.then((response) => response.json())
.then((cleanResponse) => {
    console.log(cleanResponse[0].name);
            tituloName = cleanResponse[0].name;
            subtituloName = cleanResponse[0].email;
            fotoName = cleanResponse[0].id;
            paragraphName = cleanResponse[0].body;
        document.getElementById("project-titulo").innerHTML = tituloName;
        document.getElementById("subtitle-description").innerHTML = subtituloName;
        document.querySelector('.project-intro-image').src = `/project-assets/projects-section/${fotoName}.jpg`;
        document.querySelector('.project-intro-image-effect').src = `/project-assets/projects-section/${fotoName}.jpg`;
        document.getElementById("project-details-p").innerHTML = paragraphName;
    }
); */

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const param = urlParams.get("slug");


let projectArray = document.querySelectorAll(".project");
let documentProject = document.querySelector(".main-project")
let img = documentProject.appendChild(document.createElement("img"));
let paragraf = documentProject.appendChild(document.createElement("p"));

let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json()).then((res) => {
    projectArray[0].querySelector("h3").innerText = res[0].title;
    projectArray[0].querySelector("p").innerText = res[0].body.replace(/(\r\n|\n|\r)/gm, "");
    projectArray[0].querySelector("a").href = "./project.html?slug=" + slugify( res[0].title);

    projectArray[1].querySelector("h3").innerText = res[1].title;
    projectArray[1].querySelector("p").innerText = res[1].body.replace(/(\r\n|\n|\r)/gm, "");
    projectArray[1].querySelector("a").href = "./project.html?slug=" + slugify( res[1].title);

    projectArray[2].querySelector("h3").innerText = res[2].title;
    projectArray[2].querySelector("p").innerText = res[2].body.replace(/(\r\n|\n|\r)/gm, "");
    projectArray[2].querySelector("a").href = "./project.html?slug=" + slugify( res[2].title);

    
    let found = res.find(element => slugify(element.title) === param);
    console.log(found);
    if (found) {
        let documentProject = document.querySelector(".main-project")
        documentProject.querySelector("h1").innerText = found.title;
        documentProject.querySelector("p").innerText = found.body.replace("\n"," ");
        if (found.title.includes("facere")) {
            img.setAttribute("src", "./resources/images/projects-section/1.jpg");
            img.classList.add("project-image")
            let text = found.body.replace(/(\r\n|\n|\r)/gm, "")
            console.log(text);
            paragraf.innerText = text;
            paragraf.classList.add("project-paragraf")
            
        } else if (found.title.includes("esse")) {
            img.setAttribute("src", "./resources/images/projects-section/2.jpg");
            img.classList.add("project-image")
            paragraf.innerText = found.body.replace(/(\r\n|\n|\r)/gm, "")
            paragraf.classList.add("project-paragraf")
            console.log(paragraf.innerText);
        } else if (found.title.includes("molestias")){
            img.setAttribute("src", "./resources/images/projects-section/3.jpg");
            img.classList.add("project-image")
            paragraf.innerText = found.body.replace(/(\r\n|\n|\r)/gm, "")
            paragraf.classList.add("project-paragraf")
            
        }

    } else {
        let documentProject = document.querySelector(".main-project")
        documentProject.querySelector("h1").innerText = res[0].title;
        documentProject.querySelector("p").innerText = res[0].body.replace("\n"," ");
        img.setAttribute("src", "./resources/images/projects-section/1.jpg");
        img.classList.add("project-image")
        let text = res[0].body.replace(/(\r\n|\n|\r)/gm, "")
        console.log(text);
        paragraf.innerText = text;
        paragraf.classList.add("project-paragraf")
    }

}).catch((err) => console.log(err))


let scrollToProject = document.querySelector(".scrollToProject");
let scrollToProjectHam = document.querySelector(".ham-scroll-project");
let elementToScroll = document.querySelector(".projects")

const scrollToProjectFunction = () => {
    elementToScroll.scrollIntoView({behavior:"smooth"})
}

scrollToProject.addEventListener("click", scrollToProjectFunction);
scrollToProjectHam.addEventListener("click", scrollToProjectFunction);


function slugify(text) {
    return text.toString().toLowerCase().trim()
      .normalize('NFD') 				 // separate accent from letter
      .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
      .replace(/\s+/g, '-')            // replace spaces with -
      .replace(/&/g, '-and-')          // replace & with 'and'
      .replace(/[^\w\-]+/g, '')        // remove all non-word chars
      .replace(/\-\-+/g, '-')          // replace multiple '-' with single '-'
  }