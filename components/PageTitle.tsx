import React, { FC } from "react";
import styled from "styled-components";
import Router from "next/router";
import { PAGES } from "../constants/pages";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

export const HeaderTitle: FC<{
  className?: string;
  hasBackButton?: boolean;
}> = ({ children, className, hasBackButton }) => {
  return (
    <StyledHeader>
      {hasBackButton && <BackButton onClick={() => Router.push(PAGES.HOME)} />}
      <StyledTitle className={className}>{children}</StyledTitle>
    </StyledHeader>
  );
};

const BackButton = styled(KeyboardArrowLeft)`
  transform: scale(2);
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
`;

const StyledTitle = styled.span`
  font-size: 3.5em;
  font-weight: 900;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
