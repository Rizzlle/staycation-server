const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Bank", BankSchema);
