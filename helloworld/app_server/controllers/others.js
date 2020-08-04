var express = require('express');


const about = (req,res) => {
    res.render('index',{ title: 'About'});
};

module.exports = {
    about
};