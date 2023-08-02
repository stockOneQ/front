import { styled } from "styled-components";

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 95%;
`;

export const HeaderSection = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 75%;
  right: 2%;
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  position: absolute;
  top: 15%;
  left: 2%;

  span {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  gap: 1rem;

  position: absolute;
  top: 65%;
  right: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;

  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 7.1rem;
  height: 4.6rem;

  padding-top: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.children === "취소" ? "#e1e1e1" : "#000000")};
  border-radius: 0.4rem;

  &:hover {
    background: ${(props) =>
      props.children === "취소"
        ? "#3d3d3d"
        : " linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)"};
  }
`;

export const SelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;

  label {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }

  input[type="checkbox"] {
    zoom: 2;
    margin-bottom: 0.1rem;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

type ICheckBoxButtonProps = {
  checked: boolean;
};

export const StyledInput = styled.input<ICheckBoxButtonProps>`
  appearance: none;

  width: 1.6rem;
  height: 1.6rem;
  background-color: white;

  border-radius: 0.4rem;
  border: 1px solid #000000;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='31' fill='black' stroke='black' stroke-width='2'/%3E%3Cpath d='M18 31.8569L27.7453 42L46 23' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: #000000;
  }
`;
