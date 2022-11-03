import dayjs from "dayjs";

export const zero = (value) => {
  return value.toString().length < 2 ? "0" + value : value;
};

export const minus1Second = (time, setTime) => {
  setTime(time.subtract(1, "second"));
};

export const timeCa = (string) => {
  if (!string) {
    return null;
  }
  let day = new dayjs();
  const time = dayjs(string);
  // day = dayjs(`${day.year()}-${day.month()}-${day.date()} 08:00:00`);
  day = time
    .subtract(day.hour(), "hour")
    .subtract(day.minute(), "minute")
    .subtract(day.second(), "second");

  day = day.add(8, "hour");

  return day;
};
