import ClienteController from "../controllers/ClienteController";
import LoginController from "../controllers/LoginController";

const express = require('express');
const router = express.Router();

router.get("/", LoginController.authenticate, ClienteController.get);
router.put("/", ClienteController.put);
router.delete("/:id", LoginController.authenticate, ClienteController.delete);
router.patch("/:id", LoginController.authenticate, ClienteController.patch);

module.exports = router;
