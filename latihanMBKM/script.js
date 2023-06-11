const ubahWarna = document.getElementById("gantiWarna");
const kotakMerah = document.querySelector(".kotakMerah");

gantiWarna.onclick =  () => {
  document.body.classList = "biru-muda";
};
console.log(kotakMerah);

const acakWarna = document.createElement("button");
const teksTombol = document.createTextNode("gantiWarna");

acakWarna.addEventListener("click",  () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const merah = document.querySelector("input[name=sMerah]");
const hijau = document.querySelector("input[name=sHijau]");
const biru = document.querySelector("input[name=sBiru]");

merah.addEventListener("input", () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
hijau.addEventListener("input", () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
biru.addEventListener("input", () => {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
