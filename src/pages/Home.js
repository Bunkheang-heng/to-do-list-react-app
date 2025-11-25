import React from "react";
import FooterNav from "../components/FooterNav";

const Home = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight text-accent">Home</h2>
      <div className="relative">
        <input className="w-full rounded-[var(--radius-btn)] border border-slate-300 dark:border-slate-600 bg-white dark:bg-bg-alt text-text dark:text-text px-4 py-2.5 pl-10 shadow-sm" placeholder="Search tasks..." />
        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
      <p className="text-subtle dark:text-subtle">[Placeholder content]</p>
      <FooterNav />
    </section>
  );
};
export default Home;
