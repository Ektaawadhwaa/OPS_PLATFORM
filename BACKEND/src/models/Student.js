import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: "Account",   required: true,
      index: true, },

    studentName: { type: String, required: true },
    studentAge: Number,

    parentName: { type: String, required: true },
    parentEmail: { type: String, required: true },

     timezone: { type: String },
    country: { type: String },

    studentType: {
      type: String,
      enum: ["1-1", "group"],
      required: true,
    },

    level: { type: String },
     chessUsernames: [{ type: String }],
    rating: { type: Number },

    assignedCoachId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach",
      default: null,
    },
     assignedBatchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      default: null,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "PAUSED", "CANCELLED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
