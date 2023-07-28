function attachEventListe() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function xyz() {
    count++;
    console.log("Button clicked", count);
  });
}

attachEventListe();
