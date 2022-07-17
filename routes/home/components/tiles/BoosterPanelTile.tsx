import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Route from "next/router";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";
import { PAGES } from "../../../../constants/pages";

const BoosterPanelTile = (): JSX.Element => {
  const handleClick = () => Route.push(PAGES.BOOSTERS);
  return (
    <StyledCard onClick={handleClick}>
      <StyledImage src={NoelPicturePath} alt="Noel" />
      <CardContent>
        <Typography variant="h5" component="div">
          Boosters
        </Typography>
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

export default BoosterPanelTile;
