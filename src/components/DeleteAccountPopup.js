import React, { useState } from "react";

export default function DeleteAccountPopup({ onClose, onDelete }) {
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div
        className="
          bg-[var(--color-box-bg)]
          text-[var(--color-text)]
          rounded-[var(--radius-card)]
          shadow-lg
          p-6
          w-[90%] max-w-md
          border border-[var(--color-danger-border)]
        "
      >
        <h3 className="text-xl font-semibold mb-4 text-[var(--color-danger-text)]">
          Confirm Delete Account
        </h3>

        <p className="mb-4 text-[var(--color-text)]">
          This action cannot be undone.<br />
          Please enter your password to confirm deletion.
        </p>

        <input
          type="password"
          placeholder="Enter password"
          className="
            bg-[var(--color-bg)]
            text-[var(--color-text)]
            border border-[var(--color-bg-alt)]
            rounded-[var(--radius-btn)]
            px-3 py-2
            w-full
          "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="
              px-4 py-2
              rounded-[var(--radius-btn)]
              bg-[var(--color-bg-alt)]
              text-[var(--color-text)]
              hover:opacity-80 transition
            "
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(password)}
            className="
              px-4 py-2
              rounded-[var(--radius-btn)]
              bg-[var(--color-danger-border)]
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
