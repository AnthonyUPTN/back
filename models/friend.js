const { model } = require("mongoose");
const friendSchema = require("./schemas/friendSchema");

const Friend = model("friend", friendSchema);

module.exports = Friend;
