import { format } from "date-fns";
import { FC, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DatePicker: FC<{
  setDatePicker: (a: boolean) => void;
}> = ({ setDatePicker }) => {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={(day: any) => {
        setDatePicker(false);
        setSelected(day);
      }}
    />
  );
};

export default DatePicker;
