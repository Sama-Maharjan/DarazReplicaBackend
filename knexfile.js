const path = require('path');
module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'daraz'
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  useNullAsDefault: false
};