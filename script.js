function copierTexte(element) {
    const texte = element.innerText;
    navigator.clipboard.writeText(texte).then(() => {
      alert("Texte copié !");
    }).catch(err => {
      console.error("Erreur lors de la copie :", err);
    });
  }