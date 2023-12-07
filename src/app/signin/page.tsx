"use client";
import { NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const Page: NextPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Page;
