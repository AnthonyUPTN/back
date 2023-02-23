const { createError } = require("../../helpers");
const News = require("../../models/news");

const getAllNews = async (_, res) => {
  const news = await News.find();

  if (!news) {
    throw createError(404, error.message);
  }

  res.json({ news });
};

module.exports = getAllNews;
