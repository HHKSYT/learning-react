import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // default styling
import { format } from "date-fns";
import "./CalendarTracker.css"

function CalendarTracker() {
  const [dateColors, setDateColors] = useState({});

  function handleDayClick(date) {
    const key = format(date, "yyyy-MM-dd");

    // Cycle through colors: none → red → lightgreen → darkgreen → none
    const current = dateColors[key];
    let next;

    if (!current) next = "danger-edit";
    else if (current === "danger-edit") next = "warning-edit";
    else if (current === "warning-edit") next = "success-edit";
    else next = undefined;

    setDateColors({ ...dateColors, [key]: next });
  }

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="calendar-container">
        <Calendar
          locale="en-US"
          onClickDay={handleDayClick}
          tileClassName={({ date, view }) => {
            const key = format(date, "yyyy-MM-dd");
            return dateColors[key] ? `bg-${dateColors[key]}` : "";
          }}
          
        />
      </div>

    </div>


    </>
  );
}

export default CalendarTracker;
