import React from "react";
import FooterNav from "../components/FooterNav";

const Home = () => {
  return (
    <section className="flex flex-col gap-6">

      {/* Title */}
      <h2 className="text-2xl font-semibold tracking-tight text-accent">
        Home
      </h2>

      {/* Search Bar */}
      <div className="relative">
        <input
          className="
            w-full
            rounded-[var(--radius-btn)]
            border border-[var(--color-box-bg)]
            bg-[var(--color-box-bg)]
            text-[var(--color-text)]
            placeholder:text-[var(--color-subtle)]
            px-4 py-2.5 pl-10
            shadow-sm
            transition-colors duration-300
          "
          placeholder="Search tasks..."
        />
        <i
          className="
            fas fa-search
            absolute left-3 top-1/2 -translate-y-1/2
            text-[var(--color-subtle)]
            transition-colors duration-300
          "
        />
      </div>

      {/* Example Card */}
      <div
        className="
          rounded-[var(--radius-card)]
          bg-[var(--color-box-bg)]
          text-[var(--color-text)]
          border border-[var(--color-box-bg)]
          shadow-md
          p-4
          transition-colors duration-300
        "
      >
        <p>Orange UI test</p>
      </div>

      <FooterNav />
    </section>
  );
};

export default Home;
