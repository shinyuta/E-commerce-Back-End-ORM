const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// tag includes id (integer, not null, primary, auto)
// and tag_name (string)
// taken from the module 13 models.
Tag.init(
  {
    // define columns
    // id
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // tag name
    tag_name:{
      type: DataTypes.STRING
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
