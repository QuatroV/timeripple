import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { boostersCountSelector } from "../../../../store/domains/boosters";
import { openBooster } from "../../../../store/domains/boosters/slice";

const OpenBoosterTile = (): JSX.Element => {
  const boosterCount = useSelector(boostersCountSelector);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(openBooster());
  return (
    <StyledCard onClick={handleClick}>
      <StyledImage src={NoelPicturePath} alt="Noel" />
      <CardContent>
        <Badge badgeContent={boosterCount} color="primary">
          <Typography variant="h5" component="div">
            Open booster
          </Typography>
        </Badge>
      </CardContent>
    </StyledCard>
  );
};

const StyledImage = styled(Image)`
  border-radius: 16px;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
`;

export default OpenBoosterTile;
