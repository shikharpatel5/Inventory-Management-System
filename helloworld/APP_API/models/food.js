var mongoose = require('mongoose');

var inventorySchema = new mongoose.Schema({
    upc: {type: String, required: true, minLength: 3},
    name: {type: String, required: true, minLength: 3},
    quantity: {type: String, required: true, minLength: 3},
    price: {type: String, required: true, minLength: 3},
    description: {type: String, required: true, minLength: 3},
    category: {type: String, required: true, minLength: 3}
});
mongoose.model('Inventory',inventorySchema);