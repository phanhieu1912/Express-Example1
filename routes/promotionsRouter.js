const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());


promotionsRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionsRouter.get('/:promoId', (req,res,next) => {
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
})

.post('/:promoId', (req, res, next) => {
res.statusCode = 403;
res.end('POST operation not supported on /promotions/'+ req.params.promotionId);
})

.put('/:promoId', (req, res, next) => {
res.write('Updating the promo: ' + req.params.promoId + '\n');
res.end('Will update the promo: ' + req.body.name + 
' with details: ' + req.body.description);
})

.delete('/:promoId', (req, res, next) => {
res.end('Deleting promo: ' + req.params.promoId);
})




module.exports = promotionsRouter;
