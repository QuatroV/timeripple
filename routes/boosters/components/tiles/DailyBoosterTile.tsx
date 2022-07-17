import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addDailyBooster } from "../../../../store/domains/boosters/slice";

const DailyBoosterTile = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addDailyBooster());
  return (
    <StyledCard onClick={handleClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          Get daily booster
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 16px;
`;

export default DailyBoosterTile;
