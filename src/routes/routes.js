const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Auth = require("../middlewares/Auth");
const ApiController = require("../controllers/apiControllers");

// permitir que o express receba json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// rota de teste
router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.post("/register", ApiController.register);

router.post("/login", ApiController.login);

router.get("/list", Auth.private, ApiController.list);

module.exports = router;
