import { getRedisClient } from "@/redisConnect";
import { IUser } from "@/User";
import { createUser, getUserData } from "@/utils/helper/user";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body: any = await req.json();
    if (body.name) {
      const product = await createUser(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Product name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET() {
  let user: IUser[];
  try {
    const redisClient = getRedisClient();
    const cachedUser = await redisClient.get("users");
    if (cachedUser) {
      return NextResponse.json({ data: JSON.parse(cachedUser) });
    }
    user = await getUserData();
    await redisClient.set("users", JSON.stringify(user), "EX", 5);
    return NextResponse.json({ data: user });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
