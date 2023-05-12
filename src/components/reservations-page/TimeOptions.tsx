import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import classes from "./TimeOptions.module.scss";

const TimeOptions: React.FC = () => {
  const { values } = useFormikContext<any>();
  const selectedDate = values.date;

  const currDate = new Date();
  const currHours = currDate.getHours();
  const day = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const formattedMonth = "0" + month;
  const year = currDate.getFullYear();
  const currFormattedDate = year + "-" + formattedMonth + "-" + day;

  let availableHours = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  if (selectedDate === currFormattedDate) {
    availableHours = availableHours.filter((hours) => hours > currHours);
  }

  const availableHoursFormatted = availableHours.map((hours) => `${hours}:00`);

  const timeOptions = availableHoursFormatted.map((time) => ({
    value: time,
    label: time,
  }));

  return (
    <div className={classes.controls}>
      <div className={classes.control}>
        <label htmlFor="time">Time</label>
        <div className={classes.input}>
          <GiAlarmClock />
          <Field id="time" name="time" as="select">
            <option value="">Select Time</option>
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        </div>
        <ErrorMessage name="time">
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
};
export default TimeOptions;
