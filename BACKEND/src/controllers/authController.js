import bcrypt from "bcrypt";
import Account from "../models/Account.js";
import { signToken } from "../utils/jwt.js";

export async function register(req, res) {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const existing = await Account.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const account = await Account.create({
    email,
    passwordHash,
    role,
  });

  const token = signToken(account);

  res.json({ token, role: account.role });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const account = await Account.findOne({ email });
  if (!account) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, account.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signToken(account);
  res.json({ token, role: account.role });
}
