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
      //   emails = await Email.find({ bin: true });
      // } else if ((req.params.type = "allmail")) {
      //   emails = await Email.find({});
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json({ msg: "This is mail", emails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "msg:internal server error", error });
  }
};

// Controller for deleting all mail i.e moving to bin

export const moveEmailToBin = async (req, res) => {
  try {
    const updatedMails = await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res
      .status(200)
      .json({ mas: "email deleted successfully", updatedMails });
  } catch (error) {
    return res.status(500).json({ msg: "internal server error", error });
  }
};
