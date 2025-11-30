import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col gap-6">

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

      {/* Overview Card */}
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

    </section>
  );
};

export default Home;
