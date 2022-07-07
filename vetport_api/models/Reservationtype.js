const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationtype = new Schema ({

    Reservation_type : {
          type : String,
    },
    Price : {
        type : Number
    },
    Status : {
        type : Boolean
    }

})

const ReservationtypeModel = mongoose.model("reservationtype", reservationtype)
module.exports = ReservationtypeModel