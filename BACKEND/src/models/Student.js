import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },

    studentName: { type: String, required: true },
    studentAge: Number,

    parentName: String,
    parentEmail: String,

    timezone: String,
    country: String,

    studentType: {
      type: String,
      enum: ["1-1", "group"],
      required: true,
    },

    level: String,
    chessUsernames: [String],
    rating: Number,

    assignedCoachId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    assignedBatchId: { type: String },

    status: {
      type: String,
      enum: ["ACTIVE", "PAUSED", "CANCELLED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
