// before run, install this: npm i lucide-react
// then: npm install and npm start

import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function Register({ onSubmit, onGoLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ fullName, email, password, confirm });
  }

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        {/* Title */}
        <div className="mb-6">
          <h1 className="font-mono text-4xl font-extrabold tracking-widest text-neutral-900">
            CREATE ACCOUNT
          </h1>
          <div className="mt-4 h-px w-full bg-neutral-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl" noValidate>
          {/* Full Name */}
          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <div className="mb-4 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <User className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="[INPUT] Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:font-mono placeholder:text-neutral-600"
              required
            />
          </div>

          {/* Email */}
          <label htmlFor="email" className="sr-only">Email address</label>
          <div className="mb-4 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <Mail className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="[INPUT] Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:font-mono placeholder:text-neutral-600"
              required
            />
          </div>

          {/* Password */}
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="mb-4 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <Lock className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="[INPUT] Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:font-mono placeholder:text-neutral-600"
              required
              minLength={6}
            />
          </div>

          {/* Confirm Password */}
          <label htmlFor="confirm" className="sr-only">Confirm Password</label>
          <div className="mb-8 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <Lock className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="[INPUT] Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:font-mono placeholder:text-neutral-600"
              required
              minLength={6}
            />
          </div>

          {/* Create Account button */}
          <button
            type="submit"
            className="mb-10 w-full rounded bg-neutral-800 px-6 py-3 text-center font-mono text-sm font-extrabold tracking-wider text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-label="Create account"
          >
            [BUTTON] CREATE ACCOUNT
          </button>
        </form>

        {/* Footer link */}
        <p className="mt-10 text-center font-mono text-neutral-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onGoLogin}
            className="font-bold text-neutral-800 underline underline-offset-4 hover:no-underline"
          >
            [LINK] LOGIN →
          </button>
        </p>
      </div>
    </main>
  );
}
