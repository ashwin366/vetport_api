const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffshift = new Schema(
  {
    shiftname: {
      type: String,
      required: true,
      trim: true,
    },
    shifttime: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const StaffshiftModel = mongoose.model("staffshift", staffshift);
module.exports = StaffshiftModel;
