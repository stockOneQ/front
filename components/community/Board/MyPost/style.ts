import { styled } from 'styled-components';

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

export const SettingButton = styled.button`
  position: absolute;
  top: 75%;
  right: 8%;

  cursor: pointer;
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  position: absolute;
  top: 15%;
  left: 1%;

  span {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export const DeleteOptionBox = styled.div`
  display: flex;
  gap: 3.6rem;

  position: absolute;
  top: 65%;
  right: 5%;
`;

export const ActionButtonGroup = styled.div`
  display: flex;

  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const SelectAllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;

  label {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }

  input[type='checkbox'] {
    zoom: 2;
    margin-bottom: 0.1rem;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const StyledInput = styled.input`
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
