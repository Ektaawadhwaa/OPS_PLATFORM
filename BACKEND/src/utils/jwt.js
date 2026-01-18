import jwt from "jsonwebtoken";

export function signToken(account) {
  return jwt.sign(
    {
      accountId: account._id,
      role: account.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}
