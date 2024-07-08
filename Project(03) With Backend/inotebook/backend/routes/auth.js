const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    obj = {
        a: 'hassan',
        father: 'mehmood'
    }
    res.json(obj)
})

module.exports = router