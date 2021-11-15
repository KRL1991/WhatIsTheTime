const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    const currentDate = new Date().toLocaleTimeString();

    res.status(200).json({currentDate
});

});


module.exports = router;