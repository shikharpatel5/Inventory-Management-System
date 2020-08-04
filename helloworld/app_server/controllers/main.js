var express = require('express');


const index = (req,res) => {
    res.render('index',{ title: 'Shikhar Patel'});
};

module.exports = {
    index
};