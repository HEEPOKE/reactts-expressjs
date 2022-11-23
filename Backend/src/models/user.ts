import { Sequelize, DataTypes } from "sequelize";
import userInterface from "../interface/userInterface";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

const User = sequelize.define<userInterface>("user", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
