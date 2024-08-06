import connectMongo from "@/dbConnect";
import User from "@/User";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body: any = await req.json();
    if (body.name) {
      const product = await User.create(body);
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
  try {
    await connectMongo();
    const user = await User.find();
    return NextResponse.json({ data: user });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
