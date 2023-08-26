import { css, styled } from 'styled-components';

export const Box = styled.div<{ isDeleteMode: boolean }>`
  position: relative;
  width: 111.5rem;
  min-height: 21.6rem;

  padding: 3.3rem 5rem;

  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;
  box-shadow: 0rem 1.1rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /**  deleteMode가 아닌 경우에만 이동 버튼이 생김 */
  ${props =>
    !props.isDeleteMode &&
    css`
      &:hover::after {
        content: url('/assets/icons/community/movePost.svg');
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 0;
        top: 0;
        width: 18.4rem;
        height: 21.6rem;
        background: linear-gradient(
          110.52deg,
          rgba(85, 171, 215, 0.7) -23.23%,
          rgba(177, 176, 215, 0.7) 20.47%,
          rgba(242, 178, 207, 0.7) 55.88%,
          rgba(249, 228, 153, 0.7) 121.42%
        );

        box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        border-radius: 3rem;

        cursor: pointer;

        animation: fadein 0.8s;
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
    `}
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 79.1rem;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.9rem;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #979797;
`;

export const InteractionSection = styled.div`
  width: 23.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 14rem;
  display: flex;
  justify-content: space-between;
`;

export const Interaction = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props =>
    props.type === 'views'
      ? 1.5
      : props.type === 'comments'
      ? '1.2'
      : '1.4'}rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;

  color: #979797;
`;

interface ICheckBoxButtonProps {
  checked: boolean;
}

export const CheckBox = styled.input<ICheckBoxButtonProps>`
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
  top: 35%;
  right: -2.5%;
`;

export const StyledLink = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 18.4rem;
  height: 21.6rem;
  background-color: transparent;
  z-index: 999;
`;
