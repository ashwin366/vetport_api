const Vendor = require("../models/Vendor")


// Create and Save a Vendor 
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Vendor(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}

// Retrieve all Vendor  from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Vendor.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Vendor by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Vendor.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };