<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <title>World Games</title>
  </head>
  <body>
    <h1 class="neon">World Games</h1>
    <div class="container d_flex">    
      <form method="POST" class="form-inline my-2">
        <div class="in_dep">
          <input name="search" type="text" class="larg trans desc" id="search" autocomplete="off">
          <button id="btn" class="btn btn_yo pulse trans" type="submit">
            <img src="assets/img/ico/loupe_ico.png" alt="icone de loupe" width="22px"/>
          </button>
          <div class="games" id="games">
          </div>
        </div>
      </form>
    </div>
      <div class="card_yo container" id="result">
      </div>
    <script src="assets/js/main.js"></script>
  </body>
</html>
