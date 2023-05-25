const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: true }).then(() => {
  console.log("Database connected")
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
