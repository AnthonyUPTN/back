const { Schema } = require("mongoose");

const friendSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: String,
  addressUrl: String,
  imageUrl: String,
  address: String,
  workDays: [
    {
      isOpen: Boolean,
      from: String,
      to: String,
    },
  ],
  phone: String,
  email: String,
});

module.exports = friendSchema;
