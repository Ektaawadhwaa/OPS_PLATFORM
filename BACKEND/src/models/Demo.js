import mongoose from "mongoose";

const demoSchema = new mongoose.Schema(
  {
    studentName: String,
    parentName: String,
    parentEmail: String,
    timezone: String,

    scheduledStart: Date,
    scheduledEnd: Date,

    coachId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },

    meetingLink: String,

    status: {
      type: String,
      enum: [
        "BOOKED",
        "ATTENDED",
        "NO_SHOW",
        "RESCHEDULED",
        "CANCELLED",
        "INTERESTED",
        "NOT_INTERESTED",
        "PAYMENT_PENDING",
        "CONVERTED",
        "DROPPED",
      ],
      default: "BOOKED",
    },

    recommendedStudentType: String,
    recommendedLevel: String,
    adminNotes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Demo", demoSchema);
