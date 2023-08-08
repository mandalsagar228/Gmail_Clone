import mongoose from "mongoose";

const Connection = (username, password) => {
  URL = `mongodb+srv://${username}:${password}@gmailclone.qshdmnv.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(
      "Getting error while connecting to the database",
      error.message
    );
  }
};

export default Connection;
