import sequelize from "..";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

export { User };
