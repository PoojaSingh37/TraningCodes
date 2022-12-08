const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: Number},
        role:Enum[role,admin],
        password: {type: String, required: true},
        address:{type:String,}
    },
    {
        collection: "user"
    }
)
const userModel = mongoose.model("userModel", userSchema);
module.exports= userModel