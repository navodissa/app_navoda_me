const router = require("express").Router();
let Contactus = require("../models/contactus.model");

router.route("/").get((req, res) => {
  Excercise.find()
    .then((excercises) => res.json(excercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const message = req.body.message;

  const newContactus = new Contactus({
    name,
    email,
    phone,
    message,
  });

  newContactus
    .save()
    .then(() => res.json("Contact Message added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
