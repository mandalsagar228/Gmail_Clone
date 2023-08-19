import Email from "../Model/sentMail.schema.js";
import { sendEmailToUser } from "../Utils/SendMail.js";

export const saveSentEmail = async (req, res) => {
  try {
    console.log("from controller:", req.body);
    const validateEmail = await new Email(req.body);

    // function for sending mail to the user.
    sendEmailToUser(req.body);
    await validateEmail.save();
    return res.status(201).json({ msg: "saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error.", error });
  }
};
