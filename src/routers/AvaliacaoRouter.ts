import AvaliacaoController from "../controllers/AvaliacaoController";

const express = require('express');
const router = express.Router();

router.get("/", AvaliacaoController.get);
router.put("/", AvaliacaoController.put);
router.delete("/:id", AvaliacaoController.delete);
router.patch("/:id", AvaliacaoController.patch);

module.exports = router;
