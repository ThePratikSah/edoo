import User, { IUser } from "@/User";
import { withDb } from "../dbConHelper";

// Wrapped function with automatic db connection
export const getUserData = withDb(
  async (): Promise<IUser[]> => await User.find({})
);
