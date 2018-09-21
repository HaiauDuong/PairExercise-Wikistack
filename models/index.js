const Sequelize = require('sequelize');
const db = new Sequelize('postgre://localhost:5432/wikistack');

module.exports = {
    db
}
