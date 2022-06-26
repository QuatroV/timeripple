import { ReactNode } from "react";
import styled from "styled-components";
import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  styled as muiStyled,
} from "@mui/material";
import { Panel } from "./Panel";
import { Icon } from "./Icon";

interface ActionItemProps {
  actionIcon?: ReactNode;
  actionName?: string;
  actionDescription?: string;
}

const ActionItem = ({
  actionIcon,
  actionName,
  actionDescription,
}: ActionItemProps) => {
  return (
    <StyledMenuItem>
      {actionIcon}
      <ListItemText>{actionName}</ListItemText>
    </StyledMenuItem>
  );
};

const StyledMenuItem = muiStyled(MenuItem)`
  display: flex;
  gap: 16px;
  border-radius: 10px;
  padding: 10px;
`;

export const ActionsMenu = () => {
  return (
    <StyledPanel>
      <StyledTitle>Actions</StyledTitle>
      <MenuList sx={{ width: "100%" }}>
        <ActionItem
          actionIcon={<Icon />}
          actionName="Action"
          actionDescription="BlaBla"
        />
        <Divider />
        <ActionItem
          actionIcon={<Icon />}
          actionName="Action"
          actionDescription="BlaBla"
        />
      </MenuList>
    </StyledPanel>
  );
};

const StyledPanel = muiStyled(Panel)`
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  margin: 0px;
`;
