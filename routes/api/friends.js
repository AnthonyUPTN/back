const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/friends");

router.get("/friends", ctrlWrapper(ctrl.getAllFriends));

module.exports = router;
