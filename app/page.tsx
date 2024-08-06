import dbConnect from "@/dbConnect";
import User, { IUser } from "@/../../models/User";

export default async function Home() {
  await dbConnect();
  const users = (await User.find({})) as IUser[];

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.image_url} />
            <h1>{user.name}</h1>
            <p>{user.id}</p>
          </div>
        </div>
      ))}
    </>
  );
}
