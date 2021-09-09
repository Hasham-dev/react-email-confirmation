const mongoose = require('mongoose')
const { DB_URL } = require('./config')

mongoose.connect(DB_URL, () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.log(`MongoDB Connected: ${DB_URL}`);
      process.exit()

    }
    )
    .catch((e) => console.log(e))
})