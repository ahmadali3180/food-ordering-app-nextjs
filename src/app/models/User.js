import bcrypt from "bcrypt";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (password) => {
        if (!password?.length || password.length < 6) {
          new Error("Password must be atleast 6 characters.");
        }
        return `SKPFO${password}-0`;
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", (user) => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
});

const User = models?.User || model("User", UserSchema);

export { User };
