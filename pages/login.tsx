import Link from "next/link";
import { useContext, useState } from "react";
import React from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-64 w-[450px] p-4 border rounded-lg ">
        <h1 className="text-4xl text-center mb-4 border-b pb-4">Login</h1>
        <form
          className=" mx-auto gap-1 flex flex-col w-full"
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className=" w-full border my-1 py-2 px-3 rounded-2xl"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className=" w-full border my-1 py-2 px-3 rounded-2xl"
          />
          <button className="primary btn-primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            {"Don't have an account yet?"}
            <Link className="underline text-black mx-1" href={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
