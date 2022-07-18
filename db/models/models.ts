import sequelize from "..";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  boostersCount: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const CardCollection = sequelize.define("cardCollection", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const HeroCard = sequelize.define("heroCard", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  diceMap: { type: DataTypes.JSON },
  health: { type: DataTypes.INTEGER },
});

const SpellCard = sequelize.define("spellCard", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cost: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
});

const Card = sequelize.define("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  type: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },

  detailsId: { type: DataTypes.INTEGER },
});

const CardInstance = sequelize.define("cardInstance", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(CardCollection);
CardCollection.belongsTo(User);

CardCollection.hasMany(CardInstance);
CardInstance.belongsTo(CardCollection);

Card.hasMany(CardInstance);
CardInstance.belongsTo(Card);

Card.hasOne(SpellCard, {
  foreignKey: "detailsId",
  constraints: false,
  scope: {
    commentableType: "spell",
  },
});
SpellCard.belongsTo(Card, { foreignKey: "detailsId", constraints: false });

Card.hasOne(HeroCard, {
  foreignKey: "detailsId",
  constraints: false,
  scope: {
    commentableType: "hero",
  },
});
HeroCard.belongsTo(Card, { foreignKey: "detailsId", constraints: false });

export { User, Card, HeroCard, SpellCard, CardCollection, CardInstance };
