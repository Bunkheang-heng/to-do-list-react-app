import React, { useState } from "react";

export default function ChangePasswordPopup({ onClose, onSave }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
      "
    >
      <div
        className="
          bg-[var(--color-box-bg)]
          text-[var(--color-text)]
          rounded-[var(--radius-card)]
          shadow-lg
          p-6
          w-[90%] max-w-md
          border border-[var(--color-bg-alt)]
          animate-fadeIn
        "
      >
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>

        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Current password"
            className="
              bg-[var(--color-bg)]
              text-[var(--color-text)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-btn)]
              px-3 py-2
            "
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="New password"
            className="
              bg-[var(--color-bg)]
              text-[var(--color-text)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-btn)]
              px-3 py-2
            "
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm new password"
            className="
              bg-[var(--color-bg)]
              text-[var(--color-text)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-btn)]
              px-3 py-2
            "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-[var(--radius-btn)]
              bg-[var(--color-bg-alt)]
              text-[var(--color-text)]
              hover:opacity-80 transition
            "
          >
            Cancel
          </button>

          <button
            onClick={() =>
              onSave({ currentPassword, newPassword, confirmPassword })
            }
            className="
              px-4 py-2 rounded-[var(--radius-btn)]
              bg-[var(--color-accent)]
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
