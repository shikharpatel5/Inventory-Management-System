var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    type: {type: String, required: true, minLength: 3},
    Actor: {type: String, required: true, minLength: 3},
    Actress: {type: String, required: true, minLength: 3},
    Director: {type: String, required: true, minLength: 3},
    Languages:{
        one: String,
        two: String
        
    }
});
mongoose.model('Movie',MovieSchema);