document.addEventListener("DOMContentLoaded", function(){

const images = document.querySelectorAll(".gallery img");


images.forEach(function(image){

image.addEventListener("click", function(){

const overlay = document.createElement("div");

overlay.className = "image-overlay";


overlay.innerHTML = `
<img src="${image.src}">
`;


document.body.appendChild(overlay);


overlay.addEventListener("click", function(){

overlay.remove();

});

});

});


});
