import nodemailer from "nodemailer";

export const sendEmailToUser = (emailData) => {
  console.log("This is email data:", emailData);

  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mandalsagar228@gmail.com",
      pass: "szspoochinkiocpk",
    },
  });

  const mailOptions = {
    from: "mandalsagar228@gmail.com",
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.msgBody,

    // html: `<h1>Hello,</h1><p>This is an <strong>HTML</strong> email sent using Nodemailer. Your OTP is here:${OTP} </p>`,
  };

  Transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error while sending mail", error);
    } else {
      console.log(`email sent:${info.response}`);
    }
  });
};
