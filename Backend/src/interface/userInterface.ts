import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";

export default interface userInterface
  extends Model<
    InferAttributes<userInterface>,
    InferCreationAttributes<userInterface>
  > {
  id: CreationOptional<number>;
  name?: string;
  password?: string;
  email?: string;
  googleId?: string;
  picture?: string;
  role?: string;
  token?: string;
}
