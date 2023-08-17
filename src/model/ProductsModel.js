const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    BlogTitle: { type: String },
    Img: { type: String },
    Discription: { type: String },
    CreateDate: { type: Date, default: Date.now() }
},
    { versionKey: false }

);

const ProductModel = mongoose.model('products',DataSchema);
module.exports=ProductModel;
