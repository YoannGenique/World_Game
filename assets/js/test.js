// Get the <datalist> and <input> elements.
var dataList = document.getElementById('datalist');
var input = document.getElementById('search');

// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function (response) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            // Parse the JSON
            var jsonOptions = JSON.parse(request.responseText);

            // Loop over the JSON array.
            jsonOptions.forEach(function (item) {
                // Create a new <option> element.
                var option = document.createElement('option');
                // Set the value using the item in the JSON array.
                option.value = item;
                // Add the <option> element to the <datalist>.
                dataList.appendChild(option);
            });

            // Update the placeholder text.
            input.placeholder = "e.g. datalist";
        } else {
            // An error occured :(
            input.placeholder = "Couldn't load datalist options :(";
        }
    }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.
request.open('GET', 'assets/php/indexLike.php', true);
request.send();

// Pour que mes recherche se fasse au fur et à mesure dans la barre de recherche 
  // const xhr = new XMLHttpRequest();

  // let i = 0;

  // search.addEventListener("input", (e) => {

  //   e.preventDefault();

  //   if (search.value !== "") {


  //     const formData = new FormData(form);

  //     xhr.open("POST", "assets/php/indexLike.php");

  //     xhr.send(formData);

  //     xhr.addEventListener("readystatechange", () => {

  //       if (xhr.readyState === 4 && xhr.status === 200) {

  //         console.log(i);
  //         i++;

  //         const datas = JSON.parse(xhr.response);



  //         datalist.innerHTML = "";

  //         // console.log(datas);

  //         datas.forEach((data) => {

  //           let option = document.createElement("option");

  //           option.value = data["game_name"];

  //           option.innerText = data["game_name"];

  //           datalist.appendChild(option);

  //         });
  //         /************************************* */
  //         // if(search.value==datas.game_name){

  //         // }

  //         /************************************** */
  //       }
  //     }
  //     )
  //   };
  // });