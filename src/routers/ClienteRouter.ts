import ClienteController from "../controllers/ClienteController";

const express = require('express');
const router = express.Router();

router.get("/", ClienteController.get);
router.put("/", ClienteController.put);
router.delete("/:id", ClienteController.delete);
router.patch("/:id", ClienteController.patch);

module.exports = router;
