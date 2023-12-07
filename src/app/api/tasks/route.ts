import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
  } catch (error) {
    console.log("Error Creating Task: ", error);
    return NextResponse.json({ error: "Error Getting Task", status: 500 });
  }
}

export async function POST(req: Request) {
  try {
  } catch (error) {
    console.log("Error Creating Task: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (error) {
    console.log("Error Updating Task: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log("Error Deleting Task: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}
