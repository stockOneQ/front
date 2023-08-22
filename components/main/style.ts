//components/main/style
import styled from 'styled-components';

export const DropBoxContainer = styled.div`
  position: absolute;
  top: 0%;
`;

export const TopSection = styled.div`
  top: 33%;
  display: flex;
  font-size: 16px;
  line-height: 35px;
  right: 9%;
  z-index: 99999;
  font-weight: bold;
  position: absolute;
`;

export const HiddenComponent = styled.div`
  display: none;
`;

export const RangeValues = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 7px;
  position: relative;
  width: 689px;
  left: -36%;
  margin-top: 40px;
`;

export const RangeValue = styled.span`
  text-align: center;
`;

export const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export const StyledRadioInput = styled.label`
  font-family: sans-serif;
  display: flex;
  flex-direction: column-reverse; /* Reverse the flex direction */
  align-items: center;
  padding: 10px 16px;
  position: relative;
  cursor: pointer;

  &:last-of-type {
    border-right: 0;
  }

  &:hover {
    background: #eee;
  }

  input[type='radio'] {
    display: none;
  }

  span {
    font-size: 16px;
  }

  input[type='radio']:checked + span {
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: -3px;

      left: 11px;
      width: 69%;
      height: 2px;
      background-image: linear-gradient(to right, #b1b0d7, #f2b2cf, #f9e499);
    }
  }
`;

export const LeftSection = styled.div`
  width: 40%;
  position: absolute;
  left: 26%;
`;

export const RightSection = styled.div`
  margin-left: 30%;
  z-index: 999;
`;

export const StorageMethodRadioGroup = styled.div`
  left: -4%;
  position: relative;
  width: 100%;
  font-size: 18px;
`;

export const StorageMethodRadio = styled.input``;

export const ImgInput = styled.div`
  width: 230px;
  box-shadow: 0px 1.1rem 2rem 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  top: 10%;
  position: relative;
  height: 230px;
  align-items: center;
  justify-content: center;
`;

export const LabelQuant = styled.label`
  font-size: 18px;
  font-weight: bold;
  width: 120px;
  line-height: 49px;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 78%;
  height: 2px;
  left: 70px;
  top: 19px;
  border-radius: 5px;
  background: #eeeeee;
  outline: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: linear-gradient(130deg, #f9e499, #f2b2cf, #b1b0d7);

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
  font-size: 18px;
  font-weight: bold;
  line-height: 57px;

  p {
    margin: 0 3%;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
`;

export const QuantityInputField = styled.input`
  width: 100px;
  height: 45px;
  padding: 10%;
  font-size: 15px;
  border: none;
  border-radius: 25px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ReceiptDateInputField = styled.input`
  width: 100px;
  height: 55px;
  text-align: center;
  border: none;
  border-radius: 30px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ReceiptDateInputYearField = styled(ReceiptDateInputField)`
  width: 183px;
  height: 55px;
  border-radius: 30px;
`;

interface BoxProps {
  hideScroll: boolean;
}

export const InforSection = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  width: 1113px;
  height: 822px;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const QuantityInput = styled.div`
  display: flex;
  margin-left: 3%;
`;
export const StyledInput = styled.div`
  display: flex;
  margin: 3% 3% 4%;
  input[name='productName'] {
    width: 436px;
  }

  input[name='price'] {
    width: 294px;
  }
  input[name='seller'] {
    width: 456px;
  }
  input[name='ingredientLocation'] {
    width: 436px;
  }
`;

export const Range = styled.div`
  display: block;
`;
export const Form = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 4%;
  margin-left: 5%;
  width: 1000px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: ${props => (props.hideScroll ? '7.1rem' : '5.6rem')};

  &::-webkit-scrollbar {
    display: ${props => (props.hideScroll ? 'none' : 'inline-block')};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 0.3rem solid transparent;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
    background-color: #eee;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  width: 141px;
  line-height: 49px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.9rem;
  position: relative;
  margin-top: 5%;
`;

export const Input = styled.input`
  width: 350px;
  height: 55px;
  padding: 2% 5% 2% 4%;
  font-size: 15px;
  border: none;
  border-radius: 40px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 7.1rem;
  height: 3.5rem;
  color: white;
  padding-top: 0.2rem;
  display: flex;
  align-items: center;
  margin-right: 5%;
  justify-content: center;
  background: ${props =>
    props.children === '취소'
      ? 'linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'
      : '#979797'};
  border-radius: 2.3rem;
  &:hover {
    background: ${props =>
      props.children === '취소'
        ? 'linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'
        : 'linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'};
  }
`;
