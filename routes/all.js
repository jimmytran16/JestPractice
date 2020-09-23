const express = require('express');
const router = express.Router();

router.get('/all', (req,res) => {
    res.json({
        message:'success'
    })
});

module.exports = router;