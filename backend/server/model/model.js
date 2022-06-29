//create mongodb scheme
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    age : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;