
// Select some elements...
let dogNames = document.querySelectorAll('.dog-name');
let dogDesc = document.querySelectorAll('.dog-description');

console.log(dogNames);

for (let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left';
}

for (let i = 0; i < dogDesc.length; i++) {
    dogDesc[i].style.textAlign = 'left';
}

let footer = document.querySelector('.footer');
footer.style.color = 'blue';
footer.style.border = 'solid';

let dogImgs = document.querySelectorAll('.dog-image');
let dogRotate = document.querySelectorAll('.dog-image');

for (let i = 0; i < dogImgs.length; i++) {
    dogImgs[i].style.borderRadius = '25px'
    dogRotate[i].style.transform = "rotate(180deg)";
}

