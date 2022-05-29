import HotelController from "../controllers/HotelController";

const express = require('express');
const router = express.Router();

router.get("/", HotelController.get);
router.put("/", HotelController.put);
router.delete("/:id", HotelController.delete);
router.patch("/:id", HotelController.patch);

module.exports = router;
