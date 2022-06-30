import RelatorioReservaController from "../../controllers/analitic/RelatorioReservaController";

const express = require('express');
const router = express.Router();

router.get("/hoteisMaisReservados", RelatorioReservaController.getHoteisComMaisReservas);

module.exports = router;
