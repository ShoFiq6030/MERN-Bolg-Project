const ProductModel = require('../model/ProductsModel');


// Create Data
exports.CreateProduct = async (req, res) => {
    try {
        let reqBody = req.body;
        const data = await ProductModel.create(reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};

// Read Data
exports.ReadProduct = async (req, res) => {
    try {
    
        let Query = {};
        let Projection = 'BlogTitle Img Discription';
        const data = await ProductModel.find(Query,Projection);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail",  error: err.message });
    }
};
// Read Data by ID
exports.ReadProductByID = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };
        let Projection = 'BlogTitle Img Discription';
        const data = await ProductModel.find(Query);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail",  error: err.message });
    }
};


// Update data
exports.UpdateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };
        let reqBody = req.body;
        const data = await ProductModel.updateOne(Query, reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};

// Delete Data
exports.DeleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };
        const data = await ProductModel.deleteOne(Query);
        if (data.deletedCount === 1) {
            res.status(200).json({ message: 'Document deleted successfully' });
          } else {
            res.status(404).json({ error: 'Document not found' });
          }
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'An error occurred' });
    }
};
