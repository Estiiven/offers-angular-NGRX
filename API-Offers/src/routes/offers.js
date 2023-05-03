const { Router } = require('express');
const router = Router();

const offers = require('../ofertasV.json')
//console.log(offers);

router.get('/', (req, res) => {
    res.json(offers);
}) 

module.exports = router;