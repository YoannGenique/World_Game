const resultDiv = document.getElementById("result");
const form = document.querySelector("form");
const in_search = document.getElementById("search");

// in_search.addEventListener("input", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   //On communique avec le script passé en 1er argument sous forme de caractère
//   fetch(
//     "assets/php/index.php",
//     //2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
//     {
//       method: "POST",
//       body: formData,
//     }
//   )
//     //Nous recevons une Response du serveur, nous retournons une Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
//     .then((response) => response.json())
//     //Nous recevons ENFIN nos données comme un objet JS
//     .then((data) => {
//       //on manipule nos données
//       console.log(data);
//       console.log();

//       data.forEach((datas) => {
//         resultDiv.innerHTML += `<div class="card_yo">
//                                   <div class="div_card">
//                                     <div>
//                                       <img class="img_card" src="${datas.game_img}" alt="Card image cap" width="250px">
//                                     </div>
//                                     <div class="txt_card">
//                                       <div class="titre_game">
//                                         <h2>${datas.game_name}</h2>
//                                       </div>
//                                       <div>
//                                         <p class="desc_game">${datas.description}</p>
//                                       </div>
//                                       <div>
//                                         <p class="dev_pub_game">${datas.game_developper}</p>
//                                       </div>
//                                       <div>
//                                         <p class="dev_pub_game">${datas.game_publisher}</p>
//                                       </div>
//                                       <div>
//                                         <p class="date_game">${datas.release_date}</p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>`;
//       });

//       //je vide mon formulaire
//       form.reset();
//     });
//   // .catch(e => {
//   //   console.error(e);
//   //   resultDiv.innerHTML = `<p>Désolé, nous avons rencontré une erreur dans le système</p>`;
//   // });
// });

//Version fetch
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
    .then(response => response.json())
    //Nous recevons ENFIN nos données comme un objet JS
    .then(data => {
      //on manipule nos données
      
      // forlet element = document.createElement

      //La foreach doit s'aff dans le resulDiv
      
        data.forEach((datas) => {
        //Je cree une div à chaque tour de boucle
        const resultDiv = document.getElementById("result");
        const newDiv = document.createElement("div");
        const content = document.createTextNode(`<div id="${datas.game_id}" class="card_yo">
                                                          <div class="div_card">
                                                            <div>
                                                              <img class="img_card" src="${datas.game_img}" alt="Card image cap" width="250px">
                                                            </div>
                                                            <div class="txt_card">
                                                              <div class="titre_game">
                                                                <h2>${datas.game_name}</h2>
                                                              </div>
                                                              <div>
                                                                <p class="desc_game">${datas.description}</p>
                                                              </div>
                                                              <div>
                                                                <p class="dev_pub_game">${datas.game_developper}</p>
                                                              </div>
                                                              <div>
                                                                <p class="dev_pub_game">${datas.game_publisher}</p>
                                                              </div>
                                                              <div>
                                                                <p class="date_game">${datas.release_date}</p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>`);
        newDiv.appendChild(content);
        document.body.insertBefore(newDiv, resultDiv);
                                console.log(datas); 
                              }
        )
      });
  
      //je vide mon formulaire
      //form.reset();
    });
  // .catch(e => {
  //   console.error(e);
  //   resultDiv.innerHTML = `<p>Désolé, nous avons rencontré une erreur dans le système</p>`;
  // });
// `<div id="${datas.game_id}" class="card_yo">
//                                                   <div class="div_card">
//                                                     <div>
//                                                       <img class="img_card" src="${datas.game_img}" alt="Card image cap" width="250px">
//                                                     </div>
//                                                     <div class="txt_card">
//                                                       <div class="titre_game">
//                                                         <h2>${datas.game_name}</h2>
//                                                       </div>
//                                                       <div>
//                                                         <p class="desc_game">${datas.description}</p>
//                                                       </div>
//                                                       <div>
//                                                         <p class="dev_pub_game">${datas.game_developper}</p>
//                                                       </div>
//                                                       <div>
//                                                         <p class="dev_pub_game">${datas.game_publisher}</p>
//                                                       </div>
//                                                       <div>
//                                                         <p class="date_game">${datas.release_date}</p>
//                                                       </div>
//                                                     </div>
//                                                   </div>
//                                                 </div>`
