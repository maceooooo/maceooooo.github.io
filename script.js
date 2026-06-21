function copierTexte(element) {
  const texte = element.innerText;
  navigator.clipboard.writeText(texte).then(() => {
    alert("Adresse Mail copiée !");
  }).catch(err => {
    console.error("Erreur lors de la copie :", err);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("voirPlusBtn");
    const section = document.getElementById("projets");

    btn.addEventListener("click", () => {
        section.classList.toggle("open");

        btn.textContent = section.classList.contains("open")
            ? "Voir moins"
            : "Voir plus";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("voirPlusBtn2");
    const section = document.getElementById("images-box");

    btn.addEventListener("click", () => {
        section.classList.toggle("open");

        btn.textContent = section.classList.contains("open")
            ? "Voir moins"
            : "Voir plus";
    });
});