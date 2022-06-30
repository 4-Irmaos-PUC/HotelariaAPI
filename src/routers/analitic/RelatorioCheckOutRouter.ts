import RelatorioCheckOutController from "../../controllers/analitic/RelatorioCheckOutController";

const express = require('express');
const router = express.Router();

router.get("/quartosMaisCaros", RelatorioCheckOutController.getQuartosMaisCaros);

module.exports = router;
