export const formattedDate = (target: string, type: "mm.dd hh:mm" | "m월 d일 hh:mm") => {
  if (!target) return "";
  const [date, time] = target.split(" ");
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  if (type === "mm.dd hh:mm") return `${month}.${day} ${time}`;
  if (type === "m월 d일 hh:mm") return `${month}월 ${day}일 ${time}`;
};

export const countDayDiff = (target: string) => {
  const today = new Date();
  const targetDay = new Date(target);
  const timeDiff = targetDay.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};
