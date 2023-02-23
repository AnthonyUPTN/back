const { createError } = require("../../helpers");
const Friend = require("../../models/friend");

const getAllFriends = async (_, res) => {
  const friends = await Friend.find();

  if (!friends) {
    throw createError(404, error.message);
  }

  res.json({ friends });
};

module.exports = getAllFriends;
