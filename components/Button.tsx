import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

export const Button = (props: any) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled(MuiButton).attrs({ variant: "outlined" })`
  width: 100%;
  padding: 16px;
`;
