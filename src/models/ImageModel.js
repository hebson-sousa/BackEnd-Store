const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");

class ImagemModel extends Model {}

ImagemModel.init(
  {
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    tableName: "imagens",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = ImagemModel;
