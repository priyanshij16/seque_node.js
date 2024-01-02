module.exports = (sequelize, Datatypes) => {
    const Users = sequelize.define("users", {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        gender: {
            type: Datatypes.STRING
        }
    }, {
        // tableName: 'userdata'
        // timestamps: false
        // updatedAt: false,
        // createdAt: false
    });
    return Users;
}