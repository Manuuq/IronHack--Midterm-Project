let projNum = parseInt(window.location.search.split('?')[1]);
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
);