import RelatorioServicoController from "../../controllers/analitic/RelatorioServicoController";

const express = require('express');
const router = express.Router();

router.get("/servicosMaisComprados", RelatorioServicoController.getServicosMaisComprados);

module.exports = router;
