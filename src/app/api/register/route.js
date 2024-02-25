import mongoose from "mongoose";
import { User } from "../../models/User";

export const POST = async (req) => {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  console.log(Response.json(createdUser));
  return Response.json(createdUser);
};
