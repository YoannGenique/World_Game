// Recupération du Formulaire
const form = document.querySelector("form");
// Récupération du btn
const btn = document.getElementById("btn");
// Récupération de la barre de Recherche
const search = document.getElementById("search");
// Récupération des champ ou s'affiche les options
const datalist = document.getElementById("games");
// Récupération du champ ou vont s'afficher mes card
const resultDiv = document.getElementById("result");


//**************** Ecoute de L'input ********************//

search.addEventListener("keyup", (e) => {

  if (search.value !== " " && search.value !== "") {
    console.log(e);

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


        datalist.innerHTML = "";

        datas.forEach((data) => {

          datalist.innerHTML += `<button class="d-block btn_abs" id="${data.game_name}">
                                  <div class="card_search larg">
                                    <div>
                                      <img class="img_wid" src="${data.game_img}">
                                    </div>
                                    <div>
                                      <div>
                                        <h2 id="sel" class="title_card">${data.game_name}</h2>
                                      </div>
                                      <div>
                                        <p class="dev">${data.game_developper}</p>
                                      </div>
                                    </div>
                                  </div>
                                </button>`

          // const option = document.createElement("option");
          // const option = document.createElement("a");

          // const op = document.createElement("p");

          // op.value = data["game_name"];

          // op.innerText = data["game_name"];

          // datalist.appendChild(option);

          // const app = querySelectorAll("a");

          // app.appendChild(op)

        });

        const buttons = document.querySelectorAll("button.d-block");
        console.log(buttons);
        buttons.forEach(button => {

          button.addEventListener("click", (e) => {

            e.preventDefault();

            search.value = button.id;

            datalist.innerHTML = "";

            form.dispatchEvent(new Event("submit"));

          })
        })
      })
  } else {
    datalist.innerText = "";
  };
});

//******** Validation du submit *********//

form.addEventListener("submit", (e) => {

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
      datalist.innerHTML = "";
      form.reset();
    });
});