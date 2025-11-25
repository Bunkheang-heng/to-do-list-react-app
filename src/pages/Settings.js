import React from "react";
import FooterNav from "../components/FooterNav";

const Settings = () => {
  return (
    <section className="flex flex-col gap-6">

      <h2 className="text-2xl font-semibold tracking-tight text-accent">
        <i className="fas fa-cog mr-2" />
        Settings
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Profile card */}
        <div className="rounded-[var(--radius-card)] bg-white shadow-md border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-text">Profile</h3>
          <p className="text-xs text-subtle mt-1">Manage your account.</p>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex h-10 w-10 items-center justify-center bg-accent text-white rounded-full">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-text">Jane Doe</p>
              <p className="text-xs text-subtle">jane@example.com</p>
            </div>
          </div>

          <button className="mt-4 rounded-[var(--radius-btn)] border border-slate-200 text-sm px-3 py-1.5 hover:text-accent">
            Edit Profile
          </button>
        </div>

        {/* Preferences card */}
        <div className="rounded-[var(--radius-card)] bg-white shadow-md border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-text">Preferences</h3>
          <p className="text-xs text-subtle mt-1">Customize your experience.</p>

          <div className="space-y-3 mt-4 text-sm">
            <div className="flex justify-between">
              <span>Dark mode</span>
              <span className="bg-slate-200 rounded-full px-3 py-1 text-xs">
                <button
                  onClick={() => {
                    document.documentElement.classList.toggle("dark");
                  }}
                  className="rounded-[var(--radius-btn)] border border-slate-300 dark:border-slate-600 px-3 py-1 text-xs font-medium text-text dark:text-text"
                >
                  Toggle Dark Mode
                </button>

              </span>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-[var(--radius-card)] bg-red-50 border border-red-200 p-4">
          <h3 className="text-sm font-semibold text-red-700">Danger Zone</h3>
          <p className="text-xs text-red-600 mt-1">
            Deleting your account is permanent.
          </p>

          <button className="mt-4 rounded-[var(--radius-btn)] px-3 py-1.5 bg-red-600 text-white text-xs">
            Delete Account
          </button>
        </div>

      </div>

      <FooterNav />
    </section>
  );
};

export default Settings;
