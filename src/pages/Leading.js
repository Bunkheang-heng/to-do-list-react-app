// before run, install this: npm i lucide-react
// then: npm install and npm start

import React from "react";
import { Check, Lock, Rocket, ListChecks, Bell, RefreshCcw, ArrowRight } from "lucide-react";

export default function Leading({ onGetStarted }) {
  return (
    <main className="min-h-screen bg-white text-neutral-800 flex items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        {/* Top badge */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-neutral-300 bg-neutral-50">
          <Check className="h-12 w-12 text-neutral-500" aria-hidden />
        </div>

        {/* Title */}
        <h1 className="text-center text-5xl font-extrabold tracking-widest text-neutral-900 font-mono">
          TODOLIST
        </h1>

        {/* Headline box */}
        <div className="mx-auto mt-6 max-w-3xl rounded border border-neutral-300 bg-neutral-50 p-6 text-center">
          <p className="font-mono text-neutral-500">
            [HEADLINE TEXT] Organize your life, one task at a time.
            <br />Stay productive and never miss a deadline.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            aria-label="Get started"
            onClick={onGetStarted}
            className="inline-flex items-center gap-3 rounded bg-neutral-800 px-10 py-3 font-mono text-lg font-bold tracking-wide text-white shadow hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <Rocket className="h-5 w-5" />
            GET STARTED
          </button>
        </div>

        {/* Feature cards */}
        <section className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FeatureCard
            icon={<ListChecks className="h-9 w-9 text-neutral-500" aria-hidden />}
            title="TASK MANAGEMENT"
            lines={["Create, organize, and", "track all your tasks"]}
          />
          <FeatureCard
            icon={<Bell className="h-9 w-9 text-neutral-500" aria-hidden />}
            title="SMART REMINDERS"
            lines={["Never miss a deadline with", "notifications"]}
          />
          <FeatureCard
            icon={<RefreshCcw className="h-9 w-9 text-neutral-500" aria-hidden />}
            title="SYNC EVERYWHERE"
            lines={["Access from any device,", "anytime"]}
          />
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-neutral-300 pt-6 text-center">
          <p className="font-mono text-sm text-neutral-500">
            [FOOTER] Already have an account?{" "}
            <a
              href="#sign-in"
              className="font-bold text-neutral-800 underline underline-offset-4 hover:no-underline"
            >
              SIGN IN
              <ArrowRight className="ml-1 inline h-4 w-4 align-[-2px]" />
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, lines }) {
  return (
    <div className="rounded border border-neutral-300 bg-neutral-100/60 p-8 text-center">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded bg-neutral-200">
        {icon}
      </div>
      <h3 className="font-mono text-sm font-extrabold tracking-wider text-neutral-800">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-neutral-600">
        {lines[0]} <br />
        {lines[1]}
      </p>
    </div>
  );
}
