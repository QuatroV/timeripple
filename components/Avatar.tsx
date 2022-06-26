import { Badge as MuiBadge } from "@mui/material";
import { Unit } from "../generalTypes";

import { Icon, IconProps } from "./Icon";

interface AvatarProps extends IconProps {
  unit: Unit;
}

export const Avatar = (props: AvatarProps) => {
  const {
    unit: { healthPoints, attackPoints },
  } = props;
  return (
    <MuiBadge
      badgeContent={healthPoints.current}
      showZero
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      color="success"
    >
      <MuiBadge
        badgeContent={attackPoints.current}
        showZero
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        color="error"
      >
        <Icon {...props} />
      </MuiBadge>
    </MuiBadge>
  );
};
