import RelatorioCheckInController from "../../controllers/analitic/RelatorioCheckInController";

const express = require('express');
const router = express.Router();

router.get("/qntCheckinsAposEstadia", RelatorioCheckInController.getQuantidadeCheckinsRealizadosAposInicioEstadia);

module.exports = router;
