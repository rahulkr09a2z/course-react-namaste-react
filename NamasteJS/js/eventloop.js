console.log("start");

document.getElementById("btn").addEventListener("click", function cbT() {
  console.log("callback");
});

fetch("someapi").then(function cbF() {
  console.log("CB some api response");
});

console.log("end");
