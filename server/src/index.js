const app = require('express')();
const config = require('./config');
const userMedias = require('./routers/users/user-medias');

app.use('/users/:user/medias', userMedias);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listen on port ${config.port}`);
});
