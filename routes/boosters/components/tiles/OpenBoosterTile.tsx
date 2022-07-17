import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Route from "next/router";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";
import { Badge } from "@mui/material";

const OpenBoosterTile = (): JSX.Element => {
  const handleClick = () => {};
  return (
    <StyledCard onClick={handleClick}>
      <StyledImage src={NoelPicturePath} alt="Noel" />
      <CardContent>
        <Badge badgeContent={4} color="primary">
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
