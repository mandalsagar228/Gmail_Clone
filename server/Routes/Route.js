import express from "express";
import { saveSentEmail } from "../Controller/sentMail.js";

const router = express.Router();

router.post("/save", saveSentEmail);

export default router;
