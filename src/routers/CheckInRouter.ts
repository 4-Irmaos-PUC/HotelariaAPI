import CheckInController from "../controllers/CheckInController";

const express = require('express');
const router = express.Router();

router.get("/", CheckInController.get);
router.put("/", CheckInController.put);
router.delete("/:id", CheckInController.delete);
router.patch("/:id", CheckInController.patch);

module.exports = router;
