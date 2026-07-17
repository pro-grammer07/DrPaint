import Consultance from "../Models/ConsultanceModel.js";
import { sendConsultanceEmail } from "../utils/index.js";

export const consultance = async (req, res, next) => {
  const {
    firstName,
    lastName,
    expectedDate,
    size,
    reason,
    email,
    phone,
    city,
  } = req.body;

  if (
    !(
      firstName &&
      lastName &&
      expectedDate &&
      size &&
      reason &&
      phone &&
      email &&
      city
    )
  ) {
    next("Provide required fields");
    return;
  }

  try {
    const consultance = await Consultance.create({
      firstName,
      lastName,
      expectedDate,
      size,
      reason,
      email,
      phone,
      city,
    });
    // send message as email to us
    sendConsultanceEmail(consultance, res);
  } catch (error) {
    console.log("Error in consultance controller:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllConsultances = async (req, res, next) => {
  try {
    const consultance = await Consultance.find();
    console.log(consultance);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: consultance,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};

export const getTodayConsultances = async (req, res, next) => {
  try {
    var start = new Date();
    start.setHours(0, 0, 0, 0);
    var end = new Date();
    end.setHours(23, 59, 59, 999);
    const consultance = await Consultance.find({
      expectedDate: { $gte: start, $lt: end },
    });
    console.log(consultance);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: consultance,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
