import React from 'react';

function DisplayDate() {
      
  const date = new Date();
  const months = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER",  "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

  const days = [
      "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"
    ];

    return (
      <div className="dateContainer">
      <span className="dateP">{date.getDate()}</span>
      <span className="dayP newsSpan">{days[date.getDay()]}</span>
      {/* <div className="m_y_Div"><span>{months[date.getMonth()]}</span><span>/{date.getFullYear()}</span>
      </div> */}
      </div>
    );
  }
  
  export default DisplayDate;