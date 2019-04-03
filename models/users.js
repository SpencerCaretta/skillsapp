// the users model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userID: {
    type: String, 
    trim: true,
    required: true,
    unique: true
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estimates"
    }
  ]
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;