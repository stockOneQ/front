import styled from 'styled-components'

const FindingIDByBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p { 
    width: 50%;
    text-align: center;
    padding: .9rem 0;
    border-bottom: 1px solid currentColor;
    cursor: pointer;

    color: #979797;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }

  .selected {
    color: var(--color-black);
    border-bottom-width: 3px;
  }
`

const FindingIDInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-bottom: 4.5rem;
  padding: 4.7rem 4.5rem 0;
`

const FindingIDButtonBox = styled.div`
  text-align: center;
`

export {
  FindingIDByBox,
  FindingIDInputBox,
  FindingIDButtonBox
}