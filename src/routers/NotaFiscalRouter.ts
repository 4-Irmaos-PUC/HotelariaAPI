import NotaFiscalController from "../controllers/NotaFiscalController";

const express = require('express');
const router = express.Router();

router.get("/", NotaFiscalController.get);
router.put("/", NotaFiscalController.put);
router.delete("/:id", NotaFiscalController.delete);
router.patch("/:id", NotaFiscalController.patch);

module.exports = router;
