import Demo from "../models/Demo.js";

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

  const demo = await Demo.findByIdAndUpdate(demoId, updates, { new: true });
  res.json(demo);
}


