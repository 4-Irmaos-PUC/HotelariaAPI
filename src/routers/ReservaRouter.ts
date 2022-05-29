import ReservaController from "../controllers/ReservaController";

const express = require('express');
const router = express.Router();

router.get("/", ReservaController.get);
router.put("/", ReservaController.put);
router.delete("/:id", ReservaController.delete);
router.patch("/:id", ReservaController.patch);

module.exports = router;
