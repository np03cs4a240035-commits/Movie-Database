import mangoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mangoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    watchlist : {
        type: [mangoose.Schema.Types.ObjectId],
        ref: "Movie",
        default: []
    }
{timestamps: true},
)

const User = mangoose.model("User", userSchema);

user.pre("save", () => {
    if(!this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 10);
    }


export default User

user



});