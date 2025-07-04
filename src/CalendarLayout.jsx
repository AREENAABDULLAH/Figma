
import React from "react";
import "./CalendarLayout.css";
import Header from "./components/Header";

export default function CalendarLayout() {
  return (
    <div className="calendar-container">
 <Header/>
 
      <div className="header"> 
        <h2 className="color">Calendar</h2> 
        <div className="button-group">
          <button
            style={{
              border: "1px solid #facc15",
              color: "#facc15",
              background: "white",
              borderRadius: "4px",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Filter
          </button>
          <button className="add-btn">+ Add Event</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">Monthly</button>
        <button>Weekly</button>
        <button>Daily</button>
      </div>

      {/* Month Navigation */}
      <div className="month-nav" style={{ justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>
            April 2025 ^
          </span>
          <button>&lt;</button>
          <button className="today-btn">&lt; Today &gt;</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="cell"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {day}
          </div>
        ))}

        {Array.from({ length: 35 }).map((_, idx) => (
          <div key={idx} className="cell">
            <div className="date">{idx < 3 ? idx + 28 : idx - 2}</div>

            {idx === 8 && (
              <div className="event">
                Meeting <br /> 11:30 - 13:00
              </div>
            )}
            {idx === 10 && (
              <div
                className="event"
                style={{ background: "#fecaca", color: "#7f1d1d" }}
              >
                Design Review
              </div>
            )}
            {idx === 16 && (
              <>
                <div
                  className="event"
                  style={{ background: "#fecaca", color: "#7f1d1d" }}
                >
                  Design Review <br /> 10:00 - 11:00
                </div>
                <div
                  className="event"
                  style={{ background: "#ddd6fe", color: "#4c1d95" }}
                >
                  Discussion <br /> 10:00 - 11:00
                </div>
              </>
            )}
            {idx === 24 && (
              <>
                <div
                  className="event"
                  style={{ background: "#bbf7d0", color: "#065f46" }}
                >
                  Market Research
                </div>
                <div
                  className="event"
                  style={{ background: "#ddd6fe", color: "#4c1d95" }}
                >
                  Discussion
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
