const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/news");

router.get("/news", ctrlWrapper(ctrl.getAllNews));

module.exports = router;
