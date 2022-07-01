let expertiseCardDiv = document.createElement("div");
expertiseCardDiv.className = "expertise__card";

let expertiseImage = document.createElement("img");
expertiseImage.className = "expertise__image";
expertiseImage.src = "file:///Users/vladmurasov/Desktop/tajam/img/expertise.png"

let expertiseCaption = document.createElement("p");
expertiseCaption.className = "expertise__caption";
expertiseCaption.textContent = "WEB DESIGN & DEVELOPMENT";


let expertiseDescription = document.createElement("p");
expertiseDescription.className = "expertise__description";
expertiseDescription.textContent = "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean"
;

expertiseCardDiv.append(expertiseImage,expertiseCaption, expertiseDescription)

console.log("my div", expertiseCardDiv);


let expertiseContent = document.querySelector(".expertise__content");

for(let i = 0; i <= 20; i++ ) {
    console.log("my div", expertiseCardDiv);
    expertiseContent.append(expertiseCardDiv)
}