import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mt-4 grow flex items-center justify-center ">
      <div className="mb-64 w-[450px] p-4 border rounded-lg ">
        <h1 className="text-4xl text-center mb-4 border-b pb-4">Register</h1>

        <form className=" mx-auto gap-1 flex flex-col w-full">
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className=" w-full border my-1 py-2 px-3 rounded-2xl"
          />
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
            className=" w-full border my-1 py-2 px-3 rounded-2xl"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary bg-main p-2 w-full text-white rounded-2xl">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" href={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
