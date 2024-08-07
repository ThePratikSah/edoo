import { getUserData } from "@/utils/helper/user";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const users = await getUserData();

  return (
    <>
      <SignedIn>
        <UserButton showName />
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
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
