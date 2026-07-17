import mongoose from "mongoose";

const ConsultanceSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    expectedDate: {
      type: String,
      required: [true, "Expected Date is required"],
    },
    size: {
      type: String,
      required: [true, "Size of House is required"],
    },
    reason: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
  },
  { timestamps: true }
);

const Consultance = mongoose.model("Consultance", ConsultanceSchema);

export default Consultance;
