import type { NextApiRequest, NextApiResponse } from "next";
import sequelize from "../../../db";
import {
  Card,
  CardCollection,
  CardInstance,
  HeroCard,
  SpellCard,
} from "../../../db/models/models";
import { CommonServerResponse } from "../../../types/api";
import type {
  Card as CardType,
  CardColor,
  CardType as CardKind,
  CommonCardFields,
  DiceMap,
} from "../../../types/cards";
import { getUserFromHeader } from "../../../utils/cipher";

type ResponseData = CommonServerResponse & { cards?: CardType[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = await getUserFromHeader(req, res);
  if (!user) return;

  const boostersCount = (await user.get("boostersCount")) as number;
  await user.update({ boostersCount: boostersCount - 1 });

  const randomCards = await Card.findAll({
    order: sequelize.random(),
    limit: 5,
  });

  let responseCardsData: CardType[] = [];

  const userCollection = await CardCollection.findOne({
    where: { userId: user.get("id") },
  });
  if (!userCollection) {
    res.status(404).json({
      success: false,
      error: `No user collection found for user with user id ${user.get("id")}`,
    });
    return;
  }

  for (const randomCard of randomCards) {
    const detailsId = await randomCard.get("detailsId");
    const type = (await randomCard.get("type")) as CardKind;
    const color = (await randomCard.get("color")) as CardColor;

    let commonResponseCardData: CommonCardFields = {
      id: randomCard.get("id") as number,
      name: randomCard.get("name") as string,
      type,
      color,
    };

    if (type === "hero") {
      const cardDetails = await HeroCard.findOne({ where: { detailsId } });
      if (!cardDetails) {
        res.status(404).json({
          success: false,
          error: `No card details found for card with detailsId ${detailsId}`,
        });
        return;
      }
      const responseCardData: CardType = {
        ...commonResponseCardData,
        diceMap: cardDetails.get("diceMap") as DiceMap,
        health: cardDetails.get("health") as number,
      };
      responseCardsData = [...responseCardsData, responseCardData];
    } else if (type === "spell") {
      const cardDetails = SpellCard.findOne({ where: { detailsId } });
    }

    await CardInstance.create({
      cardCollectionId: userCollection.get("id"),
      cardId: randomCard.get("id"),
    });
  }

  res.status(200).json({ success: true, cards: responseCardsData });
}
