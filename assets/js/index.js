const search = document.getElementById("search");
const datalist = document.getElementById("games");

//Version XHR
//je créé un nouvel objet XHR
const xhr = new XMLHttpRequest();

search.addEventListener("input", (e) => {

e.preventDefault();

const formData = new FormData();

xhr.open("POST", "assets/php/indexLike.php");

xhr.send(formData);

xhr.addEventListener("readystatechange", () => {

  if (xhr.readyState === 4 && xhr.status === 200) {

  const values = JSON.parse(xhr.response);

  datalist.innerHTML = ""
console.log(values)
  values.forEach(function (item) {

    var option = document.createElement('option');

    option.value = item["game_name"];

    option.innerText = item["game_name"];

    datalist.appendChild(option);
    
  });
}
});
});

