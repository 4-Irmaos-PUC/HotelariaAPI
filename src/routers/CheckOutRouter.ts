import CheckOutController from "../controllers/CheckOutController";

const express = require('express');
const router = express.Router();

router.get("/", CheckOutController.get);
router.put("/", CheckOutController.put);
router.delete("/:id", CheckOutController.delete);
router.patch("/:id", CheckOutController.patch);

module.exports = router;
