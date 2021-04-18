const sequelize = require('../../db');

const {DataTypes} = require('sequelize');


const Track = sequelize.define('track', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, },
    artist: {type: DataTypes.STRING,},
    text: {type: DataTypes.TEXT, },
    listens: {type: DataTypes.INTEGER, defaultValue:0},
    picture: {type: DataTypes.STRING},
    audio: {type: DataTypes.STRING},
    })
const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    track_id: {type: DataTypes.INTEGER},
    username: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING},
        })
module.exports = {
    Track,
    Comment
}