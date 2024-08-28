import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const userSchema = new Schema({

   vedioFile:{
    type:String,
    required:true,
   },
   thumbnail:{
    type:String,
   },
   owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
   }
   ,
   title:{
    type:String,
    required:true,
   }
   ,
   description:{
    type:String,
    required:true
   },
   duration:{
    type:Number,
    required:True
   },
   views:{
    type:Number,
    default:0,

   },
   isPublished:{
    type:Boolean,
    deault:true
   }
},{timestamps:true})


userSchema.plugin(mongooseAggregatePaginate);
export default User  = Schema.model("User",userSchema)