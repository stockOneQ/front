import styled from "styled-components";

export const TopSection = styled.div`
  display: flex;
  left: 35%;
  position: relative;
`;
export const InforSection = styled.div`
  display: flex;
`;

export const LeftSection = styled.div`
  width: 40%;
`;

export const RightSection = styled.div`
  
`;

export const ImgInput = styled.div`
  width: 180px;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  border-radius: 20px;
  height: 180px;
`;

export const Slider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    top: 10px;
    border-radius: 5px;
    background: #eeeeee;
    outline: none;
    position: relative;

    &::-webkit-slider-thumb {
    -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffc9ff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fcadff;
    cursor: pointer;
  }
`;

export const ReceiptDateInput = styled.div`
  display: flex;
  gap: 5px;
`;

export const QuantitySection = styled.div`
  display: flex;
`;

export const QuantityInputField = styled.input`
  width: 100px;
  height: 45px;
  padding: 6px 10px;
  border: none;
  border-radius: 25px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ReceiptDateInputField = styled.input`
  width: 75px;
  height: 45px;
  padding: 6px 10px;
  border: none;
  border-radius: 25px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;


export const Box = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const QuantityInput = styled.div`
  display: flex;
  margin-left: 9%;
`;
export const StyledInput = styled.div`
  display: flex;
  margin: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  line-height: 30px;
`;

export const Input = styled.input`
  width: 350px;
  height: 45px;
  padding: 6px 10px;
  border: none;
  border-radius: 25px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
