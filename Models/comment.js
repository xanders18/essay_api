const sequelize = require('sequelize')
const db = require('../config/sequelize')

const comment = db.define('comments', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sender_id: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    tours_id: {
        type: sequelize.INTEGER,
    },
    comment: {
        type: sequelize.TEXT,
        allowNull: false
    },
    rating: {
        type: sequelize.DECIMAL,
        allowNull: false
    },
    guides_id: {
        type: sequelize.INTEGER,
    }

})

module.exports = comment