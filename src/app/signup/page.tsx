"use client";
import { SignUp } from "@clerk/nextjs";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Page;
