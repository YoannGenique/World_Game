// Recupération du Formulaire
const form = document.querySelector("form");
// Récupération de la barre de Recherche
const search = document.getElementById("search");
// Récupération des champ ou s'affiche les options
const datalist = document.getElementById("games");
// Récupération du champ ou vont s'afficher mes card
const resultDiv = document.getElementById("result");



// Validation du submit
form.addEventListener("submit", (e) => {

  e.preventDefault();

  const formData = new FormData(form);

  //On communique avec le script passé en 1er argument sous forme de caractère
  fetch(
    "assets/php/index.php",
    //2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
    {
      method: "POST",
      body: formData,
    }
  )
    //Nous recevons une Response du serveur, nous retournons une Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
    .then((response) => response.json())
    //Nous recevons ENFIN nos données comme un objet JS
    .then((datas) => {
      //on manipule nos données
      console.log(datas);

      resultDiv.innerHTML = "";

      datas.forEach((data) => {

        resultDiv.innerHTML += `<div class="card_yo">
                                  <div class="div_card">
                                    <div>
                                      <img class="img_card" src="${data.game_img}" alt="Card image cap" width="250px">
                                    </div>
                                    <div class="txt_card">
                                      <div class="titre_game">
                                        <h2>${data.game_name}</h2>
                                      </div>
                                      <div>
                                        <p class="desc_game">${data.description}</p>
                                      </div>
                                      <div>
                                        <p class="dev_pub_game">${data.game_developper}</p>
                                      </div>
                                      <div>
                                        <p class="dev_pub_game">${data.game_publisher}</p>
                                      </div>
                                      <div>
                                        <p class="date_game">${data.release_date}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>`;
      });

      //je vide mon formulaire
      form.reset();
    });
});





search.addEventListener("input", (e) => {

  e.preventDefault();

  const formData = new FormData(form);

  //On communique avec le script passé en 1er argument sous forme de caractère
  fetch(
    "assets/php/indexLike.php",
    //2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
    {
      method: "POST",
      body: formData,
    }
  )
    //Nous recevons une Response du serveur, nous retournons une Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
    .then((response) => response.json())
    //Nous recevons ENFIN nos données comme un objet JS
    .then((datas) => {
      //on manipule nos données
      console.log(datas);

      datalist.innerHTML = "";

      datas.forEach((data) => {

        let option = document.createElement("option");

        option.value = data["game_name"];

        option.innerText = data["game_name"];

        datalist.appendChild(option);

      });
    });
});