const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev')); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
  
//routes
//app.use('/api/main',require('./routes/index'));
app.use('/api/ofertas',require('./routes/offers'));

app.listen(app.get('port'), ()=>{
    console.log('server on port')
})