const Sequelize = require('sequelize')
    // new Sequelize('database', 'username', 'password',
const sequelize = new Sequelize({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rgbXYZ@9182",
    database: "mysql"
});

// test the database connection :
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("synchronized ");
    })
db.users = require('./users')(sequelize.DataTypes);
module.exports = db;