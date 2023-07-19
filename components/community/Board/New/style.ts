import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;

  gap: 8px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;

{
  /* 컴포넌트로 분리하려다 잘 안돼서 일단 공통 버튼 컴포넌트 한 곳에서 작업 */
}
export const Button = styled.button`
  width: 71px;
  height: 35px;

  /* 텍스트 가운데 정렬 */
  padding-top: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.children === "취소" ? "#979797" : "#000000")};
  border-radius: 23px;

  &:hover {
    background: ${(props) =>
      props.children === "취소"
        ? "#3d3d3d"
        : " linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)"};
  }
`;
