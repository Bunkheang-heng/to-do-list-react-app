import React from "react";
import FooterNav from "../components/FooterNav";
import "../index.css";


const Home = () => {
  return (
    <section className="page" id="home">
      <div className="title">Home</div>

      <div className="bar">
        <i className="fas fa-search"></i> [SEARCH] Search tasks...
      </div>

      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col">
          <div className="box">
            <strong style={{ fontSize: "20px" }}>
              [GREETING] Good afternoon, User!
            </strong>
            <p style={{ color: "var(--text-secondary)", margin: "8px 0 0 0" }}>
              You have X tasks due today
            </p>
          </div>

          <div style={{ margin: "20px 0" }}>
            <span className="chip primary">
              <i className="fas fa-plus"></i> [BUTTON] NEW TASK
            </span>
          </div>

          {/* TODAY'S TASKS */}
          <div className="box">
            <strong>Today's Tasks</strong>
            <div className="list">
              <div className="item">
                <i className="far fa-square"></i> [TASK 1] Pay electricity bill{" "}
                <span className="chip danger">DUE TODAY</span>
              </div>

              <div className="item">
                <i className="far fa-square"></i> [TASK 2] Finish homework{" "}
                <span className="chip success">TOMORROW</span>
              </div>

              <div className="item">
                <i className="far fa-square"></i> [TASK 3] Buy vegetables{" "}
                <span className="chip warning">OVERDUE</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – RECENT ACTIVITY */}
        <div className="col aside">
          <strong>Recent Activity</strong>
          <div className="box">
            <i className="fas fa-check-circle"></i> Completed "Task Name"
          </div>
          <div className="box">
            <i className="fas fa-plus-circle"></i> Added "Task Name"
          </div>
          <div className="box">
            <i className="fas fa-edit"></i> Edited "Task Name"
          </div>
        </div>
      </div>

      <FooterNav />

    </section>
  );
};

export default Home;
