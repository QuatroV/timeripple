import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";
import { Avatar, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nicknameSelector, signOut } from "../../../../store/domains/auth";

const AuthPanelTile = (): JSX.Element => {
  const nickname = useSelector(nicknameSelector);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(signOut());

  return (
    <StyledCard>
      <StyledContent>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="h5" component="div">
          {nickname}
        </Typography>
        <StyledButton onClick={handleClick} color="error" variant="outlined">
          Log out
        </StyledButton>
      </StyledContent>
    </StyledCard>
  );
};

const StyledButton = styled(Button)`
  border-radius: 8px;
  margin-left: auto;
`;

const StyledContent = styled(CardContent)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  width: 100%;
`;

export default AuthPanelTile;
