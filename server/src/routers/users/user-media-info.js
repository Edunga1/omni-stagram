const PrivateInstagramGraphApi = require('../../utils/PrivateInstagramGraphApi');

module.exports = (req, res) => {
  const { user: id, media: mediaId } = req.params;

  const api = new PrivateInstagramGraphApi();
  api.mediaInfo(id, mediaId).then((result) => {
    if (result) res.status(200).json(result);
    else res.status(400).end();
  }).catch(() => {
    res.status(404).end();
  });
};
