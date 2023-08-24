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
    const sentemail = await validateEmail.save();
    return res.status(201).json({ msg: "saved successfully", data: sentemail });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error.", error });
  }
};

// This function will save  email data according to  PARAMS:

export const getEmails = async (req, res) => {
  try {
    let emails;

    if (req.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    } else if (req.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error", error });
  }
};

// Controller for deleting all mail i.e moving to bin

export const moveEmailToBin = async (req, res) => {
  try {
    const updatedMails = await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json(updatedMails);
  } catch (error) {
    return res.status(500).json({ msg: "internal server error", error });
  }
};

export const toggleStarredEmail = async (req, res) => {
  try {
    const updated = await Email.updateOne(
      { _id: req.body.id },
      { $set: { starred: req.body.value } }
    );
    console.log(updated);
    return res.status(200).json("email marked as starred.");
  } catch (error) {
    return res.status(500).json({ msg: "internal server error", error });
  }
};

export const deleteEmail = async (req, res) => {
  try {
    const deletem = await Email.deleteMany({ _id: { $in: req.body } });
    console.log(deletem);
    return res.status(200).json("deleted successfully");
  } catch (error) {
    return res.status(500).json({ msg: "internal server error", error });
  }
};
