const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// tag includes id (integer, notnull, primary, auto)
// product id (integer, references models id)
// and tag id (integer, references tags model id) 
// taken from the module 13 models.
ProductTag.init(
  {
    // define columns
    //id
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //product id 
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'product',
        key: 'id'
      }
    },
    //tag id 
    tag_id:{
      type:DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
