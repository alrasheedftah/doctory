//app.js
// FaqJhW7z6JGEl3xG
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
var fs = require('fs')
const config = require('./Config/Config');

const Doctorroutes = require('./routes/doctor.route');
const AdminRoutes = require('./routes/admin.route')
const StateRoutes = require('./routes/state.route')
const CityRoutes = require('./routes/cities.route')
const UserRoutes = require('./routes/user.route')
const BookedRoutes = require('./routes/booked.route')
const SpecialtyRoutes = require('./routes/specialty.route')

const app = express();

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.disconnect()
// write logs to a file
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'public/access.log'), { flags: 'a' })
 



app.use(cors());  //enable cors

app.use(logger('dev',{ stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/doctors',Doctorroutes);
app.use('/admin',AdminRoutes);
app.use('/states',StateRoutes);
app.use('/cities',CityRoutes)
app.use('/users',UserRoutes)
app.use('/bookeds',BookedRoutes)
app.use('/specialties',SpecialtyRoutes)
// catch 404 and forward to error handler
app.use((req, res, next) => {
    // res.json({ana:"Url NotFount "});
    res.status(404).json(["Url NotFount"]);
//   next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ana:"Inrenal Server Errors "});
});

app.listen(process.env.PORT || config.APP_PORT,()=>{
  
    console.log("Connection on   :")
}); // Listen on port defined in environment


//module.exports = app;

