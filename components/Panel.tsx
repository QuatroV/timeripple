import { Container } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

interface PanelProps {
  labelText?: string;
}

export const Panel: FC<PanelProps> = (props) => {
  const { labelText, children } = props;
  return (
    <StyledContainer {...props}>
      {labelText && <StyledLabel>{labelText}</StyledLabel>}
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  border-radius: 10px;
  background-color: #d4d4d4;
  padding: 16px;
  position: relative;
  display: flex;
  gap: 16px;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: -25px;
  left: 16px;
  background-color: #0088ff;
  border-radius: 10px;
  padding: 4px;
`;
