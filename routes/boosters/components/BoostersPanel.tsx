import styled from "styled-components";
import DailyBoosterTile from "./tiles/DailyBoosterTile";

import OpenBoosterTile from "./tiles/OpenBoosterTile";

const BoostersPanel = () => {
  return (
    <StyledPanel>
      <Row>
        <OpenBoosterTile />
      </Row>
      <Row>
        <DailyBoosterTile />
      </Row>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  width: 100%;
  max-width: none;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export default BoostersPanel;
