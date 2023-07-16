import { NextPage } from "next";
import { styled } from "styled-components";

interface Props {
  title: string;
}

const PageTitle: NextPage<Props> = ({ title }) => {
  return (
    <Box>
      <Text>{title}</Text>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  padding: 0px 0px 40px 0px;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;

  color: #000000;
`;

export default PageTitle;
