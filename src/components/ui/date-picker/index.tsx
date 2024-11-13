import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import './_style.scss'


export const CustomTimePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      
      dateFormat="MMMM d, yyyy"
      
    />
   
  );
};

