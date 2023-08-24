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

    html: `<h1>${emailData.body} </h1>`,
  };

  Transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error while sending mail", error);
    } else {
      console.log(`email sent:${info.response}`);
    }
  });
};
