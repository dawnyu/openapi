module.exports = {
  sequelize: {
    username:'user',
    password:'123456',
    database: 'nodejs',
    host: '123.207.167.150',
    dialect: 'mysql',
    define:{
      underscored:false,
      timestamps: true,
      paranoid: true
    }
  }
}