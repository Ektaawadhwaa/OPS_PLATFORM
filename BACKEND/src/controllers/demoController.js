import Demo from "../models/Demo.js";
import Student from "../models/Student.js";
import Subscription from "../models/Subscription.js";
import { isValidTransition } from "../utils/demoStateMachine.js";
import Account from "../models/Account.js";
import bcrypt from "bcrypt"
import { generatePassword } from "../utils/password.js";

export async function createDemo(req, res) {
  const demo = await Demo.create({
    ...req.body,
    adminId: req.user.accountId,
  });
  res.json(demo);
}

export async function listDemos(req, res) {
  const demos = await Demo.find().sort({ createdAt: -1 });
  res.json(demos);
}

export async function updateDemoStatus(req, res) {
  const { demoId } = req.params;
  const updates = req.body;

//   const demo = await Demo.findByIdAndUpdate(demoId, updates, { new: true });
 const demo = await Demo.findById(demoId);
  if (!demo) return res.status(404).json({ message: "Demo not found" });

  if (updates.status) {
    const valid = isValidTransition(demo.status, updates.status);
    if (!valid) {
      return res.status(400).json({
        message: `Invalid transition from ${demo.status} → ${updates.status}`,
      });
    }
}
if (updates.status === "CONVERTED") {
    let account = await Account.findOne({
    email: demo.parentEmail,
  });
   if (!account) {
    const rawPassword = generatePassword();
    const passwordHash = await bcrypt.hash(rawPassword, 10);

    account = await Account.create({
      email: demo.parentEmail,
      passwordHash,
      role: "CUSTOMER",
    });

    console.log("Parent account created:");
    console.log("Email:", demo.parentEmail);
    console.log("Temp Password:", rawPassword);
  }

    let student = await Student.findOne({
    parentEmail: demo.parentEmail,
  });
     

    // if (existingStudent) {
    //   return res.status(409).json({ message: "Student already exists" });
    // }

  if (!student) {
   student = await Student.create({
     accountId: account._id,
    studentName: demo.studentName,
    parentName: demo.parentName,
    parentEmail: demo.parentEmail,
    timezone: demo.timezone,
    studentType: demo.recommendedStudentType,
    level: demo.recommendedLevel,
     assignedCoachId: demo.coachId,
    status: "ACTIVE",
  });
    await Subscription.create({
    accountId: account._id,
    planId: "DEFAULT",
    amount: 1000,
    billingCycle: "MONTHLY",
  });
}
  }

  Object.assign(demo, updates);
  await demo.save();

  res.json(demo);
}
export async function getDemoById(req, res) {
  const { demoId } = req.params;

  const demo = await Demo.findById(demoId);
  if (!demo) {
    return res.status(404).json({ message: "Demo not found" });
  }

  res.json(demo);
}

export async function assignCoachToDemo(req, res) {
  const { demoId } = req.params;
  const { coachId } = req.body;

  if (!coachId) {
    return res.status(400).json({ message: "coachId is required" });
  }

  const demo = await Demo.findById(demoId);
  if (!demo) {
    return res.status(404).json({ message: "Demo not found" });
  }

  demo.coachId = coachId;
  await demo.save();

  res.json({
    message: "Coach assigned successfully",
    demo,
  });
}
