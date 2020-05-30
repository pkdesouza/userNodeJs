const userRoute = require('./userRoute');

module.exports = app => {
  app.use('/users', userRoute),
    app.get('/', (req, res) => { res.send('Api NodeJs with express!') })
}
