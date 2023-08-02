import { styled } from "styled-components";

export const Box = styled.div`
  width: 111.4rem;
  min-height: 21.6rem;

  padding: 3.2rem 5rem;

  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;
  box-shadow: 0rem 1.1rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostDetailSection = styled.div``;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.9rem;
  margin-bottom: 1.2rem;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #979797;
`;

export const PostInfoSection = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;

  color: #979797;
`;

interface ICheckBoxButtonProps {
  checked: boolean;
}

export const StyledInput = styled.input<ICheckBoxButtonProps>`
  appearance: none;

  width: 6.4rem;
  height: 6.4rem;
  background-color: white;

  border-radius: 100%;
  border: 2px solid #000000;
  padding: 0.3rem 0.2rem;
  transition: all 150ms;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='31' fill='black' stroke='black' stroke-width='2'/%3E%3Cpath d='M18 31.8569L27.7453 42L46 23' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #000000;
  }

  position: absolute;
  top: 30%;
  right: -2.5%;
`;
