const cors = require('cors');
const app = require('express')();
const config = require('./config');
const userMedias = require('./routers/users/user-medias');
const userMediaInfo = require('./routers/users/user-media-info');

app.use(cors());

app.use('/users/:user/medias/:media', userMediaInfo);
app.use('/users/:user/medias', userMedias);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listen on port ${config.port}`);
});
