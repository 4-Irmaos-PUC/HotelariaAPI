import ServicoController from "../controllers/ServicoController";

const express = require('express');
const router = express.Router();

router.get("/", ServicoController.get);
router.put("/", ServicoController.put);
router.delete("/:id", ServicoController.delete);
router.patch("/:id", ServicoController.patch);

module.exports = router;
