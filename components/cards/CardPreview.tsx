import { capitalize } from "@mui/material";
import styled from "styled-components";
import { Card, CardColor, HeroCard } from "../../types/cards";

import NoelPicturePath from "../../public/characters/Noel.webp";
import Image from "next/image";

export const CardPreview = ({ card }: { card: Card }): JSX.Element => {
  return (
    <CardPreviewContainer $color={card.color}>
      <CardTitle>{card.name}</CardTitle>
      <CardImage src={NoelPicturePath} alt="Noel" />
      <CardType>{capitalize(card.type)} card</CardType>
      {/* {card.type === "hero" && (
          <CardHealthContainer>
            <CardHealth>{card.health as HeroCard}</CardHealth>
          </CardHealthContainer>
        )} */}
    </CardPreviewContainer>
  );
};

const BORDER_COLORS = {
  red: "red",
  green: "darkgreen",
  blue: "#001483",
  none: "gray",
};

const CardTitle = styled.h2`
  margin: 0;
  padding: 0.5em 0;
  text-align: center;
`;

const CardType = styled.h4`
  margin: 0;
  text-align: center;
`;

const CardImage = styled(Image)`
  border-radius: 0 0 16px 16px;
  height: 12em;
`;

const CardHealthContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

const CardHealth = styled.div`
  display: flex;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

const CardPreviewContainer = styled.div<{ $color: CardColor }>`
  width: 20em;
  height: 28em;
  border-radius: 16px;
  background: white;
  border: 1px solid ${({ $color }) => BORDER_COLORS[$color]};
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;
