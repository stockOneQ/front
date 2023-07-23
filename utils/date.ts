export const getDetailDate = () => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const mSecond = String(date.getMilliseconds()).padStart(3, "0");

  return year + month + day + hour + minute + second + mSecond;
};

export const getStringDate = (props: string) => {
  const date = typeof props === "string" ? props.substring(0, 8) : "";
  return `${date.substring(0, 4)}년 ${date.substring(4, 6)}월 ${date.substring(
    6,
    8
  )}일`;
};
