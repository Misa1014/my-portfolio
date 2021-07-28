const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const mainFoto = document.getElementById("main-foto");

let topFoto = [
  { image: "umibe.jpg" },
  { image: "minoh.jpg" },
  { image: "taiwan.jpg" },
  { image: "suits.jpg" },
  { image: "ushi.jpg" },
  { image: "taberu.jpg" },
];

let i = 0;
mainFoto.src = "./images/" + topFoto[0].image;

const changeFoto = function () {
  if (i < topFoto.length) {
    mainFoto.src = "./images/" + topFoto[i].image;
    i++;
  } else {
    i = 0;
    mainFoto.src = "./images/" + topFoto[i].image;
    i++;
  }
};

rightButton.onclick = function () {
  changeFoto();
};

const backFoto = function () {
  if (i === 0) {
    i = topFoto.length;
    mainFoto.src = "./images/" + topFoto[i].image;
  } else {
    i -= 1;
    mainFoto.src = "./images/" + topFoto[i].image;
  }
};

leftButton.onclick = function () {
  backFoto();
};

const divingText = document.getElementById("diving-text");
const moguruText = document.getElementById("moguru");

const goDiving = document.createElement("a");
goDiving.className = "card";
goDiving.href = "./indexx.html";
goDiving.textContent = "私が見た海の世界をご紹介！";

divingText.onclick = function () {
  moguruText.after(goDiving);
};

const watasiGao = document.getElementById("watasi-gao");

const Egao = function () {
  watasiGao.src = "./images/watasi2.jpg";
};

watasiGao.onclick = function () {
  Egao();
};
