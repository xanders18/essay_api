const sequelize = require('sequelize')
const db = require('../config/sequelize')

const user = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },    
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize.TEXT,        
    },
    lat: {
        type: sequelize.DECIMAL,
    },
    lng: {
        type: sequelize.DECIMAL,
    },
    image: {
        type: sequelize.STRING,
    },
    country_id: {
        type: sequelize.INTEGER
    },
    state_id: {
        type: sequelize.INTEGER
    },
    city_id: {
        type: sequelize.INTEGER
    },
    repass_token: {
        type: sequelize.STRING,
    },
    repass_token_expired: {
        type: sequelize.DATE
    }
})

module.exports = user