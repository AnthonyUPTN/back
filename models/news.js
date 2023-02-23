const { model } = require("mongoose");
const newsSchema = require("./schemas/newsSchema");

const News = model("news", newsSchema);

module.exports = News;
