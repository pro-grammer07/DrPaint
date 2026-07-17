import Customer from "../Models/CustomerModel.js";
import { sendContactEmail } from "../utils/index.js";

export const contact = async (req, res, next) => {
  const { cname, phone, email, message } = req.body;

  if (!(cname && phone && email && message)) {
    next("Provide required fields");
    return;
  }

  try {
    const customer = await Customer.create({
      cname,
      phone,
      email,
      message,
    });
    // send message as email to us
    sendContactEmail(customer, res);
  } catch (error) {
    console.log("Error in customer controller:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contact = await Customer.find();
    res.status(200).json({
      success: true,
      message: "successfully",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
