import Email from "../Model/sentMail.schema.js";
import { sendEmailToUser } from "../Utils/SendMail.js";

// This function will save the email data in the DB
export const saveSentEmail = async (req, res) => {
  try {
    console.log("from controller:", req.body.type);
    const validateEmail = await new Email(req.body);

    // function for sending mail to the user.
    if (req.body.type === "sent") {
      sendEmailToUser(req.body);
    }
    await validateEmail.save();
    return res.status(201).json({ msg: "saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error.", error });
  }
};

// This function will save  email data according to  PARAMS:

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (false) {
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error", error);
  }
};
