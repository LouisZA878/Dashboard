const express = require('express')
const router = express.Router()


const arr = require('../components/Data')


router.get("/", (req, res) => {

    res.send(arr)
  });




module.exports = router