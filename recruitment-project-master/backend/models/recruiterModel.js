const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please create a password"],
    },
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    companyName: {
      type: String,
      required: [true, "Please enter a company name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recruiter", recruiterSchema);
