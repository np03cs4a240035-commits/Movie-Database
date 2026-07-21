import User from "../../data/user.js";
import bcrypt from "bcrypt";

export async function register(newUser) {
  const existingUser = await User.findOne({
    email: newUser.email,
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  return await User.create(newUser);
}

export async function login(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isValid) {
    return null;
  }

  return user;
}