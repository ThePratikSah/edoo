import User, { IUser } from "@/User";
import { withDb } from "../dbConHelper";

// Wrapped function with automatic db connection
export const getUserData = withDb(
  async (): Promise<IUser[]> => await User.find({})
);

export const createUser = withDb(
  async (user: IUser): Promise<IUser> => await User.create(user)
);

export const deleteUser = withDb(
  async (id: string): Promise<any> => await User.findByIdAndDelete(id)
);
