import email from "../Model/sentMail.schema.js";
import { sendEmailToUser } from "../Utils/SendMail.js";

export const saveSentEmail = async (req, res) => {
  try {
    console.log("from controller:", req.body);
    const validateEmail = await new email(req.body);
    sendEmailToUser(req.body);
    await validateEmail.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error.", error });
  }
};
