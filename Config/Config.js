module.exports = {
  DB: process.env.MONGO_URL ? process.env.MONGO_URL :  'mongodb+srv://anarasta:FaqJhW7z6JGEl3xG@cluster0-ezfxl.mongodb.net/doctor?retryWrites=true&w=majority'
  , // 'mongodb://localhost:27017/doctors',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 3000,
    baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost',
 
  };
  