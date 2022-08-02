const Vendortype = require("../models/Vendortype");

// Create and Save a Vendor type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Vendortype(body);
    const doc = await Doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Vendor type from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Vendortype.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Vendor type by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Vendortype.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
