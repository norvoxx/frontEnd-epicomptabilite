const search = document.getElementById("searchTask");
const liste = document.getElementById("t-body");
const liste2 = liste.querySelectorAll("tr");

search.addEventListener("input", (e) => {
  let recherche = e.target.value.toLowerCase();
  liste2.forEach((obj) => {
    let inv = obj.querySelectorAll("td")[0].innerText.toLowerCase();
    let text = obj.querySelectorAll("td")[1].innerText.toLowerCase();
    let name = obj.querySelectorAll("td")[2].innerText.toLowerCase();
    let montant = obj.querySelectorAll("td")[3].innerText.toLowerCase();
    let date = obj.querySelectorAll("td")[4].innerText.toLowerCase();
    let statut = obj.querySelectorAll("td")[5].innerText.toLowerCase();
    if (
      !(
        inv.includes(recherche) ||
        text.includes(recherche) ||
        name.includes(recherche) ||
        montant.includes(recherche) ||
        date.includes(recherche) ||
        statut.includes(recherche)
      )
    ) {
      obj.classList.add("inactif");
    } else obj.classList.remove("inactif");
  });
});
