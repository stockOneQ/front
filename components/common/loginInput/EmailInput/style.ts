import styled from 'styled-components'

const EmailInputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  p {
    padding: 0 2.8rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
  }
`

const EmailSelectBox = styled.div`
  width: 18.3rem;
  margin-left: 1.9rem;
  height: 4.5rem;
  padding: 1.3rem 2rem;

  border: 1px solid var(--color-gray);
  border-radius: 5px;
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;

  &:focus {
    border: 1px solid linear-gradient(#F9E499, #F2B2CF, #55ABD7, #B1B0D7);
  }
`

export {
  EmailInputBox,
  EmailSelectBox
}