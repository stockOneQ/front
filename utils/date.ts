/** 게시글 댓글 등록을 위한 */
export const getCurrentDate = () => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

/** props : "2023-07-22T01:01:00" */
export const formatCreatedDateToString = (props: string) => {
  if (props) {
    const date = props.slice(0, 10).split('-');
    return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
  }
};

/** props : "2023-07-22T01:01:00" */
export const formatDetailCreatedDateToString = (props: string) => {
  if (props) {
    const date = props.slice(0, 10).split('-');
    return `${date[0]}년 ${date[1]}월 ${date[2]}일 ${props
      .slice(11)
      .slice(0, 2)}:${props.slice(14).slice(0, 2)}`;
  }
  return '';
};
