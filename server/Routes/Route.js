import express from "express";
import {
  saveSentEmail,
  getEmails,
  moveEmailToBin,
  toggleStarredEmail,
  deleteEmail,
} from "../Controller/sentMail.js";

const router = express.Router();

router.post("/save", saveSentEmail);

router.get("/emails/:type", getEmails);

router.post("/drafts", saveSentEmail); //for saving drafts mails
router.post("/bin", moveEmailToBin);
router.post("/starred", toggleStarredEmail);
router.delete("/delete", deleteEmail);

export default router;
