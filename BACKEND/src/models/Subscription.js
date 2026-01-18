import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    planId: String,
    amount: Number,
    billingCycle: String,

    status: {
      type: String,
      enum: ["ACTIVE", "PAST_DUE", "SUSPENDED", "CANCELLED"],
      default: "ACTIVE",
    },

    startedAt: { type: Date, default: Date.now },
    nextDueAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);
