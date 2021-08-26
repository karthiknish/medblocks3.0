import dbConnect from "../../util/dbConnect";
import Email from "../../models/Email";
import nodemailer from "nodemailer";
dbConnect();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        console.log(req.body);
        const email = await Email.create({
          email: req.body.email,
        });
        let transporter = nodemailer.createTransport({
          host: "smtp.mailgun.org",
          port: 587,
          secure: false,
          auth: {
            user: process.env.MAILGUN_EMAIL,
            pass: process.env.MAILGUN_PASSWORD,
          },
        });
        console.log(transporter);
        let noti = await transporter.sendMail({
          from: process.env.MAILGUN_EMAIL,
          to: "sidharth@medblocks.org",
          subject: "New Interest",
          html: `<div>
          <p>A new user ${req.body.email} has an interest in Medblocks</p></div>`,
        });
        console.log(noti);
        res.status(201).json({ success: true, data: email });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
