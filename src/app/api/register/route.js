import mongoose from "mongoose";
import { User } from "../../models/User";

export const POST = async (req) => {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const password = body.password;
  if (!password?.length || password.length < 6) {
    new Error("Password must be atleast 6 characters.");
  }

  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(password, salt);

  const createdUser = await User.create(body);
  console.log(Response.json(createdUser));
  return Response.json(createdUser);
};
