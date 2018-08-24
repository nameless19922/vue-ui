const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  setTimeout(() => res.json({ success: true, request_id: 123456 }), 3000);
});

module.exports = router;
