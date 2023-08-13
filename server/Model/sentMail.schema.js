import mongoose from "mongoose";

const sentMailSchema = mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  starred: {
    type: Boolean,
    required: true,
    default: false,
  },
  bin: {
    type: Boolean,
    required: true,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const email = mongoose.model("email", sentMailSchema);
export default email;
