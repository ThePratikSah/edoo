import { getUserData } from "@/utils/helper/user";
import Image from "next/image";

export default async function Home() {
  const users = await getUserData();

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <Image
              width={200}
              height={400}
              alt={user.name}
              src={user.image_url}
            />
            <h1>{user.name}</h1>
            <p>{user.id}</p>
          </div>
        </div>
      ))}
    </>
  );
}
