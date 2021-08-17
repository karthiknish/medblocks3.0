import dbConnect from "../../util/dbConnect";
import Email from "../../models/Email";

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
