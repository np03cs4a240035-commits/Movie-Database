import User from "../data/user.js";

export async function registerUser(newUser) {
  return User.create(newUser);
}

export async function login(email,password) {
    const user =User.findOne({ email });
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
}