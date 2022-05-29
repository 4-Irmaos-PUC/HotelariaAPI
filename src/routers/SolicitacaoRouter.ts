import SolicitacaoController from "../controllers/SolicitacaoController";

const express = require('express');
const router = express.Router();

router.get("/", SolicitacaoController.get);
router.put("/", SolicitacaoController.put);
router.delete("/:id", SolicitacaoController.delete);
router.patch("/:id", SolicitacaoController.patch);

module.exports = router;
