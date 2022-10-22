const images = [
    "beautifulLife.jpeg",
    "haha.jpeg",
    "hotel.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//html element를 js로 생성,아직까지 doucment안에 가지 못함
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`
console.log(bgImage);
//body에 html 추가
document.body.appendChild(bgImage);