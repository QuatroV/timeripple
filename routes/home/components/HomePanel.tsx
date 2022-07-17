import styled from "styled-components";
import BoosterPanelTile from "./tiles/BoosterPanelTile";
import PlayPanelTile from "./tiles/PlayPanelTile";
import CollectionPanelTile from "./tiles/CollectionPanelTile";
import AuthPanelTile from "./tiles/AuthPanelTile";

const HomePanel = () => {
  return (
    <StyledPanel>
      <Row>
        <AuthPanelTile />
      </Row>
      <Row>
        <PlayPanelTile />
      </Row>
      <Row>
        <BoosterPanelTile />
        <CollectionPanelTile />
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

export default HomePanel;
