import React, { FC } from "react";
import styled from "styled-components";

export const PageTitle: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

const StyledTitle = styled.span`
  font-size: 100px;
  font-weight: 900;
`;
