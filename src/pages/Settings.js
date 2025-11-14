import React from "react";
import FooterNav from "../components/FooterNav";
import "../index.css";

const Settings = () => {
  return (
    <section className="page" id="settings">
      <div className="title">
        <i className="fas fa-cog"></i> Settings
      </div>

      {/* USER INFO CARD */}
      <div
        className="box"
        style={{
          border: "3px solid var(--border)",
          background: "var(--fill)",
          marginBottom: "24px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="placeholder-img">
            <i className="fas fa-user-circle"></i>
          </div>

          <div style={{ flex: 1 }}>
            <strong
              style={{
                fontSize: "20px",
                display: "block",
                marginBottom: "8px"
              }}
            >
              [USER NAME]
            </strong>

            <p style={{ margin: 0, fontSize: "14px", color: "var(--text-secondary)" }}>
              [EMAIL] user@example.com
            </p>

            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "12px",
                color: "var(--text-secondary)"
              }}
            >
              <i className="fas fa-calendar-check"></i> Member since [DATE]
            </p>
          </div>

          <div>
            <span
              className="chip"
              style={{
                background: "var(--fg)",
                color: "white",
                border: "2px solid var(--fg)",
                padding: "12px 24px",
                fontWeight: 700
              }}
            >
              <i className="fas fa-sign-out-alt"></i> LOG OUT
            </span>
          </div>
        </div>
      </div>

      {/* SETTINGS OPTIONS */}
      <div className="row">
        <div className="col box">
          <strong>
            <i className="fas fa-user"></i> Profile
          </strong>
          <p style={{ margin: "8px 0 0 0", color: "var(--text-secondary)" }}>
            Name, Email, Avatar
          </p>
        </div>

        <div className="col box">
          <strong>
            <i className="fas fa-palette"></i> Preferences
          </strong>
          <p style={{ margin: "8px 0 0 0", color: "var(--text-secondary)" }}>
            Theme, Sort, Density
          </p>
        </div>

        <div className="col box">
          <strong>
            <i className="fas fa-bell"></i> Notifications
          </strong>
          <p style={{ margin: "8px 0 0 0", color: "var(--text-secondary)" }}>
            Daily summary, Reminder time
          </p>
        </div>
      </div>

      {/* DANGER ZONE */}
      <div
        className="box"
        style={{
          border: "3px dashed var(--border)",
          background: "#f5f5f5"
        }}
      >
        <strong style={{ textTransform: "uppercase" }}>
          <i className="fas fa-exclamation-triangle"></i> Danger Zone
        </strong>
        <p style={{ margin: "8px 0 0 0", color: "var(--text-secondary)" }}>
          [ACTION] Delete your account permanently
        </p>
      </div>

    <FooterNav />

    </section>
  );
};

export default Settings;
