const request = require('request');
const express = require('express');
const mongoose = require('mongoose');
const Food = mongoose.model('Inventory');

const apiOptions = {
    server : 'http://localhost:3000'
}

const _renderHomepage = function(req,res,responseBody){
    res.render('foodlist',{
        foods: responseBody
    });
};

const homelist = function(req,res){
        const path = '/api/food';
        const requestOptions = {
            url : apiOptions.server + path,
            method : 'GET',
            json : {}
        };
    request(
        requestOptions,
            (err,reponse,body)=>{
            _renderHomepage(req,res,body)
        }
    );
};


const _renderDetailPage = function(req,res,responseBody){
    res.render('food-info',{
       currentFood : responseBody 
    });
};

const foodInfo = function(req,res){
    const path = `/api/food/${req.params.foodid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err,response,body) => {
            _renderDetailPage(req,res,body)
        }
    );
};


const _renderCreatePage = function(req,res){
    
    res.render('create-new-food',{
        title:"create New Food"
    });
};


const addnewFood = function(req,res) {
    _renderCreatePage(req,res);
};



const doAddnewfood = function(req,res){
    
    const path = '/api/food';
    const postdata = {
      upc: req.body.upc,
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category
      
    };
    
    const requestOptions = {
        url: apiOptions.server+path,
        method:'POST',
        json: postdata
    };
    request(
    requestOptions, (err,response,body) => {
        if(response.statusCode ==201 ){
            res.redirect('/');
        }
    }
    );
};

module.exports = { 
	homelist,
	foodInfo,
    doAddnewfood,
    addnewFood
}; 