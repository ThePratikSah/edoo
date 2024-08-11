import { sendEmail } from "@/utils/helper/send-email";
import { getUserData } from "@/utils/helper/user";
import Image from "next/image";
import { Navbar } from "../../components/Navbar/Navbar";
import { SignedIn } from "@clerk/nextjs";

export default async function Home() {
  const users = await getUserData();

  return (
    <>
      <SignedIn>
        <form action={sendEmail}>
          <button>Send Email</button>
        </form>
      </SignedIn>
      {/* <DropzoneButton /> */}
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
