import mongoose,{Schema} from "mongoose";


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        index:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Vedio",
            
        }
    ],
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,
        required:true,
    },
    coverImage:{
        type:String,
    }
    ,password:{
        type:String,
    }
    ,refrestToken:{
        type:String
    }

},{timestamps:true})

//middleware to encrypt the password

//  don't use arrow function because this is not accessible in arrow functions

userSchema.pre("save",  async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10);
    next();
})

// the above code is encrypting but how will you that it is the same  so for that in mongodb we have
// method or using methods we can create a our own

userSchema.methods.isPassword = async function (password){
    return await bcrypt.compare(password,this.password)   // it gives boolean value
}

userSchema.methods.generateAccessToken =  function(){
    jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
    )

}

userSchema.methods.generateRefreshToken  = function(){
    jwt.sign(
        {
        _id:this._id
    },
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn : process.env.REFREST_TOKEN_EXPIRY
})
}
export default User  = Schema.model("User",userSchema)