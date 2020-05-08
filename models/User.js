const moongoose = require("mongoose");
const Schema = moongoose.Schema;

//Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requiredd: true,
  },
  registr_data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = moongoose.model("user", UserSchema);
