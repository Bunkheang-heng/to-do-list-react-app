import React from "react";
import FooterNav from "../components/FooterNav";

const Home = () => {
  return (
    <section className="flex flex-col gap-6">

      {/* Heading */}
      <h2 className="text-2xl font-semibold tracking-tight text-accent">
        Home
      </h2>

      {/* Search bar */}
      <div className="relative">
        <input
          className="w-full rounded-[var(--radius-btn)] border border-slate-300 bg-white px-4 py-2.5 pl-10 shadow-sm text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="Search tasks..."
        />
        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">

        {/* Left — task cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Tasks
          </h3>

          <div className="rounded-[var(--radius-card)] bg-white shadow-md border border-slate-200 p-4">
            <p className="text-sm font-medium text-text">Design homepage UI</p>
            <p className="text-xs text-subtle mt-1">Due today · Design</p>
          </div>

          <div className="rounded-[var(--radius-card)] bg-white shadow-md border border-slate-200 p-4">
            <p className="text-sm font-medium text-text">Fix dashboard bugs</p>
            <p className="text-xs text-subtle mt-1">Tomorrow · Dev</p>
          </div>
        </div>

        {/* Right — recent activity */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase">
            Activity
          </h3>

          <div className="rounded-[var(--radius-card)] bg-white shadow-md border border-slate-200 p-4 space-y-2 text-sm">
            <p>
              <i className="fas fa-check-circle text-green-500 mr-1" />
              Completed “Email cleanup”
            </p>
            <p>
              <i className="fas fa-edit text-yellow-500 mr-1" />
              Updated “Sales report”
            </p>
            <p>
              <i className="fas fa-plus text-accent mr-1" />
              Added new task “Client proposal”
            </p>
          </div>
        </div>

      </div>

      <FooterNav />
    </section>
  );
};

export default Home;
