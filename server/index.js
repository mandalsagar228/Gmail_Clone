import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv";
import router from "./Routes/Route.js";

import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();

dotenv.config();
const PORT = process.env.PORT || 8600;
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (error) {
//       res.status(500).send(error);
//     }
//   );
// });

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is listening  on port ${PORT} successfully.`);
});
