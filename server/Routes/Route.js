import express from "express";
import {
  saveSentEmail,
  getEmails,
  moveEmailToBin,
  toggleStarredEmail,
} from "../Controller/sentMail.js";

const router = express.Router();

router.post("/save", saveSentEmail);

router.get("/emails/:type", getEmails);

router.post("/drafts", saveSentEmail); //for saving drafts mails
router.post("/bin", moveEmailToBin);
router.post("/starred", toggleStarredEmail);

export default router;
