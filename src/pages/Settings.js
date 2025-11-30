import React, { useState } from "react";
import { toast } from 'react-toastify';
import ChangePasswordPopup from "../components/ChangePasswordPopup";
import DeleteAccountPopup from "../components/DeleteAccountPopup";
import { authService } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const initialTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(initialTheme);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const navigate = useNavigate();

  const handleThemeChange = (e) => {
    const value = e.target.value;
    setTheme(value);
    const isDark = value === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", value);
  };

  return (
    <section className="flex flex-col gap-6">

      {/* OUTER WRAPPER */}
      <div
        className="
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          rounded-[var(--radius-card)]
          shadow-md
          p-6
          flex flex-col gap-6
        "
      >

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* THEME CARD */}
          <div
            className="
              bg-[var(--color-box-bg)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-card)]
              shadow-sm
              p-4
            "
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-palette"></i> Theme
            </h4>

            <select
              value={theme}
              onChange={handleThemeChange}
              className="
                bg-[var(--color-bg)]
                text-[var(--color-text)]
                border border-[var(--color-bg-alt)]
                rounded-[var(--radius-btn)]
                px-3 py-2
                w-full
              "
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* CHANGE PASSWORD CARD */}
          <div
            className="
              bg-[var(--color-box-bg)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-card)]
              shadow-sm
              p-4
            "
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-lock"></i> Change Password
            </h4>

            <button
              onClick={() => setShowPopup(true)}
              className="
                bg-[var(--color-accent)]
                text-white
                font-semibold
                px-4 py-2
                rounded-[var(--radius-btn)]
                shadow-sm
                hover:opacity-90
                transition
              "
            >
              Update Password
            </button>
          </div>

        </div>

        {/* --- DANGER ZONE --- */}
        <div
          className="
            rounded-[var(--radius-card)]
            p-4
            border border-[var(--color-danger-border)]
            bg-[var(--color-danger-bg)]
            text-[var(--color-danger-text)]
            shadow-sm
            transition-colors duration-300
          "
        >
          <h4 className="font-semibold flex items-center gap-2 mb-1">
            <i className="fas fa-exclamation-triangle"></i>
            Danger Zone
          </h4>
          <button
            onClick={() => setShowDeletePopup(true)}
            className="
              mt-2 px-4 py-2 rounded-[var(--radius-btn)]
              bg-[var(--color-danger-border)]
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Delete Account
          </button>
        </div>

        {showPopup && (
          <ChangePasswordPopup
            onClose={() => setShowPopup(false)}
            onSave={(data) => {
              const { currentPassword, newPassword, confirmPassword } = data;

              if (newPassword !== confirmPassword) {
                toast.error("New passwords do not match");
                return;
              }

              const result = authService.changePassword(currentPassword, newPassword);

              if (!result.success) {
                toast.error(result.error);
              } else {
                toast.success(result.message);
              }

              setShowPopup(false);
            }}

          />
        )}

        {showDeletePopup && (
          <DeleteAccountPopup
            onClose={() => setShowDeletePopup(false)}
            onDelete={(password) => {
              const result = authService.deleteAccount(password);

              if (!result.success) {
                toast.error(result.error);
                return;
              }

              toast.success("Account deleted");
              navigate("/register");
            }}
          />
        )}



      </div>
    </section>
  );
};

export default Settings;
