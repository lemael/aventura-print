const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/login", (req, res) => {
  const login = req.body.login || req.body.kundennr;
  const password = req.body.password || req.body.kundenpasswort;

  if (login === "aventura-print.de" && password === "Start2023-") {
    res.send("Connexion reussie ! Bienvenue sur votre compte.");
  } else {
    res.status(401).send("Identifiants incorrects.");
  }
});

app.listen(3000, () => {
  console.log("Serveur lance sur http://localhost:3000");
});
