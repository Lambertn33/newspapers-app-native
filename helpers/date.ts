// 2023-01-10 => 2023 Oct 10
export const formatDate = (date: Date) => {
  const inputDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = inputDate.getFullYear();
  const month = monthNames[inputDate.getMonth()];
  const day = inputDate.getDate();

  const formattedDate = `${year} ${month} ${day}`;
  return formattedDate;
};

// 2023-10-27T11:12:39.239Z => 2023-10-27
export const stringifyDate = (dateStringWithTime: string) => {
  const date = new Date(dateStringWithTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
