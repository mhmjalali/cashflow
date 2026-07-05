"use client";

import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  return (
    <>
      <h1>this is just an intro</h1>
      <button
        onClick={() => router.push("/dashboard")}
        className="p-2 bg-primary rounded-2xl text-white my-2"
      >
        go to dashboard
      </button>
    </>
  );
}
