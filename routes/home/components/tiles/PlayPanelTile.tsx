import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";

const PlayPanelTile = (): JSX.Element => {
  return (
    <StyledCard>
      <StyledImage src={NoelPicturePath} alt="Noel" />
      <CardContent>
        <Typography variant="h5" component="div">
          Play game
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

export default PlayPanelTile;
