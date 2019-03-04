const { HttpPost } = require('../utils/const');

module.exports = {
  index: {
    method: HttpPost,
    action: (req, res) => {
      setTimeout(() => res.json({ success: true, request_id: 123456 }), 2000);
    }
  }
};