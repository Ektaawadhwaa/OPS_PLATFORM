import Demo from "../models/Demo.js";

export async function funnelStats(req, res) {
  const pipeline = [
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ];

  const data = await Demo.aggregate(pipeline);

  const result = {
    BOOKED: 0,
    ATTENDED: 0,
    INTERESTED: 0,
    PAYMENT_PENDING: 0,
    CONVERTED: 0,
  };

  data.forEach((row) => {
    result[row._id] = row.count;
  });

  res.json(result);
}
export async function coachStats(req, res) {
  const pipeline = [
    {
      $group: {
        _id: "$coachId",
        total: { $sum: 1 },
        converted: {
          $sum: {
            $cond: [{ $eq: ["$status", "CONVERTED"] }, 1, 0],
          },
        },
      },
    },
  ];

  const data = await Demo.aggregate(pipeline);
  res.json(data);
}
export async function adminStats(req, res) {
  const pipeline = [
    {
      $group: {
        _id: "$adminId",
        total: { $sum: 1 },
        converted: {
          $sum: {
            $cond: [{ $eq: ["$status", "CONVERTED"] }, 1, 0],
          },
        },
      },
    },
  ];

  const data = await Demo.aggregate(pipeline);
  res.json(data);
}
