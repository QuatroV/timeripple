import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import NoelPicturePath from "../../../../public/characters/Noel.webp";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { goToBoostersPage } from "../../../../store/domains/router/slice";

const BoosterPanelTile = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(goToBoostersPage());
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
