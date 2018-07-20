const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, request_id: 123456 });
});

module.exports = router;
