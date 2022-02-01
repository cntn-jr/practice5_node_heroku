var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body.redirect);
});

router.post('/', (req, res, next)=>{
    const ope = req.body.ope;
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let result = 0;
    switch(ope){
        case "sum":
            console.log("たし算するよ");
            result = num1 + num2;
            break;
        case "diff":
            console.log("ひき算するよ");
            result = num1 - num2;
            break;
        case "pro":
            console.log("かけ算するよ");
            result = num1 * num2;
            break;
        case "wari":
            console.log("わり算するよ");
            result = num1 / num2;
            break;
    }
    res.render('result', {result: result});
});

module.exports = router;
