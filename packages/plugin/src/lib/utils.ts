export const analogTime = (timeMs: number) => {
  // get minutes and seconds
  const minutes = Math.floor(timeMs / 60000);
  const seconds = Math.floor((timeMs % 60000) / 1000);

  // format time
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesStr}:${secondsStr}`;
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// sort by integer in asc
export const sortByOrder = (a: any, b: any) => {
  if (a.order && b.order) {
    return a.order - b.order;
  }
  return 0;
};

// Tuesday, 04 Feb
export const formatDate = (date: Date) => {
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const dayOfWeek = date.toLocaleString("default", { weekday: "long" });

  return `${dayOfWeek}, ${day} ${month}`;
};
