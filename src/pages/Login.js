// before run, install this: npm i lucide-react
// then: npm install and npm start

import React, { useState } from "react";
import { Check, Lock, Mail, Shield, LogIn, Circle } from "lucide-react";

export default function Login({ onSubmit, onContinueWithGoogle, onGoRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ email, password });
  }

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        {/* Title */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm">
            <Lock className="h-7 w-7 text-neutral-700" aria-hidden />
          </div>
          <h1 className="font-mono text-4xl font-extrabold tracking-widest text-neutral-900">
            WELCOME BACK
          </h1>
        </div>

        <div className="h-px w-full bg-neutral-300" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          {/* Email */}
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="mb-4 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <Mail className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="email"
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
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="mb-6 flex items-center gap-3 rounded border border-neutral-400 bg-white px-4 py-3">
            <Shield className="h-5 w-5 text-neutral-700" aria-hidden />
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="[INPUT] Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:font-mono placeholder:text-neutral-600"
              required
            />
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="mb-8 w-full rounded bg-neutral-800 px-6 py-3 text-center font-mono text-sm font-extrabold tracking-wider text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-label="Sign in"
          >
            [BUTTON] SIGN IN
          </button>

          {/* Divider */}
          <div className="mb-8 flex items-center justify-center gap-4 text-neutral-500">
            <div className="h-px flex-1 bg-neutral-300" />
            <span className="font-mono">— or —</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={onContinueWithGoogle}
            className="mb-10 flex w-full items-center justify-center gap-3 rounded border border-neutral-400 bg-white px-6 py-3 font-mono text-sm font-extrabold tracking-wider text-neutral-800 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <Circle className="h-4 w-4" aria-hidden />
            [BUTTON] CONTINUE WITH GOOGLE
          </button>
        </form>

        {/* Footer */}
        <p className="mt-10 text-center font-mono text-neutral-500">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onGoRegister}
            className="font-bold text-neutral-800 underline underline-offset-4 hover:no-underline"
          >
            [LINK] REGISTER →
          </button>
        </p>
      </div>
    </main>
  );
}
