const PrivateInstagramGraphApi = require('../../utils/PrivateInstagramGraphApi');

module.exports = (req, res) => {
  const { user: id } = req.params;
  const { count, last = '' } = req.query;

  const api = new PrivateInstagramGraphApi();
  api.nextMedias(id, count, last).then((result) => {
    if (result) res.status(200).json(result);
    else res.status(400).end();
  }).catch(() => {
    res.status(404).end();
  });
};
