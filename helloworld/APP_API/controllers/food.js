const express = require('express');
const mongoose = require('mongoose');
const Food = mongoose.model('Inventory');

const getFoods = function (req,res){
    Food.find().exec(function(err,fooddata){
        if(err) {
           res.status(404).json(err);
           return;
        }
        res.status(200).json(fooddata);
    });
};



const updateFood = function (req,res) {
    if(!req.params.foodid){
        res.status(404).json({"message": "Not Found, Foodid is required"});
        return;
    }
    Food.findById(req.params.foodid)
    .exec((err, fooddata) => {
        
        if(!fooddata){
            res
            .json(404)
            .status({
                "message": "foodid not found"
            });
            return;
        }
        else if(err){
            res
            .status(400)
            .json(err);
            return;
        }
        
        fooddata.upc = req.body.upc;
        fooddata.name = req.body.name;
        fooddata.quantity = req.body.quantity;
         price: req.body.price;
      description: req.body.description;
      category: req.body.category;
        fooddata.save((err, fooddata) => {
            
            if(err) {
                res
                .status(404)
                .json(err);
            }
            else{
                res
                .status(200)
                .json(fooddata);
            }
        });
    }
    );
 
};

const createFood = function (req,res){
    Food.create({
         upc: req.body.upc,
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category
    },(err, fooddata) => {
        if (err) {
            res
            .status(400)
            .json(err)
        }
        else{
            res
            .status(201)
            .json(fooddata);
            
            
        }
    });
};



const getSingleFood = (req, res) => {
Food
.findById(req.params.foodid)
.exec((err, food) => {
if (!food) {
return res
.status(404)
.json({
"message": "food not found"
});
} else if (err) {
return res
.status(404)
.json(err);
}
res
.status(200)
.json(food);
});
};


const deleteFood = async (req, res) =>res.json(await Food.findOneAndDelete({_id: req.params.foodid})); 




module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};