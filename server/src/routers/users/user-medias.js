const PrivateInstagramGraphApi = require('../../utils/PrivateInstagramGraphApi');

module.exports = (req, res) => {
  const { id } = req.params;
  const { count = 20 } = req.query;

  const api = new PrivateInstagramGraphApi();
  api.nextMedias(id, count).then((result) => {
    if (result) res.status(200).json(result);
    else res.status(400).end();
  });
};
