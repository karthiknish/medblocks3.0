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
        res.status(201).json({ success: true, data: email });
        let transporter = nodemailer.createTransport({
          host: "smtp.mailgun.org",
          port: 465,
          secure: true,
          auth: {
            user: "mailer@medblocks.org",
            pass: "1710a9ef097cb210500a1c27a5d3cb95-9776af14-d867bf6e",
          },
        });
        let info = await transporter.sendMail({
          from: "mailer@medblocks.org",
          to: req.body.email,
          subject: "Welcome to Medblocks",
          html: `<div><p>Hi </p>
          <p>Welcome to Medblocks.We're thrilled to see you here!</p>
          <p>We’re confident that our products and services will help you build modern healthcare applications.</p>
          <p>Below u can book a session to know more</p>
          <button><a style='text-decoration: none;' href='https://docs.google.com/forms/u/3/d/e/1FAIpQLSe_v8htTTqsIUsMKpKowyOAKyPTNSJRQZ2dqUwpXKI_TbDnZg/viewform?usp=sf_link' target='_blank'>Book Session</a></button>
          </div>`,
        });
        let noti = await transporter.sendMail({
          from: "mailer@medblocks.org",
          to: "sidharth@medblocks.org",
          subject: "New Interest",
          html: `<div>
          <p>A new user ${req.body.email} has an interest in Medblocks</p></div>`,
        });
        console.log(info, noti);
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
