import QuartoController from "../controllers/QuartoController";

const express = require('express');
const router = express.Router();

router.get("/", QuartoController.get);
router.put("/", QuartoController.put);
router.delete("/:id", QuartoController.delete);
router.patch("/:id", QuartoController.patch);

module.exports = router;
