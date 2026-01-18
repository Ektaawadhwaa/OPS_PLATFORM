import Stripe from "stripe";
import Subscription from "../models/Subscription.js";
import Demo from "../models/Demo.js";
import Student from "../models/Student.js";

export async function confirmPayment(req, res) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return res.status(500).json({
      message: "Stripe secret key not configured in .env",
    });
  }

  const { demoId } = req.body;

  if (!demoId) {
    return res.status(400).json({ message: "demoId is required" });
  }

  const demo = await Demo.findById(demoId);
  if (!demo) return res.status(404).json({ message: "Demo not found" });

  if (demo.status === "CONVERTED") {
    return res.status(400).json({ message: "Already converted" });
  }
//  const student = await Student.findOne({
//     parentEmail: demo.parentEmail,
//   });
//    if (!student || !student.accountId) {
//     return res.status(400).json({
//       message: "Student or account not found for this demo",
//     });
//   }
 const student = await Student.create({
    studentName: demo.studentName,
    parentName: demo.parentName,
    parentEmail: demo.parentEmail,
    timezone: demo.timezone,
    studentType: demo.recommendedStudentType,
    level: demo.recommendedLevel,
    status: "ACTIVE",
  });
  demo.status = "CONVERTED";
  await demo.save();

  const subscription = await Subscription.create({
    accountId: student.accountId,
    planId: "DEFAULT",
    amount: 1000,
    billingCycle: "MONTHLY",
    status: "ACTIVE",
    startedAt: new Date(),
    nextDueAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });

  res.json({
    message: "Payment confirmed",
    subscription,
  });
}
