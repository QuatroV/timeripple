import styled from "styled-components";
import { Avatar as MuiAvatar } from "@mui/material";

export interface IconProps {
  src?: string;
  onClick?: () => void;
}

export const Icon = (props: IconProps) => {
  console.log(props.onClick);
  return <StyledAvatar {...props} />;
};

const StyledAvatar = styled(MuiAvatar)<{ onClick?: () => void }>`
  ${({ onClick }) => onClick && `cursor: pointer;`}
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
