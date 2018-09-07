var express = require('express');
var router = express.Router();
var customer= require('../models/customer');
/* GET home page. */
router.post('/add', function(req, res, next) {
  var newCustomer = new customer(req.body.data);
   console.log("added");
  newCustomer.save((err,customer)=>{
    if(err){
        res.send(err);
    }else{
        res.json({message:"user added sucessfully",customer});
    }
  }
);

     
});


router.get('/list', function(req, res, next) {
    let query = customer.find({});
    query.exec((err,customer)=>{
        if(err){
            res.send(err);
        }else{
            res.json({customer});
        }
    });

  });


  router.get('/profile/:name', function(req, res, next) {
    customer.findOne({name:req.params.name},(err,customer)=>{
         if(err) res.send(err);
         res.json(customer);
    });
  });

 /* router.patch('/update/:name', function(req, res, next) {
    customer.findOneAndUpdate({name: req.params.name}, (err,customer) => {
		if(err) res.send(err);
		Object.assign(customer, req.body).save((err, customer) => {
			if(err) res.send(err);
			res.json({ message: 'Book updated!', customer});
		});	
  });
  
  });
*/
router.put('/update/:name', (req, res) => {
  console.log('put IS WORKING!');
  customer.findOneAndUpdate({ name: req.params.name }, req.body.data, { new: true }, (err, doc) => {
  if (err) {
  res.status(500).send({
  success: false,
  message: "unable to fetch!"
  })
  } else {
  res.status(200).send({
    success:true,
    message:"sucessully updated",
    result:doc
  });
  }
  })
  });

  router.delete('/delete/:name', function(req, res) {
    customer.remove({name : req.params.name}, (err, customer) => {
		res.json({ message: "customer sucessfully deleted", customer });
	});
  });

module.exports = router;